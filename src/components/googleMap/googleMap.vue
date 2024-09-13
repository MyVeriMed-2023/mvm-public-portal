<template>
    <div class="map-container">
      <iframe
        width="100%"
        height="450"
        style="border:0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.8638401728945!2d8.6636624!3d50.1075555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd095578f0beb5%3A0x2b5aff660258787f!2sPharmacy%20in%20the%20Central%20Station!5e0!3m2!1sen!2sfr!4v1725975807035!5m2!1sen!2sfr">
      </iframe>
    </div>
  </template>

  <style scoped>
  .map-container {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  iframe {
    width: 100%;
    height: 100%;
    max-width: 100%;
  }
  </style>
