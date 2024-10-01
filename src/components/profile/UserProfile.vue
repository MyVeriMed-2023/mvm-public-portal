<template>
    <div class="bg-gray-100">
        <div v-if="user" class="container mx-auto my-5">
            <div class="md:flex no-wrap md:-mx-2 ">
                <!-- Left Side -->
                <div class="w-full md:w-3/12 md:mx-2">
                    <!-- Profile Card -->
                    <div class="bg-white p-3 border-t-4 border-green-400">
                        <div class="image overflow-hidden">
                            <img class="h-auto w-full mx-auto"
                                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                alt="">
                        </div>
                        <h1 class="text-gray-900 font-bold text-xl leading-8 my-1 text-center">{{ user.first_name }}
                        </h1>
                        <h3 class="text-gray-600 font-lg text-semibold leading-6 text-center ">You are requesting from
                        </h3>
                        <p class="text-sm text-gray-500 hover:text-gray-600 leading-6 text-center " v-if="location">
                            {{ location.city }}</p>

                        <ul
                            class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                            <li class="flex items-center py-3">
                                <span>Status</span>
                                <span class="ml-auto"><span class="bg-app-color py-1 px-2 rounded text-white text-sm">{{
                                    user.account_status }}</span></span>
                            </li>
                            <li class="flex items-center py-3">
                                <span>Member since</span>
                                <span class="ml-auto"> {{ formatDate(user.created_date) }}</span>
                            </li>
                        </ul>
                    </div>
                    <!-- End of profile card -->
                    <div class="my-4"></div>
                    <!-- Friends card -->
                    <!-- End of friends card -->
                </div>
                <!-- Right Side -->
                <div class="w-full md:w-9/12  md:mx-2">
                    <!-- Profile tab -->
                    <!-- About Section -->
                    <div class="bg-white p-3 shadow-sm rounded-sm">
                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span clas="text-green-500">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <span class="tracking-wide">About</span>
                        </div>
                        <div class="text-gray-700">
                            <div class="grid md:grid-cols-2 text-sm">
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">First Name</div>
                                    <div class="px-4 py-2">{{ user.first_name }}</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Last Name</div>
                                    <div class="px-4 py-2">{{ user.last_name }}</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Email</div>
                                    <div class="px-4 py-2">{{ user.email }}</div>
                                </div>

                                <!-- <div>
                                    <p v-if="loading">Fetching location data...</p>
                                    <p v-if="error">{{ error }}</p>
                                    <div v-if="location && !loading">
                                        <p><strong>IP:</strong> {{ location.query }}</p>
                                        <p><strong>Country:</strong> {{ location.country }}</p>
                                        <p><strong>City:</strong> {{ location.city }}</p>
                                        <p><strong>Latitude:</strong> {{ location.lat }}</p>
                                        <p><strong>Longitude:</strong> {{ location.lon }}</p>
                                    </div>
                                </div> -->

                                <div class="grid grid-cols-2">
                                    <p v-if="loading">Fetching location data...</p>
                                    <p v-if="error">{{ error }}</p>
                                </div>

                                <div v-if="location && !loading">
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Your IP</div>
                                        <div class="px-4 py-2">{{ location.query }}</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Timezone</div>
                                        <div class="px-4 py-2">{{ location.timezone }}</div>
                                    </div>

                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Country</div>
                                        <div class="px-4 py-2">{{ location.country }}</div>
                                    </div>

                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Region</div>
                                        <div class="px-4 py-2">{{ location.regionName }}</div>
                                    </div>

                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">City</div>
                                        <div class="px-4 py-2">{{ location.city }}</div>
                                    </div>
                                </div>


                            </div>

                            <!-- <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Longitude</div>
                                    <div class="px-4 py-2">
                                        <a class="text-blue-800" href="mailto:jane@example.com">{{ position?.longitude
                                            }}</a>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Latitude</div>
                                    <div class="px-4 py-2"> {{ position?.latitude }} </div>
                                </div> -->
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <div class="mb-6">
            <h3 class="text-center text-white text-lg bg-app-color p-2">
                History of scan
            </h3>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white p-2 mb-24" style="height: 300px;">

            <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                <li class="pb-3 sm:pb-4" v-for="(item, index) in authUser?.scandata" :key="index">
                    <div class="flex items-center space-x-4 rtl:space-x-reverse">
                        <div class="flex-shrink-0">
                            <img class="w-6 h-6" src="@/assets/icons/flat-icons/recalled.png"
                                alt="Neil image">
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                               {{ item.locationInfo.regionName}} ({{ item.locationInfo.city}})
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                {{item.productInfo.libelle_de_la_presentation}}
                            </p>
                        </div>
                        <div class="inline-flex items-center text-sm text-gray-500 dark:text-white">
                            {{item.relativeTime}}
                        </div>
                    </div>
                </li>
            </ul>

        </div>

    </div>

</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { AuthUserModel } from '@/model/user/AuthUserModel';
import { ref, onMounted } from 'vue';
import { getGeolocation, GeolocationData } from '@/shared/service/geolocationService';
import { getAuthUser } from '@/service/authService';

export default {
    name: 'UserProfile',
    setup() {
        const store = useStore();
        const user = computed(() => store.getters.getUser as AuthUserModel);
        const authUser = ref<AuthUserModel>()

        const location = ref<GeolocationData | null>(null);
        const loading = ref(true);
        const error = ref<string | null>(null);

        onMounted(async () => {
            try {
                location.value = await getGeolocation();
                let response = await getAuthUser();

                if (response.success) {

                    authUser.value = response.user

                    console.log('auth user', response.user)

                }
            } catch (err) {
                error.value = 'Failed to fetch location data.';
            } finally {
                loading.value = false;
            }
        });

        const formatDate = (dateString: string) => {
            if (dateString) {
                const date = new Date(dateString);
                return date.toLocaleDateString(); // Format the date as "MM/DD/YYYY" or adjust as needed
            }
            return '';
        };

        return {
            user,
            formatDate,
            location,
            loading,
            error,
            authUser
        };
    }
};
</script>