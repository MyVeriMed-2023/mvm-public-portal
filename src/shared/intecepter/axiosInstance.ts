// src/axiosInstance.js

import axios from 'axios';
const apiUrl = 'http://127.0.0.1:5000/api/v1';
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
    return Promise.reject(error);
  }
);

export default axiosInstance;
