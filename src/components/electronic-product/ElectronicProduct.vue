<template>

    <div class="py-4">
        <n-breadcrumb>
            <n-breadcrumb-item clickable="true" @click= "()=> router.push('/dashboard')"> Home</n-breadcrumb-item>
            <n-breadcrumb-item>
                Electronic product
            </n-breadcrumb-item>
        </n-breadcrumb>
        <div class="max-w-5xl mx-auto mt-6 p-2">

            <div class="flex grid grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4"
                id="widget">

                <div v-for="(i, index) in items" :key="index"
                    class="bg-white py-4 flex flex-col justify-center sm:py-12 cursor-pointer" @click="goTo('SMPC')">
                    <div class=" rounded-full flex bg-blue-50 border-2 border-green-900 flex-row" id="widget">
                        <div class="py-4 rounded-l-full pr-10 relative  bg-white w-auto">
                            <img :src="i.icon" class="w-8 border-green-200 relative left-5 inline-block mx-auto" />

                        </div>
                        <div class="flex flex-col ml-2 p-2">
                            <div class="flex items-center text-center">
                                <h4 class="text-md font-semibold">
                                    {{ i.title }}

                                </h4>

                            </div>
                            <p class="text-sm">
                                {{ i.subTitle }}
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

import { useRouter } from 'vue-router'
const router = useRouter()
const items = [
    {
        title: 'Summary Product characteristic',
        subTitle: 'summery of product charectors',
        path: 'SMPC',
        icon: 'https://cdn-icons-png.flaticon.com/512/10433/10433044.png'
    },
    {
        title: 'Labelling',
        subTitle: 'product Labelling information',
        path: 'LABEL',
        icon: 'https://cdn-icons-png.flaticon.com/512/10433/10433044.png'
    },
    {
        title: 'Patient leaflet',
        subTitle: 'Latest Patient leaflet',
        path: 'PL',
        icon: 'https://cdn-icons-png.flaticon.com/512/10433/10433044.png'
    }
]

function goTo(type) {
    router.push({ name: 'electronic-product-details', params: { type: type } })
}
</script>