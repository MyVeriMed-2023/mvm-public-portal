<template>
    <header class="w-full bg-app-color shadow transition-transform duration-300">
      <div class="container mx-auto px-4 py-6 flex justify-between items-center">
        <a @click="goTo('/dashboard')" href="#" class="text-2xl font-bold text-white">MyVeriMed Blog</a>
        <nav>
          <!-- <a href="#" class="text-white hover:text-gray-900 ml-6">Home</a>
          <a href="#" class="text-white hover:text-gray-900 ml-6">About</a>
          <a href="#" class="text-white hover:text-gray-900 ml-6">Contact</a> -->
          <a @click="goTo('/login')" href="#" class="text-white hover:text-gray-900 ml-6">Login</a>
        </nav>
      </div>
    </header>
  </template>

  <script>
import { useRouter } from 'vue-router';

  export default {
    name: 'HeaderComponent',
    setup() {
        const router = useRouter();

        const goTo = (path)=>{
            router.push(path)
        }

        return {
            goTo
        }
    }
  };
  </script>

  <style scoped>
  /* Additional styling if needed */
  </style>
