<!-- <template>
    <div class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div v-if="productDetails" class="bg-white shadow-lg p-6 max-w-3xl w-full h-full"
            :style="{ backgroundColor: productDetails.color }">
            <button @click="goBack" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
            </button>
            <h1 class="text-2xl font-bold mb-4">Product Details</h1>
            <div>
                <div class="mb-4">
                    <p><strong>Code 13:</strong> {{ productDetails.code13 || 'N/A' }}</p>
                    <p><strong>Expiry Date:</strong> {{ productDetails.expiryDate || 'N/A' }}</p>
                    <p><strong>Lot Number:</strong> {{ productDetails.lotNo || 'N/A' }}</p>
                </div>
            </div>
            <button @click="goBack" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Close
            </button>
        </div>
        <div v-else class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <p class="text-white">Loading product details...</p>
        </div>
    </div>
</template> -->
<template>
  <div v-if="productDetails" class="flex flex-col justify-between items-center p-6"
    :style="{ backgroundColor: productDetails.color }" style="height: 100vh; overflow: hidden;">
    <div class="w-full relative flex-1 flex flex-col items-center text-center">
      <button @click="goBack" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <div v-if="!showBarCode" class="text-xl mt-6">
        {{ productDetails.status }}
      </div>
      <div v-if="!showBarCode" class="flex justify-center mt-2">
        <img v-if="productDetails.status === AppConst.status.valid.value" class="w-16" src="@/assets/images/success.png"
          alt="Success" />
        <img v-if="productDetails.status === AppConst.status.danger.value" class="w-16" src="@/assets/images/danger.png"
          alt="Danger" />
        <img v-if="productDetails.status === AppConst.status.warning.value" class="w-16"
          src="@/assets/images/warning.png" alt="Warning" />
        <img v-if="productDetails.status === AppConst.status.info.value" class="w-16" src="@/assets/images/info.png"
          alt="Info" />
      </div>

      <div class="grid grid-cols-2 gap-y-4 text-lg mt-8 w-full">
        <span class="font-medium text-left">Brand</span>
        <span class="text-primary-primaryblueET text-left font-semibold">
          {{ productDetails.product_cis.denomination_du_medicament }}
        </span>

        <span class="font-medium text-left">Holder</span>
        <span class="text-primary-primaryblueET text-left font-semibold">
          {{ productDetails.product_cis.titulaire }}
        </span>

        <span class="font-medium text-left">Chemical</span>
        <span class="text-primary-primaryblueET text-left font-semibold">
          {{ productDetails.product_bdpm.denomination_substance }}
        </span>

        <span class="font-medium text-left">CIP</span>
        <span class="text-primary-primaryblueET text-left font-semibold">
          {{ productDetails.code_cip13 }}
        </span>

        <span class="font-medium text-left">Form</span>
        <span class="text-primary-primaryblueET text-left font-semibold">
          {{ productDetails.product_cis.forme_pharmaceutique }}
        </span>

        <span class="font-medium text-left">Dosage</span>
        <span class="text-primary-primaryblueET text-left font-semibold">
          {{ productDetails.product_bdpm.dosage_substance }}
        </span>

        <span class="font-medium text-left">Batch no</span>
        <span class="text-primary-primaryblueET text-left font-semibold">
          {{ productDetails.lotNo }}
        </span>

        <span class="font-medium text-left">Expiry</span>
        <span class="text-primary-primaryblueET text-left font-semibold">
          {{ productDetails.expiryDate }}
        </span>

        <span class="font-medium text-left">Description</span>
        <span class="text-primary-primaryblueET text-sm text-left font-semibold">
          {{ productDetails.desc }}
        </span>
      </div>

      <!-- <span class="text-center mt-24" v-for="(item, index) in productDetails.product_info " :key="index">
            <a :href=item.link target='_blank'> click me</a>
          </span> -->
    </div>

    <!-- <button
        @click="goBack"
        class="mt-8 bg-blue-500 text-white px-6 py-2 rounded w-full"
      >
        Close
      </button> -->

    <div v-if="productDetails.status === AppConst.status.info.value"
      class="flex flex-wrap gap-4 p-6 justify-center text-lg font-serif">
      <a v-for="(item, index) in productDetails.product_info " :key="index" :href=item.link target="_blank"
        class="shadow-2xl bg-gray-100 flex-grow text-black border-l-8 border-red-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
        {{ item.description }}

        <div class="text-gray-500 font-thin text-sm pt-1">
          <span>{{ formattedCreatedDate(item.created_date) }}</span>
        </div>
      </a>
    </div>

    <div v-if="productDetails.is_recalled"
      class="flex flex-wrap gap-4 p-6 justify-center text-lg font-serif">
      <a
        class=" text-center shadow-2xl bg-gray-100 flex-grow text-black border-l-8 border-red-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
        Alert

        <div class="text-gray-500 font-thin text-sm pt-1">
          <span>this product has been recalled from {{ formattedCreatedDate(productDetails.recalled.publish_date) }} </span>
        </div>
      </a>
    </div>





  </div>
</template>




<script setup>
import { ref, onMounted} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProductByCode13 } from '@/service/productService'
import { AppConst } from '@/shared/AppConst'
import { formatDate } from '@/shared/utils/dateFormatter'
import { getGeolocation } from '@/shared/service/geolocationService';

const route = useRoute()
const router = useRouter()
const productDetails = ref(null)
const code13 = route.query.code13
const expDate = route.query.exp_date
const lotNo = route.query.lot_no
const error = ref(null);
const loading = ref(true);
const location = ref(null);

onMounted(async () => {

  try {
    location.value = await getGeolocation();
  } catch (err) {
    error.value = 'Failed to fetch location data.';
  } finally {
    loading.value = false;
  }

  try {

    const response = await getProductByCode13(code13, lotNo, location.value)
    if (response.success) {
      // Get product status and additional details
      const statusDetails = getStatus(response.product, expDate)

      // Update productDetails
      productDetails.value = {
        code13: code13,
        expiryDate: expDate,
        lotNo: lotNo,
        status: statusDetails.status,
        color: statusDetails.color,
        desc: statusDetails.desc,
        ...response.product
      }

      console.log('product details', productDetails.value);
    } else {
      console.error('Error fetching product:', response.message)
    }
  } catch (error) {
    console.error('An error occurred while fetching the product:', error)
  }
})

function goBack() {
  router.back()
}

function getStatus(item, expDate) {
  console.log('item in status', item)
  const currentDate = new Date()
  const expireDateF = new Date(expDate)

  let status = AppConst.status.warning.value
  let color = AppConst.status.warning.color
  let desc = AppConst.status.warning.desc

  // expired
  if (expireDateF < currentDate || item.is_recalled) {
    status = AppConst.status.danger.value
    color = AppConst.status.danger.color
    desc = AppConst.status.danger.desc

    return {
      status,
      color,
      desc
    }
  }
  // info
  else if (item.product_info.length > 0) {
    status = AppConst.status.info.value
    color = AppConst.status.info.color
    desc = AppConst.status.info.desc

    return {
      status,
      color,
      desc
    }
  }

  else if (item.is_verified) {
    status = AppConst.status.valid.value
    color = AppConst.status.valid.color
    desc = AppConst.status.valid.desc

    return {
      status,
      color,
      desc
    }

  }

  return {
    status,
    color,
    desc
  }


}

function formattedCreatedDate(date) {
  return formatDate(date)
}
</script>


<style scoped>
/* Ensure the modal takes the full page */
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>