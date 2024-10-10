<template>
  <div class="flex h-screen" ref="resizeElement">
    <!-- Left Side -->
    <div
      class="relative hidden md:flex flex-auto items-center justify-center w-1/2 h-full p-16 lg:px-12 overflow-hidden bg-app-color dark:border-l">
      <!-- Background Rings -->
      <svg class="absolute inset-0 pointer-events-none" viewBox="0 0 960 540" width="100%" height="100%"
        preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
        <g class="text-gray-700 opacity-25" fill="none" stroke="currentColor" stroke-width="100">
          <circle r="234" cx="196" cy="23"></circle>
          <circle r="234" cx="790" cy="491"></circle>
        </g>
      </svg>
      <!-- Background Dots -->
      <svg class="absolute -top-16 -right-16 text-gray-700" viewBox="0 0 220 192" width="220" height="152" fill="none">
        <defs>
          <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20"
            patternUnits="userSpaceOnUse">
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
          An AI-driven Anomaly Detection Solution securing the pharmaceutical supply chain, protecting patients from
          falsified medicines and preventing stock shortages.
        </div>
        <div class="flex items-center mt-8">
          <div class="flex flex-0 items-center -space-x-1.5">
            <img
              class="flex-0 w-10 h-10 rounded-full ring-4 ring-offset-1 ring-gray-800 ring-offset-gray-800 object-cover"
              src="@/assets/images/avatars/female-18.jpg" alt="Avatar" />
            <img
              class="flex-0 w-10 h-10 rounded-full ring-4 ring-offset-1 ring-gray-800 ring-offset-gray-800 object-cover"
              src="@/assets/images/avatars/female-11.jpg" alt="Avatar" />
            <img
              class="flex-0 w-10 h-10 rounded-full ring-4 ring-offset-1 ring-gray-800 ring-offset-gray-800 object-cover"
              src="@/assets/images/avatars/male-09.jpg" alt="Avatar" />
            <img
              class="flex-0 w-10 h-10 rounded-full ring-4 ring-offset-1 ring-gray-800 ring-offset-gray-800 object-cover"
              src="@/assets/images/avatars/male-16.jpg" alt="Avatar" />
          </div>
          <div class="ml-4 font-medium tracking-tight text-gray-400">
            More than 17k people joined us, it's your turn
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side -->
    <div class="flex flex-col justify-center items-center w-full sm:w-auto md:w-full p-0 sm:p-8 h-full bg-gray-1000">
      <div class="w-full max-w-4xl text-center bg-white p-8 rounded-2xl">
        <!-- Logo -->
        <div class="w-full flex justify-center mt-12 sm:mt-2">
          <img class="justify-center w-20 xs:w-full" src="@/assets/images/logo/myverimedLogo.png"
            alt="MyVeriMed Logo" />
        </div>

        <!-- Title -->
        <div class="text-center mt-8 text-4xl font-extrabold tracking-tight leading-tight">Sign up</div>
        <div class="flex items-baseline mt-0.5 font-medium">
          <div>Already have an account?</div>
          <router-link to="/login" class="ml-1 text-primary-500 hover:underline">Sign in</router-link>
        </div>

        <!-- Alert -->
        <div v-if="showAlert" class="mt-8 -mb-4">
          <n-alert :type="alert.type" show-icon class="w-full mt-4">
            {{ alert.message }}
          </n-alert>
        </div>

        <!-- Sign up form -->
        <n-form ref="formRef" @submit.prevent="signUp" class="mt-8">
          <!-- Two-column layout for form fields -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- First Name field -->
            <n-form-item label="First Name" :rules="{ required: true }">
              <n-input v-model="signUpForm.firstName" type="text" placeholder="Enter your first name" />
            </n-form-item>

            <!-- Last Name field -->
            <n-form-item label="Last Name" :rules="{ required: true }">
              <n-input v-model="signUpForm.lastName" type="text" placeholder="Enter your last name" />
            </n-form-item>

            <!-- Email field -->
            <n-form-item label="Email address" :rules="{ required: true, type: 'email' }">
              <n-input v-model="signUpForm.email" type="email" placeholder="Enter your email" />
            </n-form-item>

            <!-- User Type field -->
            <n-form-item label="User Type" :rules="{ required: true }">
              <n-select v-model="signUpForm.userType" :options="userTypeOptions" />
            </n-form-item>

            <!-- Password field -->
            <n-form-item label="Password" :rules="{ required: true }">
              <n-input v-model="signUpForm.password" :type="showPassword ? 'text' : 'password'"
                placeholder="Enter your password" />
              <Icon @click="togglePasswordVisibility" color="gray" size="30"
                class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                <IosEye v-if="!showPassword" />
                <IosEyeOff v-if="showPassword" />
              </Icon>
            </n-form-item>

            <!-- Confirm Password field -->
            <n-form-item label="Confirm Password" :rules="{ required: true }">
              <n-input v-model="signUpForm.confirmPassword" :type="showPassword ? 'text' : 'password'"
                :status="passwordStatus" placeholder="Confirm your password" />
              <Icon @click="togglePasswordVisibility" color="gray" size="30"
                class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                <IosEye v-if="!showPassword" />
                <IosEyeOff v-if="showPassword" />
              </Icon>
            </n-form-item>
          </div>

          <!-- Actions -->
          <div class="inline-flex items-end justify-between w-full mt-1.5">
            <label class="inline-flex items-center">
              <input type="checkbox" v-model="signUpForm.rememberMe" class="form-checkbox text-primary-500" />
              <span class="ml-2">Remember me</span>
            </label>
            <router-link to="/forgot-password" class="text-md font-medium text-primary-500 hover:underline">Forgot
              password?</router-link>
          </div>

          <!-- Submit button -->
          <n-button @click="signUp" :loading="loading" type="submit"
            class="w-full mt-6 bg-app-color text-white font-bold" :disabled="!isFormValid()">
            Sign up
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

<script setup>
import { ref } from 'vue';
import { NButton, NInput, NForm, NFormItem, NAlert, NSelect } from 'naive-ui';
import { LogoChrome, LogoGithub, LogoTwitter, IosEye, IosEyeOff } from "@vicons/ionicons4";
import { Icon } from "@vicons/utils";
import { registerUser } from '@/service/authService'; // Adjust the path as necessary
import { useRouter } from 'vue-router';

const router = useRouter();
const loading = ref(false)
const passwordStatus = ref('')

const userTypeOptions = ref([
  { label: 'Medical Doctor', value: 'medical-doctor' },
  { label: 'Non-Medical Staffs', value: 'non-medical-staff' },
  { label: 'Patients', value: 'patients' },
]);

const signUpForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  userType: '',
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

const isFormValid = () => {
  if (signUpForm.value.password !== signUpForm.value.confirmPassword) {
    passwordStatus.value = 'error'
  }
  else {
    passwordStatus.value = ''
  }
  return (
    isValidEmail(signUpForm.value.email) &&
    signUpForm.value.password === signUpForm.value.confirmPassword &&
    signUpForm.value.password.length > 0 &&
    signUpForm.value.confirmPassword.length > 0 &&
    signUpForm.value.userType
  );
};

const signUp = async () => {

  loading.value = true
  if (!isFormValid()) {
    loading.value = false
    showAlert.value = true;
    alert.value.message = 'Please fill out the form correctly';
    return;
  }

  try {
    const obj = {
      branch_id: '',
      org_id: '',
      role_id: '',
      description: '',
      user_type: 'Free_user',
      first_name: signUpForm.value.firstName,
      last_name: signUpForm.value.lastName,
      email: signUpForm.value.email,
      password: signUpForm.value.password,
    };
    const response = await registerUser(obj);

    if (response.success) {
      loading.value = false
      alert.value = { type: 'success', message: response.message };
      router.push('/login');
    } else {
      loading.value = false
      showAlert.value = true;
      alert.value.message = response.message;
    }
  } catch (error) {
    loading.value = false
    showAlert.value = true;
    alert.value.message = 'An error occurred. Please try again later.';
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