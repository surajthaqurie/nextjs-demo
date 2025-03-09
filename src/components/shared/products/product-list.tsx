import { ISampleProduct } from '@/db/sample-data';
import ProductCard from './product-card';

const ProductList = ({ data, title, limit }: { data: ISampleProduct[]; title?: string; limit?: number }) => {
  // const limitData = limit ? data.slice(0, limit) : data;
  if (limit) {
    limit = 0;
  }
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>

      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map(product => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>Products(s) not found!</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
