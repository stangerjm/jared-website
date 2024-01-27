<script setup lang="ts">
import { defineProps } from 'vue';

const { loading } = defineProps<{ loading: Boolean }>();
</script>

<template>
  <button class="jeb-submitButton" :class="loading ? 'jeb-submitButton__loading' : ''" type="submit" @click.prevent="$emit('signup')" value="Sign up">
    <span v-if="!loading">Submit</span>
    <span v-if="loading" class="jeb-submitButton--spinner" />
  </button>
</template>

<style scoped>
  .jeb-submitButton {
    color: white;
    background: var(--button-background-color);
    padding: 1.5rem;
    position: relative;
    font-size: 1.5rem;
    height: 50px;
    width: 10rem;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-out;
  }

  .jeb-submitButton:hover {
    box-shadow: 1px 1px 3px var(--button-background-color);
  }

  .jeb-submitButton:active {
    background-color: var(--button-background-active-color);
  }

  .jeb-submitButton__loading {
    border-radius: 50px;
    width: 50px;
  }

  .jeb-submitButton.jeb-submitButton__loading::after {
    width: 40px;
    left: 5px;
    top: 12px;
    border-radius: 100%;
  }

  .jeb-submitButton--spinner {
    display: block;
    width: 34px;
    height: 34px;
    position: absolute;
    top: 8px;
    left: calc(50% - 17px);
    background: transparent;
    box-sizing: border-box;
    border-top: 4px solid white;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-radius: 100%;
    animation: spin 0.6s ease-out infinite;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
</style>
