<template>
  <div>
    <canvas ref="datamatrixCanvas"></canvas>
  </div>
</template>

<script>
import bwipjs from 'bwip-js';

export default {
  name: 'DataMatrixGenerator',
  props: {
    data: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.generateDataMatrix();
  },
  methods: {
    generateDataMatrix() {
      try {
        // Generate the DataMatrix code
        bwipjs.toCanvas(this.$refs.datamatrixCanvas, {
          bcid: 'datamatrix',        // Barcode type
          text: this.data,           // Data to encode
          scale: 3,                  // 3x scaling factor
          height: 20,                // Bar height, not used for DataMatrix
          includetext: false,        // Do not include human-readable text
          textxalign: 'center',      // Center-align the text
        });
      } catch (e) {
        console.error('Error generating DataMatrix:', e);
      }
    },
  },
};
</script>