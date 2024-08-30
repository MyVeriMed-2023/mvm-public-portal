<template>
    <div>
      <!-- Header Component -->
      <HeaderComponent />

      <!-- Hero Section -->
      <HeroSection />

      <!-- Blog Updates Section -->
      <BlogUpdates />

      <!-- Footer Component -->
      <FooterComponent />
    </div>
  </template>

  <script>
  import HeaderComponent from '@/components/blogs/HeaderComponent.vue';
  import HeroSection from '@/components/blogs/HeroSection.vue';
  import BlogUpdates from '@/components/blogs/BlogUpdates.vue';
  import FooterComponent from '@/components/blogs/FooterComponent.vue';

  export default {
    components: {
      HeaderComponent,
      HeroSection,
      BlogUpdates,
      FooterComponent
    }
  }
  </script>
