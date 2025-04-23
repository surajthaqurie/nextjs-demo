import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import ProductPrice from './product-price';
import { IProductSampleData } from '@/db/interfaces';

const ProductCard = ({ product }: { product: IProductSampleData }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="items-center p-0">
        <Link href={`product/${product.slug}`}>
          <div className="h-60">
            <Image className="object-cover" src={product.images[0]} alt={product.name} width={300} height={300} priority={true} />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="grid gap-4 p-4">
        <div className="mb-2 text-xs">{product.brand}</div>
        <Link href={`product/${product.slug}`}>
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>

        {/* Product Color */}
        <div className="item-center flex gap-2">
          <strong className="text-md">Color:</strong>
          <div className="flex gap-1">
            {product.colors?.map((color, index) => <div key={index} className="h-5 w-5 rounded-full border" style={{ backgroundColor: color }} title={color} />)}
          </div>
        </div>

        {/* Product Size */}
        <div className="item-center flex gap-2">
          <strong className="text-md">Size:</strong>
          <div className="flex gap-1">
            {product.sizes?.map((size, index) => (
              <div key={index} className="rounded-md border px-2 py-1 text-sm font-medium">
                {size}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <p>{product.rating} Stars</p>
          {product.stock > 0 ? <ProductPrice value={Number(product.price)} /> : <p className="text-destructive">Out of stock!</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
