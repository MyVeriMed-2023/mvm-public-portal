<template>
    <div>
      <!-- Header Component -->
      <HeaderComponent />

      <!-- Hero Section -->
      <HeroSection />

      <!-- Blog Updates Section -->
      <RouterView></RouterView>
      <!-- <BlogUpdates /> -->

      <!-- Footer Component -->
      <FooterComponent />
    </div>
  </template>

  <script>
  import HeaderComponent from '@/components/blogs/HeaderComponent.vue';
  import HeroSection from '@/components/blogs/HeroSection.vue';
  import FooterComponent from '@/components/blogs/FooterComponent.vue';

  export default {
    components: {
      HeaderComponent,
      HeroSection,
      FooterComponent
    }
  }
  </script>
