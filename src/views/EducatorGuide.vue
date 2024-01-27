<script setup lang="ts">
import axios from 'axios';
import type { AxiosError } from 'axios';
import { ref, watch } from 'vue';
import SubmitButton from '../components/SubmitButton.vue';

type SignupError = { message: string };
type SignupResponse = { status: 'success' | 'error'; errors?: SignupError[] };
const firstName = ref('');
const lastName = ref('');
const school = ref('');
const body = ref('');
const email = ref('');
const isValidEmail = ref(false);
const serverErrors = ref<SignupError[]>([]);
const showErrors = ref(false);
const loading = ref(false);
const success = ref(false);
// matches a valid email. See https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

async function signup() {
  if (!firstName.value || !lastName.value || !body.value || !school.value || !isValidEmail.value) {
    showErrors.value = true;
    return;
  }

  try {
    loading.value = true;
    await axios.post<SignupResponse>('/educator.php', {
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
      body: body.value,
      school: school.value,
    });

    // clear any errors
    showErrors.value = false;

    // show the success message
    success.value = true;

    // clear the form
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    school.value = '';
    body.value = '';
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
  <div class="jeb-educator">
    <h1>School Visits</h1>
    <section>
      <p>
        <span>
          I enjoy visiting with kids about storytelling and
          sharing insight on my books. If you would like
          to set up a visit, please email me at JaredEverettBell@gmail.com.
        </span>
        <span>
          Include “School Visit Request - (Name of Teacher, School, City/State)”.
        </span>
        <span>
          During the visit, I will teach a mini-lesson on story structure, comedy,
          and answer questions about writing.
        </span>
      </p>
    </section>
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

      <label>
        School
        <input type="text" v-model="school" />
        <span class="jeb-formError" v-if="!school && showErrors">Please provide a school name.</span>
      </label>

      <label>
        Message
        <textarea type="text" v-model="body" />
        <span class="jeb-formError" v-if="!body && showErrors">Please provide short message.</span>
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
  .jeb-educator {
    width: 60%;
    margin: 0 auto;
  }

  span {
    display: inline-block;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 1100px) {
    .jeb-educator {
      width: 80%;
    }
  }

  @media screen and (max-width: 650px) {
    .jeb-educator {
      display: block;
    }

    h2 {
      text-align: center;
    }
  }
</style>
