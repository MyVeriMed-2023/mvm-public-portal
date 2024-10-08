<template>

  <n-dialog-provider>
    <n-message-provider>
      <n-notification-provider>
        <n-loading-bar-provider>
          <component :is="layoutComponent">
            <LoadingSpinner/>
            <router-view />
          </component>
        </n-loading-bar-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-dialog-provider>


</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import LoadingSpinner from '@/shared/components/LoadingSpinner.vue';

import {
	NMessageProvider,
	NDialogProvider,
	NNotificationProvider,
	NLoadingBarProvider,
} from 'naive-ui'


// Access the route using the useRoute() hook
const route = useRoute();

// Determine the layout component to use
const layoutComponent = computed(() => {
  return route.meta.requiresAuth ? MainLayout : 'div';
});
</script>

<style>
body {
  @apply bg-white;
}
</style>