import { z } from 'zod';
import { cartItemSchema, insertCartSchema, loginFormSchema, signUpFormSchema } from './definitions';

export interface AuthResponse {
  status: number;
  data?: { id: string; accessToken: string; refreshToken: string };
  success: boolean;
  message: string;
}

export type FormState = { errors?: Record<string, string[]>; message?: string } | undefined;

export type loginFormSchemaType = z.infer<typeof loginFormSchema>;
export type signupFormSchemaType = z.infer<typeof signUpFormSchema>;

export type ICart = z.infer<typeof insertCartSchema>;
export type ICartItem = z.infer<typeof cartItemSchema>;
