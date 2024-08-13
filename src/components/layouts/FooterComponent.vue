<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Home32Regular } from '@vicons/fluent'
import { IconConfigProvider } from '@vicons/utils';
import {UserDeleteOutlined} from '@vicons/antd'
import { Icon } from "@vicons/utils";
import {LogOutRound} from '@vicons/material'

const router = useRouter();

// Methods for handling the button clicks
const goToHome = () => {
  router.push('/dashboard'); // Navigate to the home page
};

const goToProfile = () => {
  router.push('/profile'); // Navigate to the profile page (adjust the path as necessary)
};

const logout = () => {
  // Clear the authentication token and redirect to the login page
  localStorage.removeItem('token');
  router.push('/login');
};
</script>

<template>
  <footer class="bg-gray-300 text-white py-2">
    <div class="container mx-auto flex justify-center">
      <button @click="goToHome" class="mx-2 bg-app-color hover:bg-green-700  px-4 py-2 text-white rounded">
        <IconConfigProvider color="white" size="40">
          <Icon class="mb-5 rounded-full  p-1 text-yellow-500">
            <Home32Regular />
          </Icon>
        </IconConfigProvider>
      </button>
      <button @click="goToProfile" class="mx-2 px-4 py-2 bg-app-color hover:bg-green-700 text-white rounded">
        <IconConfigProvider color="white"  size="40">
          <Icon class="mb-5 rounded-full  p-1 text-yellow-500">
            <UserDeleteOutlined />
          </Icon>
        </IconConfigProvider>
      </button>
      <button @click="logout" class="mx-2 px-4 py-2 bg-app-color hover:bg-green-700 text-white rounded">
        <IconConfigProvider color="white"  size="40">
          <Icon class="mb-5 rounded-full  p-1 text-yellow-500">
            <LogOutRound />
          </Icon>
        </IconConfigProvider>
      </button>
    </div>
  </footer>
</template>

<style scoped>
/* Footer styles */
footer {
  text-align: center;
}
</style>