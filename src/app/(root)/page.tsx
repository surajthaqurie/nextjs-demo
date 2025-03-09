import { Metadata } from 'next';
import ProductList from '@/components/shared/products/product-list';
import { getLatestProducts } from '@/lib/actions/product.action';
// import { sampleProductData } from '@/db/sample-data';

export const metadata: Metadata = { title: 'Home' };

// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
export default async function Home() {
  // await delay(1000);
  const latestProduct = await getLatestProducts();

  return (
    <div>
      HomePage
      <ProductList data={latestProduct} title="Latest Arrivals" />
    </div>
  );
}
