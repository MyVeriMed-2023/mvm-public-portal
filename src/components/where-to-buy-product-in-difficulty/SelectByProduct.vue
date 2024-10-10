<template>
    <div ref="container" class="py-4">

        <n-breadcrumb>
            <n-breadcrumb-item @click="() => router.push('/dashboard')"> Home</n-breadcrumb-item>
            <n-breadcrumb-item>
                Product
            </n-breadcrumb-item>

        </n-breadcrumb>

        <div class="max-w-5xl mx-auto mt-6">
            <div class="max-w-5xl mx-auto mt-6 p-6">
                <div class="grid md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 gap-4 grid-cols-1">
                    <n-space vertical>
                        <n-select placeholder="Select product" :value="selectedValue" :options="filteredOptions"
                            :on-search="searchHandle" filterable />
                    </n-space>

                    <n-button @click="openMap" type="primary" :disabled="!selectedValue">
                        View
                    </n-button>
                </div>
            </div>

            <!-- Google Map will be displayed here -->
            <div v-if="showMap" class="map-container mt-6">
                <iframe width="100%" height="100%" style="border:0" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade" :src="mapSrc"></iframe>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getProductShort } from '@/service/productService';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const selectedValue = ref(''); // Holds the selected product code
const container = ref(null);
let filteredOptions = ref<{ label: string; value: string; }[]>([]);
const showMap = ref(false);

const mapData = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.8638401728945!2d8.6636624!3d50.1075555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd095578f0beb5%3A0x2b5aff660258787f!2sPharmacy%20in%20the%20Central%20Station!5e0!3m2!1sen!2sfr!4v1725975807035!5m2!1sen!2sfr",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.9614793457836!2d8.5714157!3d50.049552899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0ac08a5872f3%3A0x375da203972dba48!2sMetropolitan%20Pharmacy!5e0!3m2!1sen!2sfr!4v1725978984552!5m2!1sen!2sfr"
]
// Dynamic map source URL
const mapSrc = ref('');

onMounted(async () => {
    const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
            console.log('Element resized:', entry.contentRect);
        }
    });

    if (container.value) {
        observer.observe(container.value);
    }

    try {
        const response = await getProductShort('');
        if (response.success && response.product) {
            filteredOptions.value = response.product.map((item: any) => ({
                label: item.denomination_du_medicament, // Product name
                value: item.code_cis, // Unique product code
            }));
        } else {
            console.error('Error fetching product:', response.message);
        }
    } catch (error) {
        console.error('An error occurred while fetching the product:', error);
    }

    onBeforeUnmount(() => {
        if (container.value) {
            observer.unobserve(container.value);
        }
    });
});


function getRandomMapUrl() {
    const randomIndex = Math.floor(Math.random() * mapData.length);
    return mapData[randomIndex];
}

// Function to update the map when "View" is clicked
function openMap() {
    // Example: Set dynamic address or coordinates based on the selected product
    const selectedProduct = filteredOptions.value.find((option) => option.value === selectedValue.value);

    if (selectedProduct) {
        // Here, we're simulating a Google Maps URL based on the product's code
        // You can adjust the address dynamically if you have actual addresses
        mapSrc.value = getRandomMapUrl();
    }

    // Display the map
    showMap.value = true;
}

// Search handler to filter options dynamically
const searchHandle = async (value: string) => {
    try {
        const response = await getProductShort(value);
        if (response.success && response.product) {
            filteredOptions.value = response.product.map((item: any) => ({
                label: item.denomination_du_medicament, // Product name
                value: item.code_cis, // Unique product code
            }));
        } else {
            console.error('Error fetching product:', response.message);
        }
    } catch (error) {
        console.error('An error occurred while fetching the product:', error);
    }
};
</script>

<style scoped>
.map-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    /* Aspect ratio for 16:9 */
    height: 0;
    overflow: hidden;
}

.map-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>