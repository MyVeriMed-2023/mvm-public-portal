<template>
  <nav class="bg-app-color">
    <div class="mx-auto px-2 sm:px-6 lg:px-8 mx-6">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="@/assets/images/logo/myverimedLogo.png" alt="Your Company">
          </div>
        </div>

        <!-- Language Selection Dropdown -->


        <!-- Notification and Profile dropdown -->
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

          <div class="relative ml-3">
          <button type="button" @click="toggleLanguageMenu"
            class=" mr-2 relative flex items-center p-1 rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="language-menu-button">
            <span class="sr-only">Select Language</span>
            <img class="h-6 w-6 rounded-full" :src="currentFlag" alt="Selected Language">
          </button>

          <div v-if="isLanguageOpen"
            class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="language-menu-button">
            <!-- Language Options with Flags -->
            <a @click="changeLanguage('en')" href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem">
              <img class="inline-block h-4 w-4 mr-2" src="@/assets/icons/flags/en.png" alt="English"> English
            </a>
            <a @click="changeLanguage('fr')" href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem">
              <img class="inline-block h-4 w-4 mr-2" src="@/assets/icons/flags/fr.png" alt="French"> Français
            </a>
            <a @click="changeLanguage('de')" href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem">
              <img class="inline-block h-4 w-4 mr-2" src="@/assets/icons/flags/de.png" alt="German"> Deutsch
            </a>
          </div>
        </div>

          <button type="button"
            class="relative rounded-full bg-app-color p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">View notifications</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" aria-hidden="true">
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
                <img class="h-12 w-12 rounded-full p-2" src="@/assets/icons/flat-icons/ui_set/login/png/008-lock.png"
                  alt="">
              </button>
            </div>

            <div v-if="isProfileOpen"
              class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
              <a @click="profile" href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem">Your
                Profile</a>
              <a @click="logout" href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem">Sign out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { ref } from 'vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { logoutUser } from '@/service/authService';
import enFlag from '@/assets/icons/flags/en.png';
import frFlag from '@/assets/icons/flags/fr.png';
import deFlag from '@/assets/icons/flags/de.png';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'DashboardComponent',
  setup() {
    const store = useStore();
    const router = useRouter();
    let isProfileOpen = ref(false);
    let isLanguageOpen = ref(false);
    const { locale } = useI18n();
    let currentFlag = ref(enFlag); // Default to English flag

    const logout = async () => {
      await logoutUser(store);
      router.push('/login');
    };

    const profile = async () => {
      isProfileOpen.value = false;
      router.push('/profile');
    };

    const toggleProfileMenu = () => {
      isProfileOpen.value = !isProfileOpen.value;
    };

    const toggleLanguageMenu = () => {
      isLanguageOpen.value = !isLanguageOpen.value;
    };

    const changeLanguage = (lang: any) => {
      locale.value = lang;
      isLanguageOpen.value = false;

      // Change flag based on language
      if (lang === 'en') {
        currentFlag.value = enFlag;
      } else if (lang === 'fr') {
        currentFlag.value = frFlag;
      } else if (lang === 'de') {
        currentFlag.value = deFlag;
      }
    };

    return {
      logout,
      profile,
      toggleProfileMenu,
      isProfileOpen,
      toggleLanguageMenu,
      isLanguageOpen,
      currentFlag,
      changeLanguage
    };
  },
});
</script>

<style scoped>
/* Add your styles here */
</style>
