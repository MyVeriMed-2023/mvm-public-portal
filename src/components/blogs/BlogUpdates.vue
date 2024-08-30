<template>
    <section class="container mx-auto px-4 py-16">
        <h2 class="text-3xl font-bold text-center mb-12">Latest Updates</h2>
        <p class="text-center mb-8 text-gray-600">All the latest MyVeriMed  news, straight from the team.</p>

        <!-- Timeline Container -->
        <div class="relative border-l border-gray-200">
            <div v-for="(update, index) in updates" :key="index" class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-app-color rounded-full -left-1.5 border border-white"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400">{{ update.date }}</time>
                <h3 class="text-lg font-semibold text-gray-900">{{ update.title }}</h3>
                <p class="text-base font-normal text-gray-500 mb-4">{{ update.description }}</p>
                <a href="#" class="inline-flex items-center text-blue-600 hover:underline">Read more</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BlogUpdates',
    data() {
        return {
            updates: [
                {
                    date: 'June 21, 2024',
                    title: 'Headless UI v2.1: Simplified transition API and improved multi-dialog support',
                    description: 'We just released Headless UI v2.1 for React, which dramatically simplifies our transition APIs and adds support for rendering multiple dialogs as siblings.'
                },
                {
                    date: 'May 31, 2024',
                    title: 'Automatically clean up whitespace and duplicate class names',
                    description: 'We just released a new version of prettier-plugin-MyVeriMed which adds support for removing unnecessary whitespace and duplicate classes when sorting.'
                },
                {
                    date: 'May 24, 2024',
                    title: 'Catalyst: Application layouts, navigation menus, description lists, and more',
                    description: 'We just published the first major update to Catalyst since releasing the development preview, with two new application layouts, navbar and sidebar components, description lists, and more.'
                },
                {
                    date: 'May 7, 2024',
                    title: 'Headless UI v2.0 for React',
                    description: 'Nothing beats actually building something real with your own tools when it comes to finding ways to make things better. As we’ve been working on Catalyst these last several months, we’ve been making dozens of improvements to Headless UI that let you write even less code, and make the developer experience even better.'
                },
                {
                    date: 'June 21, 2024',
                    title: 'Headless UI v2.1: Simplified transition API and improved multi-dialog support',
                    description: 'We just released Headless UI v2.1 for React, which dramatically simplifies our transition APIs and adds support for rendering multiple dialogs as siblings.'
                },
                {
                    date: 'May 31, 2024',
                    title: 'Automatically clean up whitespace and duplicate class names',
                    description: 'We just released a new version of prettier-plugin-MyVeriMed which adds support for removing unnecessary whitespace and duplicate classes when sorting.'
                },
                {
                    date: 'May 24, 2024',
                    title: 'Catalyst: Application layouts, navigation menus, description lists, and more',
                    description: 'We just published the first major update to Catalyst since releasing the development preview, with two new application layouts, navbar and sidebar components, description lists, and more.'
                },
                {
                    date: 'May 7, 2024',
                    title: 'Headless UI v2.0 for React',
                    description: 'Nothing beats actually building something real with your own tools when it comes to finding ways to make things better. As we’ve been working on Catalyst these last several months, we’ve been making dozens of improvements to Headless UI that let you write even less code, and make the developer experience even better.'
                }
            ]
        }
    }
}
</script>