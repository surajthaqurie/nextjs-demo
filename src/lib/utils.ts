import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function formatError(error: any): string {
  if (error.name == 'ZodError') {
    // Handle Zod validation errors
    const fieldErrors = error.errors.map((err: any) => err.message);
    return fieldErrors.join('. ');
  } else if (error.isAxiosError) {
    // handle Axios http request errors
    return `HTTP Request Failed: ${error.response?.data?.message || error.message}`;
  } else if (error instanceof Error) {
    // Handle generic Javascript/Typescript errors
    return error.message;
  } else {
    // handle unknown errors
    return typeof error.message === 'string' ? error.message : JSON.stringify(error);
  }
}

export function handleError(error: any): string {
  const formattedErrorMessage = formatError(error);
  if (process.env.NODE_ENV == 'production') {
    // Sentry.captureException(error)
  } else {
    console.error('Error is development mode:', error);
  }

  return formattedErrorMessage;
}
