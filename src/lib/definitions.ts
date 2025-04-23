import { z } from 'zod';
import { formatNumberWithDecimal } from './utils';

const currency = z.string().refine(value => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))));

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

export const cartItemSchema = z.object({
  productId: z.string().min(1, 'Product is required'),
  name: z.string().min(1, 'Name is required'),
  slug: z.string().min(1, 'Slug is required'),
  qty: z.number().int().nonnegative('Quantity must be a positive number'),
  image: z.string().min(1, 'Image is required'),
  price: currency,
});

export const insertCartSchema = z.object({
  items: z.array(cartItemSchema),
  itemsPrice: currency,
  totalPrice: currency,
  shippingPrice: currency,
  taxPrice: currency,
  sessionCartId: z.string().min(1, 'Session Cart Id is required'),
  userId: z.string().optional().nullable(),
});
