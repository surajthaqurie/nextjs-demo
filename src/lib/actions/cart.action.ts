'use server';

import { cookies } from 'next/headers';
import { ICartItem } from '../types';
import { formatError } from '../utils';
import { CART_SAMPLE_DATA } from '@/db/seeds/cart.seed';
import { userUUID } from '../constants';
import { cartItemSchema } from '../definitions';
import { PRODUCT_SAMPLE_DATA } from '@/db/seeds';

export async function addItemCart(data: ICartItem) {
  // check cart cookie
  const cookieStore = await cookies();
  const sessionCartId = cookieStore.get('sessionCartId')?.value;
  const userId = cookieStore.get('accessToken') ? userUUID : undefined;

  const cart = await getMyCart();
  const item = cartItemSchema.parse(data);

  const product = PRODUCT_SAMPLE_DATA.find(product => product.id === item.productId);

  console.log({
    'Session Cart Id': sessionCartId,
    userId,
    item,
    product,
  });

  try {
    return {
      success: true,
      message: 'Item added to the cart',
    };
  } catch (error) {
    return {
      success: true,
      message: formatError('Item added to the cart'),
    };
  }
}

export async function getMyCart() {
  // check cart cookie
  const cookieStore = await cookies();
  const sessionCartId = cookieStore.get('sessionCartId')?.value;
  const userId = cookieStore.get('accessToken') ? userUUID : undefined;

  const userCart = CART_SAMPLE_DATA.find(cart => (userId ? cart.userId === userId : cart.sessionCartId === sessionCartId));
  if (!userCart) return undefined;
  return {
    ...userCart,
    items: userCart.items,
    itemPrice: userCart.itemsPrice.toString(),
    totalPrice: userCart.totalPrice.toString(),
    shippingPrice: userCart.shippingPrice.toString(),
    taxPrice: userCart.taxPrice.toString(),
  };
}
