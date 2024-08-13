<template>
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
                    <!-- Add other product details here -->
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
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProductByCode13 } from '@/service/productService'
import { AppConst } from '@/shared/AppConst'

const route = useRoute()
const router = useRouter()
const productDetails = ref(null)
const code13 = route.query.code13
const expDate = route.query.exp_date
const lotNo = route.query.lot_no

onMounted(async () => {
    try {
        const response = await getProductByCode13(code13)
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

            console.log(productDetails.value);
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
    let status = AppConst.status.valid.value
    let color = AppConst.status.valid.color
    let desc = AppConst.status.valid.desc

    // expired
    if (expireDateF < currentDate) {
        status = AppConst.status.danger.value
        color = AppConst.status.danger.color
        desc = AppConst.status.danger.desc
    }
    // info
    else if (item.product_info.length > 0) {
        status = AppConst.status.info.value
        color = AppConst.status.info.color
        desc = AppConst.status.info.desc
    }

    return {
        status,
        color,
        desc
    }
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