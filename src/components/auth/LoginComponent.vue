<template>
  <div class="flex h-screen">
    <!-- Left Side -->
    <div class="relative hidden md:flex flex-auto items-center justify-center w-1/2 h-full p-16 lg:px-12 overflow-hidden bg-app-color dark:border-l">
      <!-- Background Rings -->
      <svg class="absolute inset-0 pointer-events-none" viewBox="0 0 960 540" width="100%" height="100%" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
        <g class="text-gray-700 opacity-25" fill="none" stroke="currentColor" stroke-width="100">
          <circle r="234" cx="196" cy="23"></circle>
          <circle r="234" cx="790" cy="491"></circle>
        </g>
      </svg>
      <!-- Background Dots -->
      <svg class="absolute -top-16 -right-16 text-gray-700" viewBox="0 0 220 192" width="220" height="152" fill="none">
        <defs>
          <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect width="220" height="150" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect>
      </svg>
      <!-- Content -->
      <div class="z-10 relative w-full max-w-2xl">
        <div class="text-7xl font-bold leading-none text-gray-100">
          <div>Welcome to</div>
          <div>MyVeriMed</div>
        </div>
        <div class="mt-6 text-lg tracking-tight leading-6 text-gray-400">
          An AI-driven Anomaly Detection Solution securing the pharmaceutical supply chain, protecting patients from falsified medicines and preventing stock shortages.
        </div>
        <div class="flex items-center mt-8">
          <div class="flex flex-0 items-center -space-x-1.5">
            <img class="flex-0 w-10 h-10 rounded-full ring-4 ring-offset-1 ring-gray-800 ring-offset-gray-800 object-cover" src="@/assets/images/avatars/female-18.jpg" alt="Avatar" />
            <img class="flex-0 w-10 h-10 rounded-full ring-4 ring-offset-1 ring-gray-800 ring-offset-gray-800 object-cover" src="@/assets/images/avatars/female-11.jpg" alt="Avatar" />
            <img class="flex-0 w-10 h-10 rounded-full ring-4 ring-offset-1 ring-gray-800 ring-offset-gray-800 object-cover" src="@/assets/images/avatars/male-09.jpg" alt="Avatar" />
            <img class="flex-0 w-10 h-10 rounded-full ring-4 ring-offset-1 ring-gray-800 ring-offset-gray-800 object-cover" src="@/assets/images/avatars/male-16.jpg" alt="Avatar" />
          </div>
          <div class="ml-4 font-medium tracking-tight text-gray-400">
            More than 17k people joined us, it's your turn
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side -->
    <div class="flex flex-col justify-center items-center w-full sm:w-auto md:w-full p-8 sm:p-8 h-full bg-gray-1000">
      <div class="w-full max-w-sm text-center bg-white p-8 rounded-2xl">
        <!-- Logo -->
        <div class="w-full flex justify-center">
          <img class="justify-center w-50 sm:w-full" src="@/assets/images/logo/myverimedLogo.png" alt="MyVeriMed Logo" />
        </div>

        <!-- Title -->
        <div class="text-center mt-8 text-4xl font-extrabold tracking-tight leading-tight">Sign in</div>
        <div class="flex items-baseline mt-0.5 font-medium">
          <div>Don't have an account?</div>
          <router-link to="/sign-up" class="ml-1 text-primary-500 hover:underline">Sign up</router-link>
        </div>

        <!-- Alert -->
        <div v-if="showAlert" class="mt-8 -mb-4">
          <n-alert :type="alert.type" :show-icon="true" class="w-full mt-4">
            {{ alert.message }}
          </n-alert>
        </div>

        <!-- Sign in form -->
        <n-form ref="formRef" @submit.prevent="signIn" class="mt-8">
          <!-- Email field -->
          <n-form-item label="Email address" :rules="{ required: true, type: 'email' }">
            <n-input v-model:value="signInForm.email" type="email" placeholder="Enter your email" />
          </n-form-item>

          <!-- Password field -->
          <n-form-item label="Password" :rules="{ required: true }">
            <n-input v-model:value="signInForm.password" :type="showPassword ? 'text' : 'password'" placeholder="Enter your password" />
            <n-icon @click="togglePasswordVisibility" class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
              <n-icon :name="showPassword ? 'eye-off' : 'eye'" />
            </n-icon>
          </n-form-item>

          <!-- Actions -->
          <div class="inline-flex items-end justify-between w-full mt-1.5">
            <label class="inline-flex items-center">
              <input type="checkbox" v-model="signInForm.rememberMe" class="form-checkbox text-primary-500" />
              <span class="ml-2">Remember me</span>
            </label>
            <router-link to="/forgot-password" class="text-md font-medium text-primary-500 hover:underline">Forgot password?</router-link>
          </div>

          <!-- Submit button -->
          <n-button @click="signIn" type="submit" class="w-full mt-6 bg-app-color text-white font-bold" :disabled="!isValidEmail(signInForm.email) || !signInForm.password">
            Sign in
          </n-button>

          <!-- Separator -->
          <div class="flex items-center mt-8">
            <div class="flex-auto mt-px border-t"></div>
            <div class="mx-2 text-secondary">Or continue with</div>
            <div class="flex-auto mt-px border-t"></div>
          </div>

          <!-- Single sign-on buttons -->
          <div class="flex items-center mt-4 pb-8 space-x-4">
            <n-button type="button" class="flex-auto" icon="chrome">
              <Icon color="green" size="24">
                <LogoChrome />
              </Icon>
            </n-button>

            <n-button type="button" class="flex-auto" icon="github">
              <Icon color="black" size="24">
                <LogoGithub />
              </Icon>
            </n-button>

            <n-button type="button" class="flex-auto" icon="twitter">
              <Icon color="skyblue" size="24">
                <LogoTwitter />
              </Icon>
            </n-button>
          </div>
        </n-form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { NButton, NInput, NForm, NFormItem, NAlert, NIcon } from 'naive-ui';
import { LogoChrome, LogoGithub, LogoTwitter } from "@vicons/ionicons4";
import { Icon } from "@vicons/utils";
import { loginUser } from '@/service/authService'; // Adjust the path as necessary
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  components: {
    NButton,
    NInput,
    NForm,
    NFormItem,
    NAlert,
    NIcon,
    LogoChrome,
    LogoGithub,
    LogoTwitter,
    Icon
  },
  setup() {

    const store = useStore();
    const router = useRouter();

    const signInForm = ref({
      email: '',
      password: '',
      rememberMe: false,
    });
    const showPassword = ref(false);
    const showAlert = ref(false);
    const alert = ref({
      type: 'error',
      message: '',
    });

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    const isValidEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };

    const signIn = async () => {
      console.log('sign in working ');
      if (!isValidEmail(signInForm.value.email) || !signInForm.value.password) {
        showAlert.value = true;
        alert.value.message = 'Please enter valid credentials';
        return;
      }

      try {
        const response = await loginUser(signInForm.value.email, signInForm.value.password);

        if (response.success) {
          // Handle successful login (e.g., redirect, store token, etc.)
          store.commit('setToken', response.token); // Commit token to Vuex store
          alert.value = {
            type: 'success',
            message: 'Login successful!'
          };

          router.push('/dashboard'); // Redirect to dashboard
          // Redirect or other actions
        } else {
          // Handle login failure
          showAlert.value = true;
          alert.value.message = response.message;
        }
      } catch (error) {
        showAlert.value = true;
        alert.value.message = 'An error occurred. Please try again later.';
      }
    };

    return {
      signInForm,
      showPassword,
      showAlert,
      alert,
      togglePasswordVisibility,
      isValidEmail,
      signIn
    };
  }
};
</script>

<style scoped>
/* Custom styles for the alert */
.alert {
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  text-align: center;
}

.alert.error {
  background-color: #f56565;
  color: white;
}
</style>
