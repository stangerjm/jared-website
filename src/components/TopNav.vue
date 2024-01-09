<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/"><img src="../assets/logo.png" alt="Logo" /></RouterLink>

    <RouterLink to="/meet-jared">Meet Jared</RouterLink>
    <span class="jeb-nav--spacer" />
    <RouterLink to="/books">Books</RouterLink>
    <span class="jeb-nav--spacer" />
    <RouterLink to="/newsletter">Newsletter</RouterLink>
    <span class="jeb-nav--spacer" />
    <RouterLink to="/educators">Educators</RouterLink>
    <span class="jeb-nav--spacer" />
    <RouterLink to="/extras">Extras</RouterLink>
  </nav>
</template>

<style scoped>
  img {
    width: 30vw;
  }

  nav {
    width: 60%;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
  }

  .jeb-nav--spacer {
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background: var(--main-font-color);
  }
</style>
