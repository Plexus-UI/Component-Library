import { cva, VariantProps } from 'class-variance-authority' ; 
import { cn } from '@/lib/utils';
import * as React from 'react' ; 


const typoVariant = cva(
  "font-(family-name: Plus Jakarta Sans",
  {
    variants: {
      variant : {
        h1 : "text-60",
        h2 : "text-48",
        h3 : "text-36",
        h4 : "text-30",
        h5 : "text-24",
        h6 : "text-20",
      }
    },
    defaultVariants : {
      variant: "h1"
    }
  }
)
interface TypoProps extends VariantProps<typeof typoVariant> {
  children: React.ReactNode;
  className?: string;
}

export default function Typo({ variant, color, children, className }: TypoProps) {
  return (
    <p className={typoVariant({ variant, color, className })}>
      {children}
    </p>
  );
}
