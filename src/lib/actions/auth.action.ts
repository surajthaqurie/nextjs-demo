import { loginFormSchema, signUpFormSchema } from '@/lib/definitions'; // Your form validation schema
import axios from 'axios';
import { SERVER_URL } from '../constants';
import { AuthResponse, FormState } from '../types';
import { loginUser } from './common/login.common';

export async function login(prevState: null, formData: FormData) {
  try {
    const validatedFields = loginFormSchema.parse({ email: formData.get('email'), password: formData.get('password') });
    const { email, password } = validatedFields;

    return await loginUser(email, password);
  } catch (error: any) {
    // Handle API errors
    if (axios.isAxiosError(error)) {
      return {
        message: error.response?.data.message || 'Login failed. Please try again.',
        status: error.response?.status || 500,
        success: false,
      };
    } else {
      // Generic error (e.g., unexpected error)
      return { message: 'An unexpected error occurred.', status: 500, success: false };
    }
  }
}

export async function logout() {
  try {
    const accessToken = localStorage.getItem('accessToken');
    const { data: logoutData } = await axios.post<AuthResponse>(
      `${SERVER_URL}/auth/admin/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    return logoutData;
  } catch (error) {
    // Handle API errors
    if (axios.isAxiosError(error)) {
      // Axios-specific error (e.g., network error, 4xx/5xx response)
      return {
        message: error.response?.data.message || 'Login failed. Please try again.',
        status: error.response?.status || 500,
      };
    } else {
      // Generic error (e.g., unexpected error)
      return { message: 'An unexpected error occurred.', status: 500 };
    }
  }
}

export async function signup(prevState: null, formData: FormData) {
  try {
    const validatedFields = signUpFormSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    });

    return await loginUser('admin@admin.com', 'admin@admin.com');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios-specific error (e.g., network error, 4xx/5xx response)
      return {
        message: error.response?.data.message || 'Signup failed. Please try again.',
        status: error.response?.status || 500,
        success: false,
      };
    }

    return { message: 'User signup failed, please try again', success: false };
  }
}
