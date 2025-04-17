import { FormState, SignupFormSchema } from '@/lib/definitions'; // Your form validation schema
import axios from 'axios';
import { SERVER_URL } from '../constants';

interface AuthResponse {
  status: number;
  data?: { id: string; accessToken: string; refreshToken: string };
  success: boolean;
  message: string;
}

export async function login(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // If validation fails, return the errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Extract validated data
  const { email, password } = validatedFields.data;

  try {
    // Make API request to login
    const { data: authData } = await axios.post<AuthResponse>(`${SERVER_URL}/auth/admin/login`, {
      email,
      password,
    });

    // Handle successful login
    if (authData?.success && authData.data) {
      // Store tokens in localStorage or cookies (if needed)
      localStorage.setItem('accessToken', authData.data.accessToken);
      localStorage.setItem('refreshToken', authData.data.refreshToken);

      // Redirect to the home page on successful login
      return { success: authData.success, message: authData.message };
    }
  } catch (error: any) {
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

    console.log('🚀 ~ logout ~ logoutData:', logoutData);

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
