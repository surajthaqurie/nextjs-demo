import { SERVER_URL } from '@/lib/constants';
import { AuthResponse } from '@/lib/types';
import axios from 'axios';
import { cookies } from 'next/headers';

export const loginUser = async (email: string, password: string) => {
  try {
    const { data: authData } = await axios.post<AuthResponse>(`${SERVER_URL}/auth/admin/login`, {
      email,
      password,
    });

    // Handle successful login
    if (authData?.success && authData.data) {
      const cookieStore = await cookies();
      cookieStore.set('accessToken', authData.data.accessToken, { httpOnly: true, sameSite: 'strict', path: '/' }); // maxAge
      cookieStore.set('refreshToken', authData.data.refreshToken, { httpOnly: true, sameSite: 'strict', path: '/' }); // maxAge:

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
