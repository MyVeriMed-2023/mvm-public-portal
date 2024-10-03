// src/axiosInstance.js

import axios from 'axios';
import { AppConst } from '../AppConst';

import store from '@/store'; // Import your Vuex store
import router from '@/router'; // Import your Vue Router instance

const apiUrl = AppConst.apiBaseUrl;
// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: apiUrl, // Replace with your API's base URL
  timeout: 10000, // Optional: timeout after 10 seconds
});

// Request interceptor to add the token to headers
axiosInstance.interceptors.request.use(
  (config) => {
    store.dispatch('startLoading');
    const token = localStorage.getItem('token'); // Get the token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach the token
    }
    return config;
  },
  (error) => {

    setTimeout(() => {
      store.dispatch('stopLoading'); // Stop loading on error
    }, 2000)


    return Promise.reject(error);
  }
);

// Optionally, you can add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    setTimeout(() => {
      store.dispatch('stopLoading'); // Stop loading on error
    }, 2000)// Stop loading when response is received
    return response;
  },
  (error) => {
    // Handle errors, like refreshing token, redirecting to login, etc.
    setTimeout(() => {
      store.dispatch('stopLoading'); // Stop loading on error
    }, 2000)
    store.commit('clearAuth'); // Clear the auth details from the Vuex store
    router.push('/login'); // Redirect to the login page

    return Promise.reject(error);
  }
);

export default axiosInstance;
