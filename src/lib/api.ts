import axios, { AxiosError } from 'axios';
import { SERVER_URL } from './constants';

// Define API error type
export interface APIError {
  message: string;
  status: number;
}

// Create an Axios instance
export const api = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true, // Ensures cookies are sent
  headers: {
    'Content-Type': 'application/json',
  },
});

// Global Error Handling Interceptor
api.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    let errorMessage = 'An unexpected error occurred.';
    let status = error.response?.status || 500;

    if (axios.isAxiosError(error) && error.response?.data) {
      errorMessage = (error.response.data as { message?: string }).message || errorMessage;
    }

    return Promise.reject<APIError>({ message: errorMessage, status });
  },
);
