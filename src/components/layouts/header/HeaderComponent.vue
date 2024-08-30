<script lang="ts">
import { ref } from 'vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { logoutUser } from '@/service/authService';

export default defineComponent({
  name: 'DashboardComponent',
  setup() {
    const store = useStore();
    const router = useRouter();
    let isProfileOpen = ref(false)

    const logout = async () => {
      await logoutUser(store);
      router.push('/login');
      // Optionally redirect or perform other actions after logout
    };

    const profile = async () => {
      isProfileOpen.value = false
      router.push('/profile');
      // Optionally redirect or perform other actions after logout
    };


    const toggleProfileMenu = () => {
      isProfileOpen.value = !isProfileOpen.value
    }

    return { logout, toggleProfileMenu, isProfileOpen,
      profile
     };
  },
});
</script>

<template>
  <nav class="bg-app-color">
    <div class="mx-auto px-2 sm:px-6 lg:px-8 mx-6">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="@/assets/images/logo/myverimedLogo.png" alt="Your Company">
          </div>
          <!-- <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">

              <a href="#" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                aria-current="page">Dashboard</a>
              <a href="#"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
              <a href="#"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
              <a href="#"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
            </div>
          </div> -->
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button"
            class="relative rounded-full bg-app-color p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">View notifications</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </button>

          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <div>
              <button type="button" @click="toggleProfileMenu"
                class="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">Open user menu</span>
                <img class="h-12 w-12 rounded-full p-2"
                  src="@/assets/icons/flat-icons/ui_set/login/png/008-lock.png"
                  alt="">
              </button>
            </div>

            <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
              -->
            <div v-if="isProfileOpen"
              class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
              <!-- Active: "bg-gray-100", Not Active: "" -->
              <a  @click="profile" href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                id="user-menu-item-0">Your Profile</a>
              <a @click="logout" href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                id="user-menu-item-2">Sign out</a>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">

        <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
          aria-current="page">Dashboard</a>
        <a href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
        <a href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
        <a href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
      </div>
    </div> -->
  </nav>

</template>