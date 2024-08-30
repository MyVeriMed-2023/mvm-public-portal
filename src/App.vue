<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';

// Access the route using the useRoute() hook
const route = useRoute();

// Determine the layout component to use
const layoutComponent = computed(() => {
  return route.meta.requiresAuth ? MainLayout : 'div';
});
</script>

<style>
body {
  @apply bg-gray-100;
}
</style>