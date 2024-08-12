<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

// Methods for handling the button clicks
const goToHome = () => {
  router.push('/'); // Navigate to the home page
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
  <footer class="bg-gray-800 text-white py-4">
    <div class="container mx-auto flex justify-center">
      <button @click="goToHome" class="mx-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
        Home
      </button>
      <button @click="goToProfile" class="mx-2 px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded">
        Profile
      </button>
      <button @click="logout" class="mx-2 px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded">
        Logout
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
