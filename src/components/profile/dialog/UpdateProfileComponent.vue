<template>
    <div>
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
                    <n-input v-model="signUpForm.email" placeholder="Enter your email" />
                </n-form-item>
            </div>

            <!-- Submit button -->
            <n-button @click="signUp" :loading="loading" class="w-full mt-6 bg-app-color text-white font-bold"
                :disabled="!isFormValid()">
                Update Profile
            </n-button>

        </n-form>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, Ref } from 'vue';
import { AuthUserModel } from '@/model/user/AuthUserModel';
import { NButton, NInput, NForm, NFormItem } from 'naive-ui';
import { UpdateUserProfile } from '@/service/authService';
import { useStore } from 'vuex';

interface SignUpForm {
    firstName: string;
    lastName: string;
    email: string;
}

// Define props
const props = defineProps({
    user: {
        type: Object as () => AuthUserModel,
        required: true,
    },
    dialogRef: {
        type: Object as () => Ref<null | { close: () => void }>,
        required: true,
    }
});

const loading = ref(false);
const store = useStore();
// Expose the form data
const signUpForm = ref<SignUpForm>({
    firstName: '',
    lastName: '',
    email: '',
});

// Set form data with initial user values on mount
onMounted(() => {
    if (props.user) {
        signUpForm.value = {
            firstName: props.user.first_name,
            lastName: props.user.last_name,
            email: props.user.email,
        };
    }
});

// Validate email
const isValidEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// Check if form is valid
const isFormValid = () => {
    return (
        signUpForm.value.firstName.trim() !== '' &&
        signUpForm.value.lastName.trim() !== '' &&
        isValidEmail(signUpForm.value.email)
    );
};

// Sign up function
const signUp = async () => {
    loading.value = true;
    if (!isFormValid()) {
        loading.value = false; // Set loading to false if form is invalid
        return;
    }

    try {
        const obj = {
            first_name: signUpForm.value.firstName,
            last_name: signUpForm.value.lastName,
            email: signUpForm.value.email,
        };

        const response = await UpdateUserProfile(obj, props.user.user_id);

        if (response.success) {
            console.log(response.data);
            store.commit('updateUser', response.data.data);

            if (props.dialogRef && props.dialogRef.value) {
                props.dialogRef.value.close(); // This should close the dialog
            }

        }
    } catch (error) {
        console.error('Error updating profile:', error);
    } finally {
        loading.value = false; // Set loading to false regardless of outcome
    }
};
</script>


<style scoped>
/* Add custom styles if needed */
</style>