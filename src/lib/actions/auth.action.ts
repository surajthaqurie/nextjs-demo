import { SignupFormSchema, FormState } from '@/lib/definitions';
import { api } from '@/lib/api'; // Use the global Axios instance
import { redirect } from 'next/navigation';
import axios from 'axios';
import { SERVER_URL } from '../constants';

// Define TypeScript interface for API responses
interface AuthResponse {
  token: string;
}

export async function login(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    // Use global Axios instance (`api`)
    const response = await axios.post<AuthResponse>(SERVER_URL + 'auth/admin/login', {
      email,
      password,
    });

    console.log(response.data);

    // Redirect user after successful login
    redirect('/');
  } catch (error: any) {
    if (error.response) {
      return {
        message: error.response.data.message || 'Login failed. Please try again.',
        status: error.response.status,
      };
    } else if (error.request) {
      return { message: 'No response from server. Please check your connection.', status: 500 };
    } else {
      return { message: 'An unexpected error occurred.', status: 500 };
    }
  }
}
