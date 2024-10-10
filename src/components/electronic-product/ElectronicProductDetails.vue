<template>
    <div ref="container" class="py-4">
        <n-breadcrumb>
            <n-breadcrumb-item @click= "()=> router.push('/dashboard')"> Home</n-breadcrumb-item>
            <n-breadcrumb-item @click= "()=> router.push('/electronic-product')">
                Electronic product
            </n-breadcrumb-item>
            <n-breadcrumb-item>
                Summary product
            </n-breadcrumb-item>
        </n-breadcrumb>

        <div class="max-w-5xl mx-auto mt-6">
            <div class="max-w-5xl mx-auto mt-6 p-6">
                <div class="grid md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 gap-4 grid-cols-1">
                    <n-space vertical>
                        <n-select placeholder="Select product" :value="selectedValue" :options="filteredOptions"
                            :on-search="searchHandle" filterable />
                    </n-space>

                    <n-button @click="openPdf" type="primary" :disabled="!selectedValue">
                        View
                    </n-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getProductShort } from '@/service/productService';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { AppConst } from '@/shared/AppConst'

const router = useRouter();
const fileType = router.currentRoute.value.params.type;
const selectedValue = ref('');
const container = ref(null);
let filteredOptions = ref<{ label: string; value: string; }[]>([]);

console.log(fileType);

onMounted(async () => {
    const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
            console.log('Element resized:', entry.contentRect);
            // Add any logic here that should be triggered on resize.
        }
    });

    if (container.value) {
        observer.observe(container.value);
    }


    try {
        // Fetch product data
        const response = await getProductShort('');
        if (response.success && response.product) {
            // Transform product data to match the select options structure
            filteredOptions.value = response.product.map((item) => ({
                label: item.denomination_du_medicament, // Product name
                value: item.code_cis, // Example of unique value
            }));

            // Filter options based on the desired type
            console.log('Filtered Options:', filteredOptions.value);
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

function openPdf() {

    if (fileType === 'SMPC') {

        window.open(`${AppConst.ansmproductUrl}affichageDoc.php?specid=${selectedValue.value}&typedoc=R`, '_blank')

    }

    if (fileType === 'PL') {

        window.open(`${AppConst.ansmproductUrl}affichageDoc.php?specid=${selectedValue.value}&typedoc=N`, '_blank')
    }

    else{
        window.open(`${AppConst.ansmproductUrl}extrait.php?specid=${selectedValue.value}`, '_blank')

    }


}

const searchHandle = async (value: string) => {
    console.log(value)

    try {
        // Fetch product data
        const response = await getProductShort(value);
        if (response.success && response.product) {
            // Transform product data to match the select options structure
            filteredOptions.value = response.product.map((item) => ({
                label: item.denomination_du_medicament, // Product name
                value: item.code_cis, // Example of unique value
            }));

            // Filter options based on the desired type
            console.log('Filtered Options:', filteredOptions.value);
        } else {
            console.error('Error fetching product:', response.message);
        }
    } catch (error) {
        console.error('An error occurred while fetching the product:', error);
    }
}
</script>

<style scoped>
/* Add any necessary custom styles here */
</style>