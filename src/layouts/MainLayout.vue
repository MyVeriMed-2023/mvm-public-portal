<script setup lang="ts">
import FooterComponent from '@/components/layouts/FooterComponent.vue';
import HeaderComponent from '@/components/layouts/header/HeaderComponent.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <HeaderComponent />

    <!-- Main Content -->
    <main class="flex-1">
      <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <RouterView></RouterView>
      </div>
    </main>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<style scoped>
/* Ensure that the body takes up the full height of the viewport */
body {
  @apply min-h-screen bg-gray-100;
}

/* Style for the main layout */
</style>
