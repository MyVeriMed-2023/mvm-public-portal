<template>
  <div class="min-h-full">
    <PageHeader subtitle="scan a product" />
    <main>
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 bg-gray-200">
        <qrcode-stream :constraints="selectedConstraints" :track="trackFunctionSelected.value"
          :formats="selectedBarcodeFormats" @error="onError" @detect="onDetect" @camera-on="onCameraReady" />
      </div>

      <!-- <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 bg-gray-200">
        <DataMatrixGenerator data="01034009267382661727013110CH418\u001d210085770620135" />
      </div> -->
    </main>
  </div>
</template>

<script setup>
/* eslint-disable */

import { ref, computed, onMounted } from "vue";
import { QrcodeStream } from "vue-qrcode-reader";
import { useRouter } from "vue-router";
import PageHeader from "@/shared/components/PageHeader";
import DataMatrixGenerator from '@/components/datamatrix/DataMatrixGenerator.vue';

const result = ref("");
const type = ref("");
const exp_date = ref("");
const lot_no = ref("");
const router = useRouter();
let detectedSound = null;

onMounted(() => {
  // Preload the audio file when the component is mounted
  detectedSound = new Audio(require("@/assets/audio/beep.mp3"));
  detectedSound.preload = "auto";
});

const onDetect = async (detectedCodes) => {
  console.log(detectedCodes);

  // Play preloaded audio immediately
  // if (detectedSound) {
  //     detectedSound.play();
  // }

  const audio = new Audio(require("@/assets/audio/beep.mp3"));
  audio.play().catch((error) => {
    console.log("Error playing sound:", error);
  });

  result.value = JSON.stringify(detectedCodes.map((code) => code.rawValue));

  const full_value = result.value;
  const cis_13 = full_value.substring(5, 18);

  const qrCodeInfo = parseQRCode(full_value);
  exp_date.value = qrCodeInfo.expiryDate;
  lot_no.value = qrCodeInfo.batchNumber;

  type.value = cis_13;
  // Redirect to the results page

  setTimeout(() => {
    router.push({
      name: "ScanResult",
      query: {
        exp_date: exp_date.value,
        lot_no: lot_no.value,
        code13: type.value,
        data_matrix: full_value,
      },
    });
  }, 1000);

  console.log("lot_no", lot_no.value);
  console.log("exp_date", exp_date.value);
};

function parseQRCode(rawValue) {
  console.log("=============== raw value=================");
  console.log(rawValue);
  let batchNumber = null;
  let expiryDate = null;
  let serialNumber = null;
  let code_13 = null;

  if (rawValue.includes("u001d")) {
    rawValue = JSON.parse(rawValue)[0];

    // Define patterns
    const code13Pattern = /010(\d{13})/;
    // eslint-disable-next-line no-control-regex
    const serialNumberPattern = /21([^\u001d]+)/;
    const expiryDatePattern = /17(\d{2})(\d{2})(\d{2})/;
    // eslint-disable-next-line no-control-regex
    const batchNumberPattern = /10([^\u001d]+)/;

    // Extract code13
    const code13Match = rawValue.match(code13Pattern);
    code_13 = code13Match ? code13Match[1] : null;

    // Remove code13 from raw value
    let code_13_regex = new RegExp("^010" + code_13);

    // Replace the code_13 with an empty string
    rawValue = rawValue.replace(code_13_regex, "");

    console.log("code13 removed", rawValue);
    // Extract serialNumber
    const serialNumberMatch = rawValue.match(serialNumberPattern);
    const serialNumber = serialNumberMatch ? serialNumberMatch[1] : null;

    // Remove serialNumber from raw value
    let serialNumber_regex = new RegExp("21" + serialNumber);
    console.log("serialNumber removed", rawValue);
    // Replace the code_13 with an empty string
    rawValue = rawValue.replace(serialNumber_regex, "");

    // Extract expiryDate
    const expiryDateMatch = rawValue.match(expiryDatePattern);
    if (expiryDateMatch) {
      const year = "20" + expiryDateMatch[1];
      const month = expiryDateMatch[2];
      let day = expiryDateMatch[3];
      if (day === "00") {
        day = "01"; // Replace day '00' with '01'
      }
      expiryDate = `${year}-${month}-${day}`;
    }

    // Extract batchNumber
    const batchNumberMatch = rawValue.match(batchNumberPattern);
    // eslint-disable-next-line no-control-regex
    batchNumber = batchNumberMatch
      ? batchNumberMatch[1].replace(/\u001d/g, "")
      : null;

    return {
      code_13,
      serialNumber,
      expiryDate,
      batchNumber,
    };
  } else {
    // Extract code_13 (first 16 characters)
    let code_13 = rawValue.slice(0, 16);
    // Remove the first 3 characters from code_13
    code_13 = code_13.slice(3);

    // Extract date (from 17 onwards)
    const dateStartIndex = rawValue.indexOf("17");
    if (dateStartIndex === -1 || dateStartIndex + 6 >= rawValue.length) {
      throw new Error("Invalid date format in the QR code rawValue");
    }
    const year = rawValue.slice(dateStartIndex + 2, dateStartIndex + 4);
    const month = rawValue.slice(dateStartIndex + 4, dateStartIndex + 6);
    let day = rawValue.slice(dateStartIndex + 6, dateStartIndex + 8);
    if (day === "00") {
      day = "01"; // Replace day '00' with '01'
    }

    const expiryDate = `20${year}-${month}-${day}`;

    // Extract batch_no (remaining characters after the date)
    const batch_noStartIndex = dateStartIndex + 8;
    let batch_no = rawValue.slice(batch_noStartIndex);
    // Remove the first 2 characters from batch_no
    batchNumber = batch_no.slice(2).replace(/[^a-zA-Z0-9 ]/g, "");
    return {
      code_13,
      batchNumber,
      expiryDate,
      serialNumber,
    };
  }
  // Define regular expressions to match the required patterns
}

const selectedConstraints = ref({ facingMode: "environment" });
const defaultConstraintOptions = [
  { label: "rear camera", constraints: { facingMode: "environment" } },
  { label: "front camera", constraints: { facingMode: "user" } },
];
const constraintOptions = ref(defaultConstraintOptions);

async function onCameraReady() {
  const devices = await navigator.mediaDevices.enumerateDevices();
  const videoDevices = devices.filter(({ kind }) => kind === "videoinput");

  constraintOptions.value = [
    ...defaultConstraintOptions,
    ...videoDevices.map(({ deviceId, label }) => ({
      label: `${label} (ID: ${deviceId})`,
      constraints: { deviceId },
    })),
  ];

  error.value = "";
}

/*** track functons ***/

function paintOutline(detectedCodes, ctx) {
  for (const detectedCode of detectedCodes) {
    const [firstPoint, ...otherPoints] = detectedCode.cornerPoints;

    ctx.strokeStyle = "red";

    ctx.beginPath();
    ctx.moveTo(firstPoint.x, firstPoint.y);
    for (const { x, y } of otherPoints) {
      ctx.lineTo(x, y);
    }
    ctx.lineTo(firstPoint.x, firstPoint.y);
    ctx.closePath();
    ctx.stroke();
  }
}
function paintBoundingBox(detectedCodes, ctx) {
  for (const detectedCode of detectedCodes) {
    const {
      boundingBox: { x, y, width, height },
    } = detectedCode;

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#007bff";
    ctx.strokeRect(x, y, width, height);
  }
}
function paintCenterText(detectedCodes, ctx) {
  for (const detectedCode of detectedCodes) {
    const { boundingBox } = detectedCode;

    const centerX = boundingBox.x + boundingBox.width / 2;
    const centerY = boundingBox.y + boundingBox.height / 2;

    const fontSize = Math.max(12, (50 * boundingBox.width) / ctx.canvas.width);

    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.textAlign = "center";

    ctx.lineWidth = 3;
    ctx.strokeStyle = "#35495e";
    ctx.strokeText(detectedCode.rawValue, centerX, centerY);

    ctx.fillStyle = "#5cb984";
    ctx.fillText(detectedCode.rawValue, centerX, centerY);
  }
}
const trackFunctionOptions = [
  { text: "nothing (default)", value: undefined },
  { text: "outline", value: paintOutline },
  { text: "centered text", value: paintCenterText },
  { text: "bounding box", value: paintBoundingBox },
];
const trackFunctionSelected = ref(trackFunctionOptions[1]);

/*** barcode formats ***/

const barcodeFormats = ref({
  data_matrix: true,
  matrix_codes: true,
});
const selectedBarcodeFormats = computed(() => {
  return Object.keys(barcodeFormats.value).filter(
    (format) => barcodeFormats.value[format]
  );
});

/*** error handling ***/

const error = ref("");

function onError(err) {
  error.value = `[${err.name}]: `;

  if (err.name === "NotAllowedError") {
    error.value += "you need to grant camera access permission";
  } else if (err.name === "NotFoundError") {
    error.value += "no camera on this device";
  } else if (err.name === "NotSupportedError") {
    error.value += "secure context required (HTTPS, localhost)";
  } else if (err.name === "NotReadableError") {
    error.value += "is the camera already in use?";
  } else if (err.name === "OverconstrainedError") {
    error.value += "installed cameras are not suitable";
  } else if (err.name === "StreamApiNotSupportedError") {
    error.value += "Stream API is not supported in this browser";
  } else if (err.name === "InsecureContextError") {
    error.value +=
      "Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.";
  } else {
    error.value += err.message;
  }
}
</script>

<style scoped>
.dialog-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
}
</style>