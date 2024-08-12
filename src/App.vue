<template>

    <router-view />

</template>

<script lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';

export default {
  setup() {
    const route = useRoute();

    // Determine the layout component to use
    const layoutComponent = computed(() => {
      return route.meta.requiresAuth ? MainLayout : 'div';
    });

    return {
      layoutComponent,
    };
  },
};
</script>

<style>
body {
  @apply bg-gray-100;
}
</style>
