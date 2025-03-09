'use server';

import { ISampleProduct, sampleProductData } from '@/db/sample-data';
export async function getLatestProducts(): Promise<ISampleProduct[]> {
  const LATEST_PRODUCT_LIMIT = 4;

  const data = await new Promise<ISampleProduct[]>(resolve => {
    resolve(sampleProductData.slice(0, LATEST_PRODUCT_LIMIT));
  });

  return data;
}

export async function getProductBySlug(slug: string) {
  const product = new Promise<ISampleProduct | undefined>(resolve => {
    resolve(sampleProductData.find(product => product.slug == slug));
  });

  return product;
}
