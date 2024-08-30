import axios from 'axios';
const apiUrl = 'http://127.0.0.1:5000/api/v1';

export async function loginUser(email: string, password: string) {
  try {
    const response = await axios.post(
      `${apiUrl}/auth/login`,
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
    const response = await axios.post(`${apiUrl}/user/`,
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
