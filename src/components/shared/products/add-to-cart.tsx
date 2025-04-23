'use client';

import { Button } from '@/components/ui/button';
import { addItemCart } from '@/lib/actions/cart.action';
import { ICartItem } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const AddToCart = ({ item }: { item: ICartItem }) => {
  const router = useRouter();

  const handleAddToCart = async () => {
    const res = await addItemCart(item);

    if (res.success) {
      toast(`${item.name} added to the cart`, {
        // description: new Date().toString(),
        action: {
          label: 'Go to Cart',
          onClick: () => router.push('/cart'),
        },
      });
    }
  };

  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      Add To Cart
    </Button>
  );
};

export default AddToCart;
