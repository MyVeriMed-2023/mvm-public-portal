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
    const token = localStorage.getItem('token'); // Get the token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach the token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optionally, you can add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors, like refreshing token, redirecting to login, etc.

    store.commit('clearAuth'); // Clear the auth details from the Vuex store
    router.push('/login'); // Redirect to the login page

    return Promise.reject(error);
  }
);

export default axiosInstance;
