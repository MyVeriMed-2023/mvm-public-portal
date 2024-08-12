<template>
  <div class="container mx-auto">
    <header class="text-center py-8">
      <h1 class="text-3xl font-bold">MyVeriMed</h1>
    </header>

    <main class="">
      <!-- <div class="max-w-5xl mx-auto mt-6 p-6">
        <div class="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-4 grid-cols-1">
          <div class="text-white mt-6">
            <button class="rounded-lg hover:bg-teal-400 bg-teal-500 w-full py-3 custom-btn text-left pl-4 font-4xl"
              @click="scanProduct">
              <Icon color="white" size="24">
                <IosQrScanner/>
              </Icon>
              Scan a product
            </button>
          </div>

          <div class="text-white mt-6">
            <button @click="electronicProduct"
              class="rounded-lg hover:bg-teal-400 bg-teal-500 w-full py-3 custom-btn text-left pl-4">
              <Icon color="white" size="24">
                <IosInformationCircleOutline/>
              </Icon>
              Electronic Product Information
            </button>
          </div>

          <div class="text-white mt-6">
            <button @click="fillForm"
              class="rounded-lg hover:bg-teal-400 bg-teal-500 w-full py-3 custom-btn text-left pl-4">
              <Icon color="white" size="24">
                <IosPaper/>
              </Icon>
              Report an event OR fill a form
            </button>
          </div>

          <div class="text-white mt-6">
            <button class="rounded-lg hover:bg-teal-400 bg-teal-500 w-full py-3 custom-btn text-left pl-4">
              <Icon color="white" size="24">
                <AddLocationOutlined/>
              </Icon>
              Where to get products in supply difficulty
            </button>
          </div>

          <div class="text-white mt-6">
            <button class="rounded-lg hover:bg-teal-400 bg-teal-500 w-full py-3 custom-btn text-left pl-4">
              <Icon color="white" size="24">
                <AddLocationOutlined/>
              </Icon>
              Where to buy secured product
            </button>
          </div>
        </div>
      </div> -->


      <!-- <div
            class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"
        >
            <div
                class="relative flex w-72 flex-col items-center overflow-hidden rounded-3xl bg-blue-400 p-6" id="widget"
            >
                <div
                    class="absolute -bottom-20 z-10 h-96 rounded-full bg-blue-500"
                    style="width: 430px"
                ></div>
                <div class="z-10 w-full">
                    <div
                        class="flex w-full justify-between text-sm text-blue-50"
                    >
                        <div>Day</div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 transform duration-200 hover:scale-110 cursor-pointer"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                ></path>
                            </svg>
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 transform duration-200 hover:scale-110 cursor-pointer"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div class="flex w-full justify-center">
                        <img
                            src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_19-512.png"
                            class="tranform my-6 w-32 duration-200 hover:scale-105"
                        />
                    </div>
                    <div class="flex w-full flex-col items-center">
                        <h2 class="text-7xl font-extrabold text-white">
                            32<sup class="text-5xl font-medium">o</sup>
                        </h2>
                        <p class="text-white">Miami</p>
                    </div>
                    <div
                        class="mt-10 flex w-full justify-between text-sm text-blue-50"
                    >
                        <div
                            class="flex flex-col items-center justify-center space-y-1"
                        >
                            <p class="text-xs">Wind Now</p>
                            <p><span class="text-xl font-bold">15</span>km</p>
                        </div>
                        <div
                            class="flex flex-col items-center justify-center space-y-1"
                        >
                            <p class="text-xs">Huminity</p>
                            <p><span class="text-xl font-bold">30</span>%</p>
                        </div>
                        <div
                            class="flex flex-col items-center justify-center space-y-1"
                        >
                            <p class="text-xs">Precipitation</p>
                            <p><span class="text-xl font-bold">81</span>%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

      <div class=" flex-col bg-gray-100 py-6 sm:py-12">
        <div class="flex grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4" id="widget">

          <div class="flex h-64 w-auto  items-center justify-center rounded-lg bg-app-color">
            <div class="flex flex-col space-x-2">
              <div class="text-center">
                <IconConfigProvider color="white" size="60">
                  <Icon class="mb-5 rounded-full  p-1 text-yellow-500">
                    <IosQrScanner />
                  </Icon>
                </IconConfigProvider>
              </div>
              <div class="text-center  text-sm md:text-xl font-bold text-white">Scan a product</div>
              <div class="my-2 text-center text-gray-500">

              </div>
              <div class="flex items-center text-green-500">
                <div class="mx-auto flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
                  <span>10.5%</span>
                </div>
              </div>
            </div>
          </div>



          <div class="flex h-64 w-auto  items-center justify-center rounded-lg bg-app-color">
            <div class="flex flex-col space-x-2">
              <div class="text-center">
                <IconConfigProvider color="white" size="60">
                  <Icon class="mb-5 rounded-full  p-1 text-yellow-500">
                    <IosInformationCircleOutline />
                  </Icon>
                </IconConfigProvider>
              </div>
              <div class="text-center  text-sm md:text-xl font-bold text-white">Electronic product information</div>
              <div class="my-2 text-center text-gray-500">

              </div>
              <div class="flex items-center text-green-500">
                <div class="mx-auto flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
                  <span>10.5%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex h-64 w-auto  items-center justify-center rounded-lg bg-app-color">
            <div class="flex flex-col space-x-2">
              <div class="text-center">
                <IconConfigProvider color="white" size="60">
                  <Icon class="mb-5 rounded-full  p-1 text-yellow-500">
                    <IosPaper/>
                  </Icon>
                </IconConfigProvider>
              </div>
              <div class="text-center  text-sm md:text-xl font-bold text-white"> Report an event OR fill a form </div>
              <div class="my-2 text-center text-gray-500">

              </div>
              <div class="flex items-center text-green-500">
                <div class="mx-auto flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
                  <span>10.5%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex h-64 w-auto  items-center justify-center rounded-lg bg-app-color">
            <div class="flex flex-col space-x-2">
              <div class="text-center">
                <IconConfigProvider color="white" size="60">
                  <Icon class="mb-5 rounded-full  p-1 text-yellow-500">
                    <AddLocationOutlined/>
                  </Icon>
                </IconConfigProvider>
              </div>
              <div class="text-center  text-sm md:text-xl font-bold text-white"> Where to get products in supply difficulty </div>
              <div class="my-2 text-center text-gray-500">

              </div>
              <div class="flex items-center text-green-500">
                <div class="mx-auto flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
                  <span>10.5%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex h-64 w-auto  items-center justify-center rounded-lg bg-app-color">
            <div class="flex flex-col space-x-2">
              <div class="text-center">
                <IconConfigProvider color="white" size="60">
                  <Icon class="mb-5 rounded-full  p-1 text-yellow-500">
                    <AddLocationOutlined/>
                  </Icon>
                </IconConfigProvider>
              </div>
              <div class="text-center text-sm md:text-xl font-bold text-white"> Where to buy secured product </div>
              <div class="my-2 text-center text-gray-500">

              </div>
              <div class="flex items-center text-green-500">
                <div class="mx-auto flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
                  <span>10.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </main>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { IosInformationCircleOutline, IosPaper, IosQrScanner } from "@vicons/ionicons4";
import { IconConfigProvider } from '@vicons/utils';
import { Icon } from "@vicons/utils";
import { AddLocationOutlined } from '@vicons/material'

export default defineComponent({
  name: 'DashboardComponent',
  components: {
    IconConfigProvider, Icon,
    IosQrScanner, IosInformationCircleOutline, IosPaper, AddLocationOutlined
  },
  setup() {
    const router = useRouter();

    const logout = () => {
      localStorage.removeItem('token');
      router.push('/login');
    };

    const scanProduct = () => {
      router.push('/user-read-qrcode')
    };
    const electronicProduct = () => {
      router.push('/electronic-product')

    }

    const fillForm = () => {
      window.open('https://signalement.social-sante.gouv.fr/', '_blank');
    }

    return { logout, scanProduct, fillForm, electronicProduct };
  },
});
</script>

<style scoped>
.dashboard-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}

.custom-btn {
  background: linear-gradient(180deg, #0c5087 0%, #289c43 100%);
}
</style>