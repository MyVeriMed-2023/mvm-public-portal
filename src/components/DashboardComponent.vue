<template>
  <div class="container mx-auto">
    <PageHeader subtitle="welcome to MVMED" />
    <!-- <div class="my-6">
      <Banner />

    </div> -->
    <main class="">


      <div class=" flex-col bg-gray-100 py-6 sm:py-12">
        <div class="flex grid grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4" id="widget">

          <div class="flex xs:h-32 h-30 md:h-64 w-auto  items-center justify-center rounded-lg bg-app-color cursor-pointer"  @click="scanProduct">
            <div class="flex flex-col space-x-2">
              <div class="text-center">
                <IconConfigProvider color="white" size="40">
                  <Icon class="mb-5 rounded-full  p-1 text-yellow-500">
                    <IosQrScanner />
                  </Icon>
                </IconConfigProvider>
              </div>
              <div class="text-center  text-sm md:text-sm font-bold text-white">Scan a product</div>
              <div class="my-2 text-center text-gray-500">

              </div>
              <!-- <div class="flex items-center text-green-500">
                <div class="mx-auto flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
                  <span>10.5%</span>
                </div>
              </div> -->
            </div>
          </div>



          <div class="flex xs:h-32 h-30 sm:h-64 w-auto  items-center justify-center rounded-lg bg-app-color cursor-pointer">
            <div class="flex flex-col space-x-2">
              <div class="text-center">
                <IconConfigProvider color="white" size="40">
                  <Icon class="mb-5 rounded-full  p-1 text-yellow-500">
                    <IosInformationCircleOutline />
                  </Icon>
                </IconConfigProvider>
              </div>
              <div class="text-center  text-sm md:text-sm font-bold text-white">Electronic product information</div>
              <div class="my-2 text-center text-gray-500">

              </div>
              <!-- <div class="flex items-center text-green-500">
                <div class="mx-auto flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
                  <span>10.5%</span>
                </div>
              </div> -->
            </div>
          </div>

          <div class="flex xs:h-32 h-30 sm:h-64 w-auto  items-center justify-center rounded-lg bg-app-color cursor-pointer">
            <div class="flex flex-col space-x-2">
              <div class="text-center">
                <IconConfigProvider color="white" size="40">
                  <Icon class="mb-5 rounded-full  p-1 text-yellow-500">
                    <IosPaper/>
                  </Icon>
                </IconConfigProvider>
              </div>
              <div class="text-center  text-sm md:text-sm font-bold text-white"> Report an event OR fill a form </div>
              <div class="my-2 text-center text-gray-500">

              </div>
            </div>
          </div>

          <div class="flex xs:h-32 h-30 sm:h-64 w-auto  items-center justify-center rounded-lg bg-app-color cursor-pointer">
            <div class="flex flex-col space-x-2">
              <div class="text-center">
                <IconConfigProvider color="white" size="40">
                  <Icon class="mb-5 rounded-full  p-1 text-yellow-500">
                    <AddLocationOutlined/>
                  </Icon>
                </IconConfigProvider>
              </div>
              <div class="text-center  text-sm md:text-sm font-bold text-white"> Where to get products in supply difficulty </div>
              <div class="my-2 text-center text-gray-500">

              </div>
            </div>
          </div>
          <div class="flex xs:h-32 h-30 sm:h-64 w-auto  items-center justify-center rounded-lg bg-app-color cursor-pointer">
            <div class="flex flex-col space-x-2">
              <div class="text-center">
                <IconConfigProvider color="white" size="40">
                  <Icon class="mb-5 rounded-full  p-1 text-yellow-500">
                    <AddLocationOutlined/>
                  </Icon>
                </IconConfigProvider>
              </div>
              <div class="text-center text-sm md:text-sm font-bold text-white"> Where to buy secured product </div>
              <div class="my-2 text-center text-gray-500">

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
import PageHeader from '@/shared/components/PageHeader.vue'
// import Banner from '@/shared/components/BannerComponent.vue'

export default defineComponent({
  name: 'DashboardComponent',
  components: {
    IconConfigProvider, Icon,
    IosQrScanner, IosInformationCircleOutline, IosPaper, AddLocationOutlined,
    PageHeader,
    // Banner
  },
  setup() {
    const router = useRouter();

    const logout = () => {
      localStorage.removeItem('token');
      router.push('/login');
    };

    const scanProduct = () => {
      router.push('/scanning')
    };
    const electronicProduct = () => {
      router.push('/electronic-product')

    }

    const fillForm = () => {
      window.open('https://signalement.social-sante.gouv.fr/', '_blank');
    }

    return { logout, scanProduct, fillForm, electronicProduct,PageHeader,
      // Banner
    };
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