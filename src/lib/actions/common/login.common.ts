import { SERVER_URL } from '@/lib/constants';
import { AuthResponse } from '@/lib/types';
import axios from 'axios';

export const loginUser = async (email: string, password: string) => {
  try {
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
    } else {
      return {
        message: 'Something want wrong, please try again',
        status: 500,
        success: false,
      };
    }
  } catch (error) {
    throw error;
  }
};
