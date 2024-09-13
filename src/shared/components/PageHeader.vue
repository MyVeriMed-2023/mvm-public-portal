<template>
    <header class="text-center py-4 sm:py-8 bg-app-color">
      <h1 class="text-xl sm:text-3xl font-bold text-white">{{ title }}</h1>
      <p class="text-white text-lg" v-if="subtitle">{{  $t('pageHeader.welcome') }}</p>
    </header>
  </template>

  <script>
  export default {
    name: 'PageHeader',
    props: {
      title: {
        type: String,
        default: 'MyVeriMed',
      },
      subtitle: {
        type: String,
        default: '',
      },
    },
  };
  </script>

  <style scoped>
  /* Add your styles here if needed */
  </style>
