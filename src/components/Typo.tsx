import { cn } from '@/lib/utils'
import { cva, type VariantProps } from "class-variance-authority"

const typoVariant = cva(
  'text-left',
  {
    variants: {
      variant: {
        'heading-1': ['text-[60px]', 'font-[500]', 'leading-[1.2]'],
        'heading-2': ['text-[48px]', 'font-[600]', 'leading-[1.4]'],
        'heading-3': ['text-[36px]', 'font-[600]', 'leading-[1.4]'],
        'heading-4': ['text-[30px]', 'font-[600]', 'leading-[1.4]'],
        'heading-5': ['text-[24px]', 'font-[600]', 'leading-[1.5]'],
        'heading-6': ['text-[20px]', 'font-[600]', 'leading-[1.6]'],
        'body-large-normal': ['text-[18px]', 'font-[400]', 'leading-[1.6]', 'font-inter-tight'],
        'body-large-medium': ['text-[18px]', 'font-[500]', 'leading-[1.6]', 'font-inter-tight'],
        'body-large-semibold': ['text-[18px]', 'font-[600]', 'leading-[1.6]', 'font-inter-tight'],
        'body-default-normal': ['text-[16px]', 'font-[400]', 'leading-[1.8]', 'font-inter-tight'],
        'body-default-medium': ['text-[16px]', 'font-[500]', 'leading-[1.8]', 'font-inter-tight'],
        'body-default-semibold': ['text-[16px]', 'font-[600]', 'leading-[1.8]', 'font-inter-tight'],
        'body-small-normal': ['text-[14px]', 'font-[400]', 'leading-[1.8]', 'font-inter-tight'],
        'body-small-medium': ['text-[14px]', 'font-[500]', 'leading-[1.8]', 'font-inter-tight'],
        'body-small-semibold': ['text-[14px]', 'font-[600]', 'leading-[1.8]', 'font-inter-tight'],
        'body-xsmall-normal': ['text-[12px]', 'font-[400]', 'leading-[1.2]', 'font-inter-tight'],
        'body-xsmall-medium': ['text-[12px]', 'font-[500]', 'leading-[1.2]', 'font-inter-tight'],
        'body-xsmall-semibold': ['text-[12px]', 'font-[600]', 'leading-[1.2]', 'font-inter-tight'],
      }
    },
    defaultVariants: {
      variant: 'body-default-medium'
    }
  }
);

export default function Typography({
  variant,
  text,
  className,
  ...props
}: VariantProps<typeof typoVariant> & {
  text: string;
  className?: string;
}) {
  return (
    <span className={cn(typoVariant({ variant }), className)} {...props}>
      {text}
    </span>
  )
}
