<template>

    <div class="py-4">
        <div class="max-w-5xl mx-auto mt-6 p-6">

            <div class="flex grid grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4"
                id="widget">

                <div class="flex xs:h-32 h-30 md:h-64 w-auto  items-center justify-center rounded-lg bg-app-color cursor-pointer"
                    @click="goTo('/comingsoon')">
                    <div class="flex flex-col space-x-2">
                        <div class="text-center">
                            <IconConfigProvider color="white" size="40">
                                <Icon class="mb-5 rounded-full  p-1 text-yellow-500">
                                    <PencilAlt />
                                </Icon>
                            </IconConfigProvider>
                        </div>
                        <div class="text-center  text-sm md:text-sm font-bold text-white">
                            Basic Form
                        </div>
                        <div class="my-2 text-center text-gray-500">

                        </div>

                    </div>
                </div>

                <div class="flex xs:h-32 h-30 md:h-64 w-auto  items-center justify-center rounded-lg bg-app-color cursor-pointer"
                    @click="OpenUrl">
                    <div class="flex flex-col space-x-2">
                        <div class="text-center">
                            <IconConfigProvider color="white" size="40">
                                <Icon class="mb-5 rounded-full  p-1 text-yellow-500">
                                    <PencilAlt />
                                </Icon>
                            </IconConfigProvider>
                        </div>
                        <div class="text-center  text-sm md:text-sm font-bold text-white">Link to Health Authority Reporting Platform
                        </div>
                        <div class="my-2 text-center text-gray-500">

                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

import { useRouter } from 'vue-router'
import { IconConfigProvider } from '@vicons/utils';
import { Icon } from "@vicons/utils";
import { PencilAlt } from "@vicons/fa";
const router = useRouter()


function goTo(url) {
    router.push(url)
}

function OpenUrl(){
    window.open('https://signalement.social-sante.gouv.fr/espace-declaration/profil')
}
</script>