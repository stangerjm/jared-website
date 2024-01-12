<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const navOpen = ref(false);
const toggleNav = () => {
  navOpen.value = !navOpen.value;
};
</script>

<template>
  <nav>
    <RouterLink to="/" class="jeb-nav--logo"><img src="../assets/logo.png" alt="Logo" /></RouterLink>

    <button type="button" class="jeb-nav--trigger" @click="toggleNav">
      <span class="jeb-nav--line" />
      <span class="jeb-nav--line" />
      <span class="jeb-nav--line" />
    </button>
    <div class="jeb-nav--links" :class="navOpen ? '' : 'jeb-nav--links__hidden'">
      <RouterLink to="/meet-jared">Meet Jared</RouterLink>
      <span class="jeb-nav--spacer" />
      <RouterLink to="/books">Books</RouterLink>
      <span class="jeb-nav--spacer" />
      <RouterLink to="/newsletter">Newsletter</RouterLink>
      <span class="jeb-nav--spacer" />
      <RouterLink to="/educators">Educators</RouterLink>
      <span class="jeb-nav--spacer" />
      <RouterLink to="/extras">Extras</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
  .jeb-nav--logo {
    border: none;
    padding: 0;
  }

  .jeb-nav--logo:hover {
    background: none;
  }

  img {
    width: 30vw;
    min-width: 15rem;
    max-width: 40rem;
    margin-right: 2rem;
    grid-area: logo;
  }

  button {
    background: none;
    border: none;
    display: inline-block;
  }

  a {
    white-space: nowrap;
    font-size: 1.75rem;
    padding: 1rem;
  }

  nav {
    display: grid;
    grid-template-areas: "logo links";
    justify-content: space-between;
    align-items: center;
    padding-right: 2rem;
    font-family: Dortmund;
  }

  .jeb-nav--links {
    grid-area: links;
    width: 75%;
    display: grid;
    grid-gap: 1rem;
    grid-auto-flow: column;
    align-items: center;
    margin-top: 1rem;
  }

  .jeb-nav--trigger {
    display: none;
    grid-area: trigger;
  }

  .jeb-nav--spacer {
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background: var(--main-font-color);
  }

  @media screen and (max-width: 950px) {
    nav {
      grid-template-areas: "logo  trigger"
                           "links links";
    }

    a {
      border-top: 0.1rem solid black;
      padding: 1rem;
    }

    a:hover {
      background: var(--hover-color);
    }

    .jeb-nav--links {
      width: auto;
      margin-left: 1rem;
      grid-auto-flow: row;
      grid-gap: 0;
      right: 0;
    }

    .jeb-nav--links__hidden {
      display: none;
    }

    .jeb-nav--trigger {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 4.5rem;
      height: 4.5rem;
      padding: 1rem;
      border-radius: 0.3rem;
    }

    .jeb-nav--trigger:hover {
      cursor: pointer;
      background: var(--hover-color);
    }

    .jeb-nav--line {
      display: inline-block;
      width: 100%;
      height: 0.2rem;
      background: var(--main-font-color);
    }

    .jeb-nav--spacer {
      display: none;
    }
  }
</style>
