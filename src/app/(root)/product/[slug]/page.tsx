import ProductImages from '@/components/shared/products/product-images';
import ProductPrice from '@/components/shared/products/product-price';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getProductBySlug } from '@/lib/actions/product.action';
import { notFound } from 'next/navigation';

const ProductDetailPage = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Image */}
          <div className="col-span-2">
            <ProductImages images={product.images} />
          </div>
          {/* Product details */}
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className="h3-bold">{product.name}</h1>
              <p>
                {product.rating} of {product.numReviews} Review(s)
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <ProductPrice value={Number(product.price)} className="w-24 rounded-full bg-green-100 px-5 py-2 text-green-700" />
              </div>
            </div>
            <div className="mt-10">
              <p className="font-semibold">Description</p>
              <p>{product.description}</p>
            </div>
          </div>
          {/* Price */}
          <div className="py-5">
            <Card>
              <CardContent className="p-4">
                <div className="mb-2 flex justify-between">
                  <div>
                    <ProductPrice value={Number(product.price)} />
                  </div>
                </div>

                <div className="mb-2 flex justify-between">
                  <div>Status</div>
                  {product.stock > 0 ? <Badge variant="default">In Stock</Badge> : <Badge variant="destructive">Out of Stock</Badge>}
                </div>

                {product.stock > 0 && (
                  <div className="flex-center">
                    <Button className="w-full">Add To Cart</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
