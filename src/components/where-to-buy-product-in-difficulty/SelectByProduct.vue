<template>
    <div ref="container" class="py-4">
        <div class="max-w-5xl mx-auto mt-6 p-6">
            <div class="max-w-5xl mx-auto mt-6 p-6">
                <div class="grid md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 gap-4 grid-cols-1">
                    <n-space vertical>
                        <n-select placeholder="Select a file" v-model:value="selectedValue" :options="filteredOptions"
                            filterable @input="handleInputChange" />
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
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { getProductShort } from '@/service/productService';

let filteredOptions = ref<{ label: string; value: string; }[]>([]);
const selectedValue = ref<string | null>(null);
const container = ref<HTMLElement | null>(null);

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
            filteredOptions.value = response.product.map((item: any) => ({
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
    if (selectedValue.value) {
        window.open(selectedValue.value, '_blank');
    }
}

// Function to handle input changes dynamically
function handleInputChange(value: any) {
    console.log('Input value:', value.target.value);

    if (value) {
        fetchFilteredOptions(value);
    } else {
        filteredOptions.value = []; // Clear options if input is empty
    }
}

async function fetchFilteredOptions(searchTerm: string) {
    try {
        // Fetch options based on the search term
        const response = await getProductShort(searchTerm);
        if (response.success && response.product) {
            filteredOptions.value = response.product.map((item: any) => ({
                label: item.denomination_du_medicament,
                value: item.code_cis,
            }));
        } else {
            console.error('Error fetching filtered options:', response.message);
        }
    } catch (error) {
        console.error('An error occurred while fetching filtered options:', error);
    }
}

</script>

<style scoped>
/* Add any necessary custom styles here */
</style>