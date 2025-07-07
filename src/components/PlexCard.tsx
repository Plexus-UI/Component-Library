import * as React from 'react'
import { ChevronRight } from 'lucide-react'  
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Button } from "@/components/ui/button"
import Typo from './Typo' ; 

import{
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"


const cardVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "w-full max-w-sm gap-4 py-0 pb-6 bg-transparent border-none",
        boxed: "w-full max-w-sm py-4 border border-solid border-[--stroke]",
        large: "w-3xl max-w-sm py-4 border border-solid border-[--stroke]"
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const contentVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "px-0",
        boxed: "px-4 rounded-lg" 
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type PlexCardProps = VariantProps<typeof cardVariants> & {
  className?: string
  variant?: string  
  icon?: string
  img? : string
  content? : React.RefObject<'div'>
}

export default function PlexCard({
  variant,
  icon,
  content,
  img, 
  className,
}: PlexCardProps ) {

  const renderIcon = () => {
    return  <ChevronRight size={48} /> ; 
  }

  const renderImage = () => {
      return <img src={img} alt='image' className='w-full h-auto'/>
  }

  return (
    <Card className={cn(cardVariants({variant}))}>
      <CardContent className={cn(contentVariants({variant}))}>
        { img && renderImage() }
      </CardContent>
      <CardHeader>
        <Typo
          variant='heading-6'
          text='Advanced Communication'
        />
        <CardDescription className='text-left'>
          Every component in pixkit is meticulously 
          crafted for user interaction.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex-col gap-2 items-start">
        <Button variant="link" className="w-fit has-[>svg]:px-0 pl-0 pr-3 gap-1 hover:no-underline hover:cursor-pointer">
        <Typo
          variant='body-small-semibold'
          text='Hover'
        />
          { icon && renderIcon()}
        </Button>
      </CardFooter>
    </Card>
  )
}
