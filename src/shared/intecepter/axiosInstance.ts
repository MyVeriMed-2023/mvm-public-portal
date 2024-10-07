import axios from 'axios';
import { AppConst } from '../AppConst';
import axiosRetry from 'axios-retry';
import store from '@/store';
import router from '@/router';

const apiUrl = AppConst.apiBaseUrl;

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
});

// Retry logic: Retry up to 3 times with exponential backoff
axiosRetry(axiosInstance, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
});

// Request interceptor to add the token to headers
axiosInstance.interceptors.request.use(
  (config) => {
    store.dispatch('startLoading');
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {

    setTimeout(() => {
      store.dispatch('stopLoading');
    }, 2000)


    return Promise.reject(error);
  }
);


axiosInstance.interceptors.response.use(
  (response) => {
    setTimeout(() => {
      store.dispatch('stopLoading');
    }, 2000)
    return response;
  },
  (error) => {

    setTimeout(() => {
      store.dispatch('stopLoading');
    }, 2000)
    store.commit('clearAuth');
    router.push('/login');

    return Promise.reject(error);
  }
);

export default axiosInstance;
