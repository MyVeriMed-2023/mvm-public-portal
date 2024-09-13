<template>
    <section class="container mx-auto px-4 py-16">
        <!-- Blog Details -->
        <div v-if="blog">
            <!-- Blog Title -->
            <h1 class="text-4xl font-bold mb-4">{{ blog.title }}</h1>

            <!-- Publish Date -->
            <time class="text-sm font-normal leading-none text-gray-400">{{ formatDate(blog.publish_date) }}</time>

            <!-- Description -->
            <p class="text-base font-normal text-gray-500 mt-4">{{ blog.description }}</p>

            <!-- Images Section -->
            <div class="mt-6">
                <h2 class="text-xl font-semibold mb-2">Related Images</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <img v-for="(img, index) in blog.image" :key="index" :src="img" alt="Blog Image" class="w-full h-auto object-cover rounded-lg shadow-md" />
                </div>
            </div>

            <!-- Links Section -->
            <div class="mt-6">
                <h2 class="text-xl font-semibold mb-2">Related Links:</h2>
                <ul class="list-disc pl-5">
                    <li v-for="(link, index) in blog.links" :key="index" class="text-blue-500 hover:underline">
                        <a :href="link" target="_blank" rel="noopener noreferrer">{{ link }}</a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Loading State -->
        <div v-else>
            <p>Loading...</p>
        </div>
    </section>
</template>

<script>
import { getBlogById } from '@/service/blogService'; // Adjust the import path as necessary

export default {
    name: 'BlogDetail',
    data() {
        return {
            blog: null, // Initialize with null
        };
    },
    async created() {
        const blogId = this.$route.params.id;
        await this.fetchBlogDetail(blogId);
    },
    methods: {
        async fetchBlogDetail(blogId) {
            const response = await getBlogById(blogId);
            if (response.success) {
                this.blog = response.blog;
            } else {
                console.error(response.message);
                // Handle error (e.g., show a notification or redirect to an error page)
            }
        },
        // Helper function to format the date
        formatDate(dateStr) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateStr).toLocaleDateString(undefined, options);
        },
    },
};
</script>
