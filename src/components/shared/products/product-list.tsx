import { IProductSampleData } from '@/db/interfaces';
import ProductCard from './product-card';

const ProductList = ({ data, title, limit }: { data: IProductSampleData[]; title?: string; limit?: number }) => {
  // If limit is 0, return an empty array, otherwise slice the data based on the limit
  const limitData = limit === 0 ? [] : data.slice(0, limit || data.length);

  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>

      {limitData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {limitData.map(product => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>Product(s) not found!</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
