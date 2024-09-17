<template>
    <section class="container mx-auto px-4 py-16">
        <h2 class="text-3xl font-bold text-center mb-12">Latest Updates</h2>
        <p class="text-center mb-8 text-gray-600">All the latest MyVeriMed news, straight from the team.</p>

        <!-- Timeline Container -->
        <div class="relative border-l border-gray-200">
            <div v-for="(update, index) in updates" :key="index" class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-app-color rounded-full -left-1.5 border border-white"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400">{{ update.publish_date }}</time>
                <h3 class="text-lg font-semibold text-gray-900">{{ update.title }}</h3>
                <p class="text-base font-normal text-gray-500 mb-4">{{ update.description }}</p>
                <a :href="`/blog/${update.id}`" class="inline-flex items-center text-blue-600 hover:underline">Read more</a>
            </div>
        </div>
    </section>
</template>

<script>
import { getBlogUpdates } from '@/service/blogService';  // Adjust the import path as necessary

export default {
    name: 'BlogUpdates',
    data() {
        return {
            updates: [],  // Initialize with an empty array
        };
    },
    async created() {
        await this.fetchUpdates();
    },
    methods: {
        async fetchUpdates() {
            const response = await getBlogUpdates();
            if (response.success) {
                this.updates = response.updates;
            } else {
                console.error(response.message);
                // Handle error (e.g., show a notification or message)
            }
        },
    },
};
</script>
