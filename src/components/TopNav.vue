<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const navOpen = ref(true);
const toggleNav = () => {
  navOpen.value = !navOpen.value;
};
</script>

<template>
  <nav>
    <RouterLink to="/"><img src="../assets/logo.png" alt="Logo" /></RouterLink>

    <div>
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
    </div>
  </nav>
</template>

<style scoped>
  img {
    width: 30vw;
    min-width: 15rem;
    max-width: 40rem;
    margin-right: 2rem;
  }

  button {
    background: none;
    border: none;
    display: inline-block;
  }

  a {
    white-space: nowrap;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 2rem;
  }

  .jeb-nav--links {
    width: 75%;
    display: grid;
    grid-gap: 1.5rem;
    grid-auto-flow: column;
    align-items: center;
    margin-top: 1rem;
  }

  .jeb-nav--trigger {
    display: none;
  }

  .jeb-nav--spacer {
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background: var(--main-font-color);
  }

  @media screen and (max-width: 920px) {
    .jeb-nav--links {
      width: auto;
      grid-auto-flow: row;
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
      background: lightgray;
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
