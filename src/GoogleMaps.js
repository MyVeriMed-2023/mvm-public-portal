// src/GoogleMaps.js
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_GOOGLE_MAPS_API_KEY',
    libraries: 'places', // necessary for places input
  },
});
