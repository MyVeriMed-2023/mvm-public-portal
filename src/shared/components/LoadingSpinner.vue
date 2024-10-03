<!-- src/components/LoadingSpinner.vue -->
<template>
    <div v-if="isLoading" class="loading-spinner">
      <!-- Spinner animation -->
      <div class="spinner"></div>
    </div>
  </template>

  <script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['isLoading']), // Map the loading state from Vuex
    },
  };
  </script>

  <style scoped>
  .loading-spinner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .spinner {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top: 4px solid #fff;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
