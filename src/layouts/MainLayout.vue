<script setup lang="ts">
import FooterComponent from '@/components/layouts/FooterComponent.vue';
import HeaderComponent from '@/components/layouts/header/HeaderComponent.vue';
</script>

<template>
  <div class="layout-container">
    <!-- Header -->
    <HeaderComponent class="header" />

    <!-- Main Content -->
    <main class="main-content">
      <div class="content-container">
        <RouterView></RouterView>
      </div>
    </main>

    <!-- Footer -->
    <FooterComponent class="footer" />
  </div>
</template>

<style scoped>
/* Ensure the layout takes up the full height of the viewport */
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full viewport height */
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensure it stays above other content */
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensure it stays above other content */
}

.main-content {
  flex: 1;
  margin-top: 4rem; /* Adjust based on header height */
  margin-bottom: 4rem; /* Adjust based on footer height */
  overflow-y: auto; /* Enable vertical scrolling */
}

.content-container {
  max-width: screen-2xl;
  padding: 1rem;
}
</style>
