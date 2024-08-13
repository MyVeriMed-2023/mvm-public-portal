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

export async function registerUser(firstName: string, lastName: string, email: string, password: string, userType: string) {
  try {
    const response = await fetch(`${apiUrl}/user/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        user_type: userType, // Assuming the server expects a 'user_type' field
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: 'Registration successful!',
        data: data,
      };
    } else {
      return {
        success: false,
        message: data.message || 'Registration failed',
      };
    }
  } catch (error) {
    console.error('Error during registration:', error);
    return {
      success: false,
      message: 'An error occurred during registration',
    };
  }
}
