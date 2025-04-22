import { loginFormSchema, signUpFormSchema } from '@/lib/definitions'; // Your form validation schema
import axios from 'axios';
import { SERVER_URL } from '../constants';
import { AuthResponse, FormState } from '../types';
import { loginUser } from './common/login.common';
import { handleError } from '../utils';

export async function login(prevState: null, formData: FormData) {
  try {
    const validatedFields = loginFormSchema.parse({ email: formData.get('email'), password: formData.get('password') });
    const { email, password } = validatedFields;

    return await loginUser(email, password);
  } catch (error: any) {
    return { message: handleError(error), success: false };
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
    return { message: handleError(error), success: false };
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
    return { message: handleError(error), success: false };
  }
}
