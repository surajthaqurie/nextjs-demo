// 'use server';

import { IProductSampleData } from '@/db/interfaces';
import { PRODUCT_SAMPLE_DATA } from '@/db/seeds';

export async function getLatestProducts(): Promise<IProductSampleData[]> {
  const LATEST_PRODUCT_LIMIT = 4;

  const data = await new Promise<IProductSampleData[]>(resolve => {
    resolve(PRODUCT_SAMPLE_DATA.slice(0, LATEST_PRODUCT_LIMIT));
  });

  return data;
}

export async function getProductBySlug(slug: string) {
  const product = new Promise<IProductSampleData | undefined>(resolve => {
    resolve(PRODUCT_SAMPLE_DATA.find(product => product.slug == slug));
  });

  return product;
}
