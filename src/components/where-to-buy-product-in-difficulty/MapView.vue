<!-- src/App.vue -->
<template>
    <div id="app">
      <EmbeddedMap address="1600 Amphitheatre Parkway, Mountain View, CA" />
    </div>
  </template>

  <script setup>
  import EmbeddedMap from '@/components/googleMap/googleMap.vue';
  </script>
