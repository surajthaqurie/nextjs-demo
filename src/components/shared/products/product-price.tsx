import { cn } from '@/lib/utils';

const ProductPrice = ({ value, className }: { value: number; className?: string }) => {
  const stringValue = value.toFixed(2);
  const [inValue, floatValue] = stringValue.split('.');
  return (
    <p className={cn('text-2xl', className)}>
      <span className="align-super text-xs">$</span>
      {inValue}
      <span className="align-super text-xs">.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
