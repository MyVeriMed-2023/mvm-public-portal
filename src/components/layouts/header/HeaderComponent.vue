<template>
  <nav class="bg-app-color">
    <div class="mx-auto px-2 sm:px-6 lg:px-8 mx-6">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-12 w-auto" src="@/assets/images/logo/myverimedLogo.png" alt="Your Company">
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

          <div class="relative ml-1">
            <button type="button" @click="toggleNotificationMenu"
              class="relative rounded-full bg-white p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">

              <n-space :size="24" align="center">
                <n-badge :value="unReadCount" :max="99">
                  <svg class="h-6 w-6" fill="gray" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </n-badge>
              </n-space>

            </button>

            <div v-if="isNotificationOpen"
              class="absolute right-0 z-10 mt-2 px-1 w-72 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-non">
              <div class="bg-app-color p-4 text-center text-white text-lg">

                Notifications

              </div>
              <div class=" scrollable" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">

                <div v-for="(item, index) in notifications" :key="index" @click="handleShowContent(item)"
                  class="cursor-pointer w-full  p-3 rounded shadow flex flex-shrink-0 hover:bg-red-50 dark:hover:bg-black dark:hover:bg-opacity-5">
                  <div tabindex="0" aria-label="group icon" role="img"
                    class="focus:outline-none w-9 h-9 border rounded-full border-gray-200 flex flex-shrink-0 items-center justify-center">
                    <img width="20" height="20" src="@/assets/icons/flat-icons/recalled.png" alt="">
                    <!-- <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.33325 14.6667C1.33325 13.2522 1.89516 11.8956 2.89535 10.8954C3.89554 9.89523 5.2521 9.33333 6.66659 9.33333C8.08107 9.33333 9.43763 9.89523 10.4378 10.8954C11.438 11.8956 11.9999 13.2522 11.9999 14.6667H1.33325ZM6.66659 8.66666C4.45659 8.66666 2.66659 6.87666 2.66659 4.66666C2.66659 2.45666 4.45659 0.666664 6.66659 0.666664C8.87659 0.666664 10.6666 2.45666 10.6666 4.66666C10.6666 6.87666 8.87659 8.66666 6.66659 8.66666ZM11.5753 10.1553C12.595 10.4174 13.5061 10.9946 14.1788 11.8046C14.8515 12.6145 15.2515 13.6161 15.3219 14.6667H13.3333C13.3333 12.9267 12.6666 11.3427 11.5753 10.1553ZM10.2266 8.638C10.7852 8.13831 11.232 7.52622 11.5376 6.84183C11.8432 6.15743 12.0008 5.41619 11.9999 4.66666C12.0013 3.75564 11.7683 2.85958 11.3233 2.06466C12.0783 2.21639 12.7576 2.62491 13.2456 3.2208C13.7335 3.81668 14.0001 4.56315 13.9999 5.33333C14.0001 5.80831 13.8987 6.27784 13.7027 6.71045C13.5066 7.14306 13.2203 7.52876 12.863 7.84169C12.5056 8.15463 12.0856 8.38757 11.6309 8.52491C11.1762 8.66224 10.6974 8.7008 10.2266 8.638Z"
                        fill="#047857" />
                    </svg> -->
                  </div>
                  <div class="pl-3 w-full">
                    <div class="flex items-center justify-between w-full">
                      <p tabindex="0" class="focus:outline-none text-md leading-none">
                        <span class="text-indigo-700"> {{ item.title }}</span>
                      </p>
                      <div v-if="!item.isRead" tabindex="0" aria-label="close icon" role="button"
                        class="focus:outline-none cursor-pointer" @click="updateNotifications(item.id)">
                        <IconConfigProvider color="green" size="24">
                          <Icon class="mb-5 rounded-full  p-1 text-yellow-500">
                            <IosMailOpen />
                          </Icon>
                        </IconConfigProvider>

                      </div>
                    </div>

                    <p tabindex="0" class="focus:outline-none text-sm leading-none">
                      <span class="">{{ item.message }}</span>
                    </p>

                    <p tabindex="0" class="focus:outline-none text-xs leading-3 pt-1 text-gray-500">
                      {{ item.relativeTime }}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Profile dropdown -->
          <div class="relative ml-3">

            <div>
              <button type="button" @click="toggleProfileMenu"
                class="relative rounded-full bg-white p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">

                <img class="h-6 w-6 rounded-full " src="@/assets/icons/flat-icons/ui_set/login/png/008-lock.png" alt="">
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
import { ref, onMounted,h } from 'vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { logoutUser } from '@/service/authService';
import { getNotifications } from '@/service/notificationService'
import enFlag from '@/assets/icons/flags/en.png';
import frFlag from '@/assets/icons/flags/fr.png';
import deFlag from '@/assets/icons/flags/de.png';
import { useI18n } from 'vue-i18n';
import { IosMailOpen } from '@vicons/ionicons4'
import { IconConfigProvider } from '@vicons/utils';
import { Icon } from "@vicons/utils";
import { Notification } from '@/model/notification/notification';
import { updateNotification } from '@/service/notificationService';
import { useDialog } from 'naive-ui';
import DialogComponent from '@/components/dialog/DialogComponent.vue';

export default defineComponent({
  name: 'DashboardComponent',
  components: {
    IosMailOpen, Icon, IconConfigProvider
  },
  setup() {
    const dialog = useDialog()

    const store = useStore();
    const router = useRouter();
    let isProfileOpen = ref(false);

    let isNotificationOpen = ref(false);
    let isLanguageOpen = ref(false);
    const { locale } = useI18n();
    let currentFlag = ref(enFlag);
    let notifications = ref<Notification[]>([]);
    let unReadCount = ref(0)



    const fetchNotifications = async () => {
      const response = await getNotifications();
      if (response.success) {
        notifications.value = response.notification;

        let count = 0;

        if (notifications && notifications.value.length) {
          count = notifications.value.filter(notification => !notification.isRead).length;
        }

        unReadCount.value = count;
      } else {
        console.error('Error fetching notifications:', response.message);
      }
    };

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


    const handleShowContent = (item:Notification) => {

      if(!item.isRead){
            updateNotifications(item.id)
          }

      dialog.warning({
        title: item.title,
        content: () =>
          h(DialogComponent, {
            heading: item.message,
            data: item,
          }),
        positiveText: '',
        negativeText: '',
        onPositiveClick: () => {

        },
        onNegativeClick: () => {
        },
      });
    };

    const toggleLanguageMenu = () => {
      isLanguageOpen.value = !isLanguageOpen.value;
    };

    const toggleNotificationMenu = () => {
      console.log("Notification menu clicked");
      isNotificationOpen.value = !isNotificationOpen.value;
    };

    const changeLanguage = (lang: string) => {
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

    onMounted(() => {
      fetchNotifications();
    });

    const updateNotifications = async (id: string) => {
      const response = await updateNotification([id]);
      if (response.success) {


        console.log('updated notification', response.notification)

        // let item = notifications.value.find((i:Notification)=> i.id === id)

        let index = notifications.value.findIndex((item: Notification) => item.id === response.notification[0].id)

        notifications.value[index] = response.notification[0]

        let count = 0;

        if (notifications && notifications.value.length) {
          count = notifications.value.filter(notification => !notification.isRead).length;
        }

        unReadCount.value = count;
      } else {
        console.error('Error fetching notifications:', response.message);
      }
    };

    return {
      logout,
      profile,
      toggleProfileMenu,
      isProfileOpen,
      toggleLanguageMenu,
      toggleNotificationMenu,
      updateNotifications,
      handleShowContent,
      isNotificationOpen,
      isLanguageOpen,
      currentFlag,
      changeLanguage,
      unReadCount,
      notifications, // Expose notifications
      enFlag,
      frFlag,
      deFlag,
    };
  },
});
</script>

<style scoped>
.dashboard-component {
  padding: 20px;
}

.profile-section,
.language-section,
.notification-section {
  margin-bottom: 10px;
}

.profile-dropdown,
.language-dropdown,
.notification-dropdown {
  background-color: #f5f5f5;
  padding: 10px;
  border: 1px solid #ddd;
  position: absolute;
}

.notification-dropdown {
  max-height: 200px;
  overflow-y: auto;
}

/* Custom scrollbar styles for Webkit browsers */
.scrollable {
  max-height: 300px;
  overflow-y: auto;
}

.scrollable::-webkit-scrollbar {
  width: 8px;
}

.scrollable::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 4px;
}

.scrollable::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}

.notification-dropdown {
  z-index: 20;
  /* Increase as needed */
}
</style>