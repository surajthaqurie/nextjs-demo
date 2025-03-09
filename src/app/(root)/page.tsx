import { Metadata } from 'next';
import { sampleProductData } from '@/db/sample-data';
import ProductList from '@/components/shared/products/product-list';

export const metadata: Metadata = { title: 'Home' };
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default async function Home() {
  await delay(1000);
  return (
    <div>
      HomePage
      <ProductList data={sampleProductData} title="Latest Arrivals" limit={4} />
    </div>
  );
}
