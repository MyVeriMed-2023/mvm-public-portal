<template>
  <div>
    <h3 class="text-red-500 text-center text-lg">{{ heading }}</h3>
    <p> <strong>{{ data.data.libelle_de_la_presentation}}</strong> has been recalled</p>

  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Notification } from '@/model/notification/notification';
// Define props for flexibility
const props = defineProps({
  heading: {
    type: String,
    default: 'Component Content',
  },
  data: {
    type: Notification,
    default: null,
  },
});

console.log(props)

</script>
