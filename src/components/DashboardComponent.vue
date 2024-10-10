<template>
  <div class="container mx-auto bg-white" style="max-height: 100vh">
    <!-- <PageHeader subtitle="welcome to MVMED" /> -->
    <div class="mt-6">
      <Banner />
    </div>
    <main class="">
      <div class="flex-col bg-white pb-6">
        <div
          class="flex justify-center items-center grid grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 gap-4 text-center py-4"
          id="widget"
        >
          <div
            class="bg-white flex flex-col justify-center cursor-pointer"
            @click="scanProduct"
          >
            <div
              class="flex bg-blue-50 border border-green-900 flex-row"
              id="widget"
            >
              <div class="py-4 pr-10 relative bg-white w-auto">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3126/3126504.png"
                  class="w-8 border-green-200 relative left-5 inline-block mx-auto"
                />
              </div>
              <div class="flex flex-col ml-2 p-2">
                <div class="flex items-center text-center">
                  <h4 class="text-md font-semibold">
                    {{ $t("dashboard.scanAProduct") }}
                  </h4>
                </div>
                <p class="text-sm">use datamatrix on the medicine box</p>
              </div>
            </div>
          </div>

          <div
            class="bg-white flex flex-col justify-center cursor-pointer"
            @click="electronicProduct"
          >
            <div
              class="flex bg-blue-50 border border-green-900 flex-row"
              id="widget"
            >
              <div class="py-4 pr-10 relative bg-white w-auto">
                <img
                  src="	https://cdn-icons-png.flaticon.com/512/9132/9132480.png"
                  class="w-8 border-green-200 relative left-5 inline-block mx-auto"
                />
              </div>
              <div class="flex flex-col ml-2 p-2">
                <div class="flex items-center">
                  <h4 class="text-md font-semibold">
                    {{ $t("dashboard.electronicProductInfo") }}
                  </h4>
                </div>
                <p class="text-sm">use datamatrix on the medicine box</p>
              </div>
            </div>
          </div>

          <div
            class="bg-white flex flex-col justify-center cursor-pointer"
            @click="report"
          >
            <div
              class="flex bg-blue-50 border border-green-900 flex-row"
              id="widget"
            >
              <div class="py-4 pr-10 relative bg-white w-auto">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2355/2355692.png"
                  class="w-8 border-green-200 relative left-5 inline-block mx-auto"
                />
              </div>
              <div class="flex flex-col ml-2 p-2">
                <div class="flex items-center">
                  <h4 class="text-md font-semibold">
                    {{ $t("dashboard.reportOrFillForm") }}
                  </h4>
                </div>
                <p class="text-sm">use datamatrix on the medicine box</p>
              </div>
            </div>
          </div>

          <div
            class="bg-white flex flex-col justify-center cursor-pointer"
            @click="whereToBuy"
          >
            <div
              class="flex bg-blue-50 border border-green-900 flex-row"
              id="widget"
            >
              <div class="py-4 pr-10 relative bg-white w-auto">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/14230/14230627.png"
                  class="w-8 border-green-200 relative left-5 inline-block mx-auto"
                />
              </div>
              <div class="flex flex-col ml-2 p-2">
                <div class="flex items-center">
                  <h4 class="text-md font-semibold">
                    {{ $t("dashboard.whereToGetSupplyDiff") }}
                  </h4>
                </div>
                <p class="text-sm">use datamatrix on the medicine box</p>
              </div>
            </div>
          </div>

          <div
            class="bg-white flex flex-col justify-center cursor-pointer"
            @click="whereToBuy"
          >
            <div
              class="flex bg-blue-50 border border-green-900 flex-row"
              id="widget"
            >
              <div class="py-4 pr-10 relative bg-white w-auto">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/14230/14230627.png"
                  class="w-8 border-green-200 relative left-5 inline-block mx-auto"
                />
              </div>
              <div class="flex flex-col ml-2 p-2">
                <div class="flex items-center">
                  <h4 class="text-md font-semibold">
                    {{ $t("dashboard.whereToGetSecureProd") }}
                  </h4>
                </div>
                <p class="text-sm">use datamatrix on the medicine box</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Banner from "@/shared/components/BannerComponent.vue";

export default defineComponent({
  name: "DashboardComponent",
  components: {
    Banner,
  },
  setup() {
    const router = useRouter();

    const logout = () => {
      localStorage.removeItem("token");
      router.push("/login");
    };

    const scanProduct = () => {
      router.push("/scanning");
    };
    const electronicProduct = () => {
      router.push("/electronic-product");
    };

    const report = () => {
      router.push("/report");
    };

    const whereGetinDifficulty = () => {
      router.push("/getProduct");
    };

    const whereToBuy = () => {
      router.push("/select-product-to-buy");
    };

    const fillForm = () => {
      window.open("https://signalement.social-sante.gouv.fr/", "_blank");
    };

    return {
      logout,
      scanProduct,
      fillForm,
      electronicProduct,
      report,
      whereGetinDifficulty,
      whereToBuy,
      // Banner
    };
  },
});
</script>

<style scoped>
.dashboard-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}

.custom-btn {
  background: linear-gradient(180deg, #0c5087 0%, #289c43 100%);
}
</style>
