<script setup lang="ts">
import axios from 'axios';
import type { AxiosError } from 'axios';
import { ref, watch } from 'vue';
import SubmitButton from '../components/SubmitButton.vue';

type SignupError = { message: string };
type SignupResponse = { status: 'success' | 'error'; errors?: SignupError[] };
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const isValidEmail = ref(false);
const serverErrors = ref<SignupError[]>([]);
const showErrors = ref(false);
const loading = ref(false);
const success = ref(false);
// matches a valid email. See https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

async function signup() {
  if (!firstName.value || !lastName.value || !isValidEmail.value) {
    showErrors.value = true;
    return;
  }

  try {
    loading.value = true;
    await axios.post<SignupResponse>('/newsletter.php', {
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
    });

    // clear any errors
    showErrors.value = false;

    // show the success message
    success.value = true;

    // clear the form
    firstName.value = '';
    lastName.value = '';
    email.value = '';
  } catch (e) {
    const data = (e as AxiosError).response?.data as SignupResponse;
    serverErrors.value = data?.errors || [];
  } finally {
    loading.value = false;
  }
}

watch(email, () => {
  isValidEmail.value = Boolean(emailRegex.test(email.value));
});
</script>

<template>
  <div class="jeb-newsletter">
    <h1>Newsletter</h1>
    <p>Sign up to receive updates on book releases.</p>
    <p>Newsletters will include art, chapters, and surprises
      before they are posted on social media.</p>
    <form>
      <label>
        First Name
        <input type="text" v-model="firstName" />
        <span class="jeb-formError" v-if="!firstName && showErrors">Please provide a first name.</span>
      </label>

      <label>
        Last Name
        <input type="text" v-model="lastName" />
        <span class="jeb-formError" v-if="!lastName && showErrors">Please provide a last name.</span>
      </label>

      <label>
        Email
        <input type="text" v-model="email" />
        <span class="jeb-formError" v-if="!isValidEmail && showErrors">Please provide a valid email.</span>
      </label>
      <SubmitButton @signup="signup" :loading="loading" />

      <p class="jeb-formError" v-for="(error, idx) in serverErrors" :key="idx">
        {{error.message}}
      </p>
    </form>
    <p class="jeb-newsletter--success" v-if="success">Thank you for signing up.</p>
  </div>
</template>

<style scoped>
  .jeb-newsletter {
    margin: 0 auto;
    width: 60%;
    max-width: 60rem;
  }

  .jeb-newsletter--success {
    margin-top: 1rem;
  }

  form {
    margin-top: 1rem;
  }

  p {
    text-align: center;
  }

  @media screen and (max-width: 450px) {
    .jeb-newsletter {
      width: 100%;
      padding: 2rem;
    }
  }
</style>
