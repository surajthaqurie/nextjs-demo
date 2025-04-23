'use server';

import { loginFormSchema, signUpFormSchema } from '@/lib/definitions'; // Your form validation schema
import axios from 'axios';
import { SERVER_URL } from '../constants';
import { AuthResponse, FormState } from '../types';
import { loginUser } from './common/login.common';
import { handleError } from '../utils';
import { cookies } from 'next/headers';

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
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('accessToken')?.value;

    const { data: logoutData } = await axios.post<AuthResponse>(
      `${SERVER_URL}/auth/admin/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    cookieStore.delete('accessToken');
    cookieStore.delete('refreshToken');

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

export const getCookies = async (key: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(key)?.value;
};
