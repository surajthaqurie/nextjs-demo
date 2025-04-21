import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z
    .string() /* .email({ message: 'Please enter a valid email.' }) */
    .trim(),
  password: z
    .string()
    /* .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    }) */
    .trim(),
});

export const signUpFormSchema = z
  .object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    email: z.string().trim().email('Invalid email address'),
    password: z.string().trim().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().trim().min(6, 'Confirm password must be at least 6 characters'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ['confirmPassword'],
  });
