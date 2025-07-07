import * as React from 'react' ; 
import { cva, type VariantProps } from 'class-variance-authority' ; 
import { cn } from '@/lib/utils';
import Typo from './Typo';


const circleVariants = cva(
)

export default function Circles(
  {
    variant,
    size,
    images,
    titles,
    className,
    ...props
  } : VariantProps<typeof circleVariants> & {
    size?       :  number,
    images?     :  string[],
    titles?     :  string[], 
    className?  :  string
  }
){

  const [ hoveredCircle, setHoveredCircle ] = React.useState(-1) ; 
  const generateTransformations = (x) => {
    let center = Math.ceil(x / 2);
    let str = '';
  
    if (x & 1) {
      for (let idx = 1; idx <= x; idx++) {
        str += `
          .group img:nth-of-type(${idx}) {
            transform: translateX(0);
            transition: transform 500ms cubic-bezier(.28, 1.04, 0, .98);
          }
  
          .group:hover img:nth-of-type(${idx}) {
            transform: translateX(${( idx - center ) * 10 }px);
          }
        `;
      }
    } else {
      for (let idx = 0; idx <= x; idx++) {
        if ( idx !== 0) {
          str += `
            .group img:nth-child(${idx}) {
              transform: translateX(0);
              transition: transform 500ms cubic-bezier(.28, 1.04, 0, .98);
            }
  
            .group:hover img:nth-child(${idx}) {
              transform: translateX(${( idx - center ) * 10 }px);
            }
          `;
        }
      }
    }
    return str;
  };

  const circle = ( image , index ) => {
    return(
        <img 
          onMouseEnter={() => { setHoveredCircle(index)} }
          onMouseLeave={() => { setHoveredCircle(-1)}}
          src={image} 
          alt='' 
          className='w-32 h-32 rounded-full absolute border-4 border-white circle' 
          style={{
            left: `${index * 90}px`, 
            zIndex: index 
          }}
        />
    )
  }
  const renderCircles = () => {
    if (images?.length !== titles?.length) {
      console.warn("images and titles length mismatch");
      return null;
    }
    return (
      <div className='group'>
        {images?.map((image, index) => (
          circle(image, index ) 
        ))}
        <style jsx>{generateTransformations(images?.length)}</style>
      </div>
    )
  };


  return(
    <div className='flex flex-row margin-[-4px] ' >
      { renderCircles() } 
    </div>
  )
}



