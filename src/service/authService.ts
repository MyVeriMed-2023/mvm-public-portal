import { AuthUserModel } from '@/model/user/AuthUserModel';
import { AppConst } from '@/shared/AppConst';
import axiosInstance from '@/shared/intecepter/axiosInstance';
import axios from 'axios';
/* eslint-disable */
export async function loginUser(email: string, password: string) {
  try {
    const response = await axios.post(
      `${AppConst.apiBaseUrl}/auth/login`,
      { email, password },
      { headers: { 'Content-Type': 'application/json' } }
    );

    // Assuming the response structure, adjust if necessary
    if (response.status === 200) {
      return {
        success: true,
        token: response.data.data.access_token,
        user: response.data.data.user,
      };
    } else {
      return {
        success: false,
        message: response.data.message || 'Login failed',
      };
    }
  } catch (error) {
    console.error('Error during login:', error);
    return {
      success: false,
      message: 'An error occurred during login',
    };
  }
}
export async function verifyToken(token: string) {
  return token.startsWith('dummy-token-');
}

export async function logoutUser(store: any) {
  try {
    store.dispatch('logout'); // Call the Vuex action for logout
  } catch (error) {
    console.error('Error during logout:', error);
  }
}

export async function registerUser(obj: any) {
  try {
    // Make an HTTP POST request using axios
    const response = await axios.post(`${AppConst.apiBaseUrl}/user/`,
      obj
      , {
        headers: {
          'Content-Type': 'application/json',
        },
      });

    // Check if the response is successful
    if (response.status === 200) {
      return {
        success: true,
        message: 'Registration successful!',
        data: response.data,
      };
    } else {
      return {
        success: false,
        message: response.data.message || 'Registration failed',
      };
    }
  } catch (error: any) {
    console.error('Error during registration:', error);

    // Handle errors that are responses from the server
    if (error.response) {
      return {
        success: false,
        message: error.response.data.message || 'Registration failed',
      };
    }

    return {
      success: false,
      message: 'An error occurred during registration',
    };
  }
}

export async function getAuthUser() {
  try {
    const response = await axiosInstance.get(`${AppConst.apiBaseUrl}/auth/auth_user`, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 200) {
      // Assuming the response data is an array of blog objects
      return {
        success: true,
        user: new AuthUserModel(response.data.data)
      };
    } else {
      return { success: false, message: response.data.message || 'Failed to fetch blog updates' };
    }
  } catch (error) {
    console.error('Error fetching blog updates:', error);
    return { success: false, message: 'An error occurred while fetching blog updates' };
  }
}

export async function UpdateUserProfile(obj: any, id: string) {
  try {
    // Make an HTTP POST request using axios
    const response = await axiosInstance.post(
      `${AppConst.apiBaseUrl}/user/update_public_profile`, // API URL
      obj, // Payload data (object to send)
      {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          user_id: encodeURIComponent(id),
        },
      }
    );

    // Check if the response is successful
    if (response.status === 200) {
      return {
        success: true,
        message: response.data.message || 'Profile updated successfully',
        data: response.data,
      };
    } else {
      return {
        success: false,
        message: response.data.message || 'Profile update failed',
      };
    }
  } catch (error: any) {
    console.error('Error during profile update:', error);

    // Handle errors that are responses from the server
    if (error.response) {
      return {
        success: false,
        message: error.response.data.message || 'Profile update failed',
      };
    }

    return {
      success: false,
      message: 'An error occurred during profile update',
    };
  }
}