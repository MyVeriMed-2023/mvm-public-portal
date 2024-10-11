<template>
  <div>
    <div v-if="loading" class="page-loader bg-app-color">
      <div class="__inner">
        <img class="w-24 h-24" src="@/assets/loading/ambulance-bg.gif" alt="Loading" />
        <span>Loading! Please Wait...</span>
      </div>
    </div>

    <div v-if="!loading && productDetails" class="w-full h-screen"
      :style="{ backgroundColor: productDetails.status.color }">
      <div class="relative mb-32" :style="{ backgroundColor: productDetails.status.color }">
        <div class="rounded overflow-hidden">
          <div class="flex justify-end">
            <button @click="goBack" class="top-4 p-4 right-4 text-gray-600 hover:text-gray-800">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div class="absolute w-full flex justify-center">
            <div class="h-16 w-16">
              <img :src="getStatusImage(productDetails.status.value)"
                class="rounded-full object-cover h-full w-full shadow-md" />
            </div>
          </div>
          <ul class="overflow-hidden sm:rounded-md sm:max-w-2xl mx-auto mt-20 px-4">
            <li v-for="(field, index) in productFields" :key="index" class="border-t border-gray-200">
              <div class="py-3 sm:px-6">
                <div :class="`grid grid-cols-2 gap-2 ${productDetails.status.textClass}`">
                  <h3 class="text-md leading-6 font-medium text-start">{{ field.label }}</h3>
                  <p class="text-sm text-start">{{ productDetails[field.key] }}</p>
                </div>
              </div>
            </li>
          </ul>

          <div class="w-full flex justify-center pt-5 pb-5">
            <div class="flex flex-wrap gap-4 px-6 justify-center text-lg font-serif min-w-full">
              <n-collapse style="background-color: #ffffff96; color: white"
                class="shadow-2xl bg-gray-100 flex-grow text-black border-l-8 border-red-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
                <n-collapse-item title="Electronic product information" name="1">
                  <div class="columns-3">
                    <div v-for="type in ['SMPC', 'LABEL', 'PL']" :key="type" class="font-thin text-sm pt-1 text-center">
                      <a @click="openDocument(type, productDetails.code_cis)" class="text-blue-500">{{ type }}</a>
                    </div>
                  </div>
                </n-collapse-item>
              </n-collapse>
            </div>
          </div>

          <div class="w-full flex justify-center pt-5 pb-5">
            <div v-if="productDetails.status === AppConst.status.info.value"
              class="min-w-full flex flex-wrap gap-4 px-6 justify-center text-lg font-serif">
              <a v-for="(item, index) in productDetails.product_info" :key="index" :href="item.link" target="_blank"
                class="min-w-full shadow-2xl bg-gray-100 flex-grow text-black border-l-8 border-red-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
                {{ item.description }}

                <div class="font-thin text-sm pt-1">
                  <span>{{ formattedCreatedDate(item.created_date) }}</span>
                </div>
              </a>
            </div>

            <div v-if="productDetails.is_recalled"
              class="flex flex-wrap gap-4 px-6 justify-center text-lg font-serif min-w-full">
              <a style="background-color: #e5cf07bf" class="min-w-full text-center shadow-2xl bg-gray-100 flex-grow text-black border-l-8 border-red-500
                rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
                Alert
                <div class="font-thin text-sm pt-1">{{ getContent(productDetails) }}</div>
                <div class="font-thin text-sm pt-1">
                  <a @click="report" href="" class="text-blue-500">report</a>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getProductByCode13 } from "@/service/productService";
import { AppConst } from "@/shared/AppConst";
import { formatDate } from "@/shared/utils/dateFormatter";
import { getGeolocation } from "@/shared/service/geolocationService";

const route = useRoute();
const router = useRouter();
const productDetails = ref(null);
const code13 = route.query.code13;
const lotNo = route.query.lot_no;
const dataMatrix = route.query.data_matrix;

const error = ref(null);
const loading = ref(true);
const location = ref(null);

const productFields = [
  { label: 'Brand', key: 'brand' },
  { label: 'Holder', key: 'holder' },
  { label: 'Chemical', key: 'chemical' },
  { label: 'CIP', key: 'cip' },
  { label: 'Serial No (SN)', key: 'serial_number' },
  { label: 'Form', key: 'form' },
  { label: 'Dosage', key: 'dosage' },
  { label: 'Batch no', key: 'batch_number' },
  { label: 'Expiry', key: 'expirey' },
  { label: 'Description', key: 'status.desc' }
];

onMounted(async () => {
  try {
    location.value = await getGeolocation();
  } catch (err) {
    error.value = "Failed to fetch location data.";
  } finally {
    setTimeout(() => {
      loading.value = false;
    }, 2000);
  }

  try {
    const response = await getProductByCode13(code13, lotNo, location.value, dataMatrix);
    if (response.success) {
      productDetails.value = response.product;
    } else {
      console.error("Error fetching product:", response.message);
    }
  } catch (error) {
    console.error("An error occurred while fetching the product:", error);
  }
});

function goBack() {
  router.back();
}

function report() {
  router.push("/report");
}

function getStatusImage(statusValue) {
  if (statusValue === AppConst.status.valid.value) return require("@/assets/images/success.png");
  if (statusValue === AppConst.status.danger.value) return require("@/assets/images/danger.png");
  if (statusValue === AppConst.status.warning.value) return require("@/assets/images/warning.png");
  return require("@/assets/images/info.png");
}


function getContent(product) {
  return product.is_batch_recalled
    ? `This Batch (${product.lotNo}) has been recalled from ${formatDate(product.recalled.publish_date)}`
    : `This Product has been recalled from ${formatDate(product.recalled.publish_date)}`;
}

function openDocument(fileType, code_cis) {
  const urlMap = {
    SMPC: `${AppConst.ansmproductUrl}affichageDoc.php?specid=${code_cis}&typedoc=R`,
    PL: `${AppConst.ansmproductUrl}affichageDoc.php?specid=${code_cis}&typedoc=N`,
    LABEL: `${AppConst.ansmproductUrl}extrait.php?specid=${code_cis}`
  };
  window.open(urlMap[fileType], "_blank");
}
</script>

<style scoped>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.page-loader .__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.n-collapse .n-collapse-item:not(.n-collapse-item--disabled) .n-collapse-item__header-main {
  color: white !important;
}
</style>