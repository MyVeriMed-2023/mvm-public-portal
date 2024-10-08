<template>
  <div class="container mx-auto bg-white">
    <!-- <PageHeader subtitle="welcome to MVMED" /> -->
    <div class="my-6">
      <Banner />

    </div>
    <main class="">


      <div class=" flex-col bg-white py-6 sm:py-12">
        <div
          class="flex justify-center items-center grid grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 text-center"
          id="widget">

          <div class="bg-white py-4 flex flex-col justify-center sm:py-12 cursor-pointer" @click="scanProduct">
            <div class=" rounded-full flex bg-blue-50 border-2 border-green-900 flex-row"
              id="widget">
              <div class="py-4 rounded-l-full pr-10 relative  bg-white w-auto">
                <img src="https://cdn-icons-png.flaticon.com/512/3126/3126504.png"
                  class="w-8 border-green-200 relative left-5 inline-block mx-auto" />

              </div>
              <div class="flex flex-col ml-2 p-2">
                <div class="flex items-center text-center">
                  <h4 class="text-md font-semibold">
                    {{$t('dashboard.scanAProduct')}}

                  </h4>

                </div>
                <p class="text-sm">
                  use datamatrix on the medicine box
                </p>
              </div>
            </div>

          </div>

          <div class="bg-white py-4 flex flex-col justify-center sm:py-12 cursor-pointer" @click="electronicProduct">
            <div class="sm:max-w-xl sm:mx-auto rounded-full flex bg-blue-50 border-2 border-green-900 flex-row"
              id="widget">
              <div class="py-4 rounded-l-full pr-10 relative  bg-white w-auto">
                <img src="	https://cdn-icons-png.flaticon.com/512/9132/9132480.png"
                  class="w-8 border-green-200 relative left-5 inline-block mx-auto" />

              </div>
              <div class="flex flex-col ml-2 p-2">
                <div class="flex  items-center">
                  <h4 class="text-md font-semibold">
                    {{ $t('dashboard.electronicProductInfo')
                }}

                  </h4>

                </div>
                <p class="text-sm">
                  use datamatrix on the medicine box
                </p>
              </div>
            </div>

          </div>

          <div class="bg-white py-4 flex flex-col justify-center sm:py-12 cursor-pointer" @click="report">
            <div class="sm:max-w-xl sm:mx-auto rounded-full flex bg-blue-50 border-2 border-green-900 flex-row"
              id="widget">
              <div class="py-4 rounded-l-full pr-10 relative  bg-white w-auto">
                <img src="https://cdn-icons-png.flaticon.com/512/2355/2355692.png"
                  class="w-8 border-green-200 relative left-5 inline-block mx-auto" />

              </div>
              <div class="flex flex-col ml-2 p-2">
                <div class="flex  items-center">
                  <h4 class="text-md font-semibold">
                    {{ $t('dashboard.reportOrFillForm') }}

                  </h4>

                </div>
                <p class="text-sm">
                  use datamatrix on the medicine box
                </p>
              </div>
            </div>

          </div>

          <div class="bg-white py-4 flex flex-col justify-center sm:py-12 cursor-pointer" @click="whereGetinDifficulty">
            <div class="sm:max-w-xl sm:mx-auto rounded-full flex bg-blue-50 border-2 border-green-900 flex-row"
              id="widget">
              <div class="py-4 rounded-l-full pr-10 relative  bg-white w-auto">
                <img src="https://cdn-icons-png.flaticon.com/512/14230/14230627.png"
                  class="w-8 border-green-200 relative left-5 inline-block mx-auto" />

              </div>
              <div class="flex flex-col ml-2 p-2">
                <div class="flex items-center">
                  <h4 class="text-md font-semibold">
                    {{ $t('dashboard.whereToGetSupplyDiff')
                }}

                  </h4>

                </div>
                <p class="text-sm">
                  use datamatrix on the medicine box
                </p>
              </div>
            </div>

          </div>

          <div class="bg-white py-4 flex flex-col justify-center sm:py-12 cursor-pointer" @click="whereToBuy">
            <div class="sm:max-w-xl sm:mx-auto rounded-full flex bg-blue-50 border-2 border-green-900 flex-row"
              id="widget">
              <div class="py-4 rounded-l-full pr-10 relative  bg-white w-auto">
                <img src="https://cdn-icons-png.flaticon.com/512/14230/14230627.png"
                  class="w-8 border-green-200 relative left-5 inline-block mx-auto" />

              </div>
              <div class="flex flex-col ml-2 p-2">
                <div class="flex items-center">
                  <h4 class="text-md font-semibold">
                    {{ $t('dashboard.whereToGetSecureProd')
                }}
                  </h4>

                </div>
                <p class="text-sm">
                  use datamatrix on the medicine box
                </p>
              </div>
            </div>

          </div>




          <!-- <div class="flex xs:h-32 h-30 md:h-64 w-48 items-center justify-center bg-app-color cursor-pointer"
            @click="scanProduct">
            <div class="flex flex-col space-x-2">

              <div class="text-center">
                <IconConfigProvider color="white" size="40">
                  <Icon class="mb-5 rounded-full p-1 text-yellow-500">
                    <IosQrScanner />
                  </Icon>
                </IconConfigProvider>
              </div>
              <div class="text-center text-sm md:text-sm font-bold text-white">
                {{ $t('dashboard.scanAProduct') }}
              </div>
              <div class="my-2 text-center text-gray-500">
              </div>
            </div>
          </div> -->



          <!-- <div
            class="flex xs:h-32 h-30 md:h-64 w-auto  items-center justify-center rounded-lg bg-app-color cursor-pointer"
            @click="electronicProduct">
            <div class="flex flex-col space-x-2">
              <div class="text-center">
                <IconConfigProvider color="white" size="40">
                  <Icon class="mb-5 rounded-full  p-1 text-yellow-500">
                    <IosInformationCircleOutline />
                  </Icon>
                </IconConfigProvider>
              </div>
              <div class="text-center  text-sm md:text-sm font-bold text-white">{{ $t('dashboard.electronicProductInfo')
                }}</div>
              <div class="my-2 text-center text-gray-500">

              </div>

            </div>
          </div>

          <div
            class="flex xs:h-32 h-30 md:h-64 w-auto  items-center justify-center rounded-lg bg-app-color cursor-pointer"
            @click="report">
            <div class="flex flex-col space-x-2">
              <div class="text-center">
                <IconConfigProvider color="white" size="40">
                  <Icon class="mb-5 rounded-full  p-1 text-yellow-500">
                    <IosPaper />
                  </Icon>
                </IconConfigProvider>
              </div>
              <div class="text-center  text-sm md:text-sm font-bold text-white">{{ $t('dashboard.reportOrFillForm') }}
              </div>
              <div class="my-2 text-center text-gray-500">

              </div>
            </div>
          </div>

          <div
            class="flex xs:h-32 h-30 md:h-64 w-auto  items-center justify-center rounded-lg bg-app-color cursor-pointer"
            @click="whereGetinDifficulty">
            <div class="flex flex-col space-x-2">
              <div class="text-center">
                <IconConfigProvider color="white" size="40">
                  <Icon class="mb-5 rounded-full  p-1 text-yellow-500">
                    <AddLocationOutlined />
                  </Icon>
                </IconConfigProvider>
              </div>
              <div class="text-center  text-sm md:text-sm font-bold text-white">{{ $t('dashboard.whereToGetSupplyDiff')
                }}</div>
              <div class="my-2 text-center text-gray-500">

              </div>
            </div>
          </div>
          <div
            class="flex xs:h-32 h-30 md:h-64 w-auto  items-center justify-center rounded-lg bg-app-color cursor-pointer"
            @click="whereToBuy">
            <div class="flex flex-col space-x-2">
              <div class="text-center">
                <IconConfigProvider color="white" size="40">
                  <Icon class="mb-5 rounded-full  p-1 text-yellow-500">
                    <AddLocationOutlined />
                  </Icon>
                </IconConfigProvider>
              </div>
              <div class="text-center text-sm md:text-sm font-bold text-white">{{ $t('dashboard.whereToGetSecureProd')
                }} </div>
              <div class="my-2 text-center text-gray-500">

              </div>
            </div>
          </div> -->
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
// import { IosInformationCircleOutline, IosPaper } from "@vicons/ionicons4";
// import { IconConfigProvider } from '@vicons/utils';
// import { Icon } from "@vicons/utils";
// import { AddLocationOutlined } from '@vicons/material'
// import PageHeader from '@/shared/components/PageHeader.vue'
import Banner from '@/shared/components/BannerComponent.vue'
// import { CashOutline as CashIcon } from '@vicons/ionicons5'


export default defineComponent({
  name: 'DashboardComponent',
  components: {
    // IconConfigProvider, Icon,
    // CashIcon,
    // IosQrScanner,
    // IosInformationCircleOutline, IosPaper, AddLocationOutlined,
    // PageHeader,
    Banner
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

    const report = () => {
      router.push('/report')
    }

    const whereGetinDifficulty = () => {
      router.push('/getProduct')
    }

    const whereToBuy = () => {
      router.push('/select-product-to-buy')
    }

    const fillForm = () => {
      window.open('https://signalement.social-sante.gouv.fr/', '_blank');
    }

    return {
      logout, scanProduct, fillForm, electronicProduct, report, whereGetinDifficulty, whereToBuy
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