<template>
    <div class="bg-gray-100">
        <div v-if="user" class="container mx-auto my-5 p-5">
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
                        <h1 class="text-gray-900 font-bold text-xl leading-8 my-1 text-center">{{ user.first_name }}</h1>
                        <h3 class="text-gray-600 font-lg text-semibold leading-6 text-center ">You are requesting from</h3>
                        <p class="text-sm text-gray-500 hover:text-gray-600 leading-6 text-center " v-if="location">{{location.city}}</p>

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
                <div class="w-full md:w-9/12 mx-2 h-64">
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
                    <!-- <button
                            class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                            Full Information</button> -->
                </div>
                <!-- End of about section -->

                <!-- Experience and education -->
                <!-- End of profile tab -->
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { AuthUserModel } from '@/model/user/AuthUserModel';
import { ref, onMounted } from 'vue';
import { getGeolocation, GeolocationData } from '@/shared/service/geolocationService';

export default {
    name: 'UserProfile',
    setup() {
        const store = useStore();
        const user = computed(() => store.getters.getUser as AuthUserModel);

        const location = ref<GeolocationData | null>(null);
        const loading = ref(true);
        const error = ref<string | null>(null);

        onMounted(async () => {
            try {
                location.value = await getGeolocation();
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
            error
        };
    }
};
</script>