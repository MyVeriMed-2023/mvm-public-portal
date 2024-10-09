<template>

    <div class="py-4">

        <n-breadcrumb>
            <n-breadcrumb-item @click= "()=> router.push('/dashboard')"> Home</n-breadcrumb-item>
            <n-breadcrumb-item @click= "()=> router.push('/report')">
                Report
            </n-breadcrumb-item>
            <n-breadcrumb-item >
                Form
            </n-breadcrumb-item>
        </n-breadcrumb>

        <div class="max-w-5xl mx-auto mt-6 p-6">

            <div class="flex grid grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4"
                id="widget">

                <div v-for = "(i, index) in items" :key = "index" class="bg-white py-4 flex flex-col justify-center sm:py-12 cursor-pointer" @click="goTo(i.path, i.isExternal)">
                    <div class=" rounded-full flex bg-blue-50 border-2 border-green-900 flex-row" id="widget">
                        <div class="py-4 rounded-l-full pr-10 relative  bg-white w-auto">
                            <img :src="i.icon"
                                class="w-8 border-green-200 relative left-5 inline-block mx-auto" />

                        </div>
                        <div class="flex flex-col ml-2 p-2">
                            <div class="flex items-center text-center">
                                <h4 class="text-md font-semibold">
                                    {{i.title}}

                                </h4>

                            </div>
                            <p class="text-xs">
                                {{i.subTitle}}
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
        title:'Basic Form',
        subTitle:'',
        path:'/comingsoon',
        isExternal:false,
        icon: 'https://cdn-icons-png.flaticon.com/512/17295/17295839.png'
    },
    {
        title:'HA Reporting Platform',
        subTitle:'Link to Health Authority Reporting Platform',
        path:'https://signalement.social-sante.gouv.fr/espace-declaration/profil',
        isExternal:true,
        icon: 'https://cdn-icons-png.flaticon.com/512/17295/17295839.png'
    },


]

function goTo(url, isExternal) {

        isExternal? window.open(url) :  router.push(url)
}

</script>