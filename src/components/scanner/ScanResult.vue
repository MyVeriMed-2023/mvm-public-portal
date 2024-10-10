<template>
  <div v-if="loading" class="page-loader bg-app-color">
    <div class="__inner">
      <img
        class="w-24 h-24"
        src="@/assets/loading/ambulance-bg.gif"
        alt="Loading"
      />
      <span>Loading! Please Wait...</span>
    </div>
  </div>

  <div
    v-if="!loading && productDetails"
    class="w-full h-screen"
    :style="{ backgroundColor: productDetails.color }"
  >
    <div
      class="relative mb-32"
      :style="{ backgroundColor: productDetails.color }"
    >
      <div
        class="rounded overflow-hidden"
        :style="{ backgroundColor: productDetails.color }"
      >
        <div class="flex justify-end">
          <button
            @click="goBack"
            class="top-4 p-4 right-4 text-gray-600 hover:text-gray-800"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="absolute w-full flex justify-center"
          :style="{ backgroundColor: productDetails.color }"
        >
          <div
            class="h-16 w-16"
            :style="{ backgroundColor: productDetails.color }"
          >
            <img
              v-if="productDetails.status === AppConst.status.valid.value"
              class="rounded-full border-2 object-cover h-full w-full shadow-md"
              src="@/assets/images/success.png"
              alt="Success"
            />
            <img
              v-if="productDetails.status === AppConst.status.danger.value"
              class="rounded-full object-cover h-full w-full shadow-md"
              src="@/assets/images/danger.png"
              alt="Danger"
            />
            <img
              v-if="productDetails.status === AppConst.status.warning.value"
              class="rounded-full object-cover h-full w-full shadow-md"
              src="@/assets/images/warning.png"
              alt="Warning"
            />
            <img
              v-if="productDetails.status === AppConst.status.info.value"
              class="rounded-full object-cover h-full w-full shadow-md"
              src="@/assets/images/info.png"
              alt="Info"
            />
          </div>
        </div>
        <ul
          class="overflow-hidden sm:rounded-md sm:max-w-2xl mx-auto mt-20 px-4"
        >
          <li>
            <div class="py-3 sm:px-6">
              <div
                :class="`grid grid-cols-2 gap-2 ${productDetails.textClass}`"
              >
                <h3 class="text-md leading-6 font-medium text-start">Brand</h3>
                <p class="text-sm text-start">
                  {{ productDetails.product_cis.denomination_du_medicament }}
                </p>
              </div>
            </div>
          </li>
          <li class="border-t border-gray-200">
            <div class="py-3 sm:px-6">
              <div
                :class="`grid grid-cols-2 gap-2 ${productDetails.textClass}`"
              >
                <h3 class="text-md leading-6 font-medium text-start">Holder</h3>
                <p class="text-sm text-start">
                  {{ productDetails.product_cis.titulaire }}
                </p>
              </div>
            </div>
          </li>
          <li class="border-t border-gray-200">
            <div class="py-3 sm:px-6">
              <div
                :class="`grid grid-cols-2 gap-2 ${productDetails.textClass}`"
              >
                <h3 class="text-md leading-6 font-medium w-24">Chemical</h3>
                <p class="max-w-2xl text-sm text-start">
                  {{ productDetails.product_bdpm.denomination_substance }}
                </p>
              </div>
            </div>
          </li>

          <li class="border-t border-gray-200">
            <div class="py-3 sm:px-6">
              <div
                :class="`grid grid-cols-2 gap-2 ${productDetails.textClass}`"
              >
                <h3 class="text-md leading-6 font-medium w-24">CIP</h3>
                <p class="max-w-2xl text-sm text-start">
                  {{ productDetails.code_cip13 }}
                </p>
              </div>
            </div>
          </li>

          <li class="border-t border-gray-200">
            <div class="py-3 sm:px-6">
              <div
                :class="`grid grid-cols-2 gap-2 ${productDetails.textClass}`"
              >
                <h3 class="text-md leading-6 font-medium w-24">
                  Serial No (SN)
                </h3>
                <p class="max-w-2xl text-sm text-start">
                  {{ productDetails.dataMatrixProps.serial_number }}
                </p>
              </div>
            </div>
          </li>

          <li class="border-t border-gray-200">
            <div class="py-3 sm:px-6">
              <div
                :class="`grid grid-cols-2 gap-2 ${productDetails.textClass}`"
              >
                <h3 class="text-md leading-6 font-medium w-24">Form</h3>
                <p class="max-w-2xl text-sm text-start">
                  {{ productDetails.product_cis.forme_pharmaceutique }}
                </p>
              </div>
            </div>
          </li>

          <li class="border-t border-gray-200">
            <div class="py-3 sm:px-6">
              <div
                :class="`grid grid-cols-2 gap-2 ${productDetails.textClass}`"
              >
                <h3 class="text-md leading-6 font-medium w-24">Dosage</h3>
                <p class="max-w-2xl text-sm text-start">
                  {{ productDetails.lotNo }}
                </p>
              </div>
            </div>
          </li>

          <li class="border-t border-gray-200">
            <div class="py-3 sm:px-6">
              <div
                :class="`grid grid-cols-2 gap-2 ${productDetails.textClass}`"
              >
                <h3 class="text-md leading-6 font-medium w-24">Expiry</h3>
                <p class="max-w-2xl text-sm text-start">
                  {{ productDetails.expiryDate }}
                </p>
              </div>
            </div>
          </li>

          <li class="border-t border-gray-200">
            <div class="py-3 sm:px-6">
              <div
                :class="`grid grid-cols-2 gap-2 ${productDetails.textClass}`"
              >
                <h3 class="text-md leading-6 font-medium w-24">Description</h3>
                <p class="max-w-2xl text-xs text-start">
                  {{ productDetails.desc }}
                </p>
              </div>
            </div>
          </li>
        </ul>

        <div class="w-full flex justify-center pt-5 pb-5">
          <div
            class="flex flex-wrap gap-4 px-6 justify-center text-lg font-serif min-w-full"
          >
            <n-collapse
              style="background-color: #ffffff96; color: white"
              class="shadow-2xl bg-gray-100 flex-grow text-black border-l-8 border-red-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              <n-collapse-item title="Electronic product information" name="1">
                <div class="columns-3">
                  <div class="font-thin text-sm pt-1 text-center">
                    <span>
                      <a
                        @click="openDocument('SMPC', productDetails.code_cis)"
                        class="text-blue-500"
                      >
                        SMPC
                      </a>
                    </span>
                  </div>

                  <div class="font-thin text-sm pt-1 text-center">
                    <span>
                      <a
                        @click="openDocument('LABEL', productDetails.code_cis)"
                        class="text-blue-500"
                      >
                        LABEL
                      </a>
                    </span>
                  </div>

                  <div class="font-thin text-sm pt-1 text-center">
                    <span>
                      <a
                        @click="openDocument('PL', productDetails.code_cis)"
                        class="text-blue-500"
                      >
                        PL
                      </a>
                    </span>
                  </div>
                </div>
              </n-collapse-item>
            </n-collapse>
          </div>
        </div>

        <div class="w-full flex justify-center pt-5 pb-5">
          <div
            v-if="productDetails.status === AppConst.status.info.value"
            class="min-w-full flex flex-wrap gap-4 px-6 justify-center text-lg font-serif"
          >
            <a
              v-for="(item, index) in productDetails.product_info"
              :key="index"
              :href="item.link"
              target="_blank"
              class="min-w-full shadow-2xl bg-gray-100 flex-grow text-black border-l-8 border-red-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              {{ item.description }}

              <div class="font-thin text-sm pt-1">
                <span>{{ formattedCreatedDate(item.created_date) }}</span>
              </div>
            </a>
          </div>

          <div
            v-if="productDetails.is_recalled"
            class="min-w-full flex flex-wrap gap-4 px-6 justify-center text-lg font-serif"
          >
            <a
              style="background-color: #e5cf07bf"
              class="min-w-full text-center shadow-2xl bg-gray-100 flex-grow text-black border-l-8 border-red-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              Alert

              <div class="font-thin text-sm pt-1">
                <span>
                  {{ getContent(productDetails) }}
                </span>
              </div>

              <div class="font-thin text-sm pt-1">
                <span>
                  <a @click="report" href="" class="text-blue-500"> report </a>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getProductByCode13 } from "@/service/productService";
import { AppConst } from "@/shared/AppConst";
import { formatDate } from "@/shared/utils/dateFormatter";
import { getGeolocation } from "@/shared/service/geolocationService";

const route = useRoute();
const router = useRouter();
const productDetails = ref(null);
const code13 = route.query.code13;
const expDate = route.query.exp_date;
const lotNo = route.query.lot_no;
const dataMatrix = route.query.data_matrix;

const error = ref(null);
const loading = ref(true);
const location = ref(null);

onMounted(async () => {
  try {
    location.value = await getGeolocation();
  } catch (err) {
    error.value = "Failed to fetch location data.";
  } finally {
    setTimeout(() => {
      loading.value = false;
    }, 2000);
  }

  try {
    const response = await getProductByCode13(
      code13,
      lotNo,
      location.value,
      dataMatrix
    );
    if (response.success) {
      // Get product status and additional details
      const statusDetails = getStatus(response.product, expDate);

      // Update productDetails
      productDetails.value = {
        code13: code13,
        expiryDate: expDate,
        lotNo: lotNo,
        status: statusDetails.status,
        color: statusDetails.color,
        desc: statusDetails.desc,
        textClass: statusDetails.textClass,
        ...response.product,
      };

      console.log("product details", productDetails.value);
    } else {
      console.error("Error fetching product:", response.message);
    }
  } catch (error) {
    console.error("An error occurred while fetching the product:", error);
  }
});

function goBack() {
  router.back();
}

function report() {
  router.push("/report");
}

function getStatus(item, expDate) {
  console.log("item in status", item);
  const currentDate = new Date();
  const expireDateF = new Date(expDate);

  let status = AppConst.status.warning.value;
  let color = AppConst.status.warning.color;
  let desc = AppConst.status.warning.desc;
  let textClass = AppConst.status.warning.textClass;

  // expired
  if (expireDateF < currentDate || item.is_recalled) {
    status = AppConst.status.danger.value;
    color = AppConst.status.danger.color;
    desc = AppConst.status.danger.desc;
    textClass = AppConst.status.danger.textClass;

    return {
      status,
      color,
      desc,
      textClass,
    };
  }
  // info
  else if (item.product_info.length > 0) {
    status = AppConst.status.info.value;
    color = AppConst.status.info.color;
    desc = AppConst.status.info.desc;
    textClass = AppConst.status.info.textClass;

    return {
      status,
      color,
      desc,
      textClass,
    };
  } else if (item.is_verified) {
    status = AppConst.status.valid.value;
    color = AppConst.status.valid.color;
    desc = AppConst.status.valid.desc;
    textClass = AppConst.status.valid.textClass;

    return {
      status,
      color,
      desc,
      textClass,
    };
  }

  return {
    status,
    color,
    desc,
    textClass,
  };
}

function formattedCreatedDate(date) {
  return formatDate(date);
}

function getContent(product) {
  let content = "";

  // Using string interpolation correctly
  if (product.is_batch_recalled) {
    content = `This Batch (${
      product.lotNo
    }) has been recalled from ${formattedCreatedDate(
      product.recalled.publish_date
    )}`;
  } else {
    content = `This Product has been recalled from ${formattedCreatedDate(
      product.recalled.publish_date
    )}`;
  }

  return content;
}

function openDocument(fileType, code_cis) {
  if (fileType === "SMPC") {
    window.open(
      `${AppConst.ansmproductUrl}affichageDoc.php?specid=${code_cis}&typedoc=R`,
      "_blank"
    );
  }

  if (fileType === "PL") {
    window.open(
      `${AppConst.ansmproductUrl}affichageDoc.php?specid=${code_cis}&typedoc=N`,
      "_blank"
    );
  } else {
    window.open(
      `${AppConst.ansmproductUrl}extrait.php?specid=${code_cis}`,
      "_blank"
    );
  }
}
</script>

<style scoped>
/* Ensure the modal takes the full page */
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  /* Ensure it is on top of everything */
}

.page-loader .__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.n-collapse
  .n-collapse-item:not(
    .n-collapse-item--disabled
  ).n-collapse-item--trigger-area-main
  .n-collapse-item__header
  .n-collapse-item__header-main {
  color: white !important;
}
</style>
