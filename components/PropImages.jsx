'use client'
import Image from 'next/image'
import { Gallery, Item } from 'react-photoswipe-gallery'

const PropImages = ({ images }) => {
  return (
    <Gallery>
      <section className='p-4 bg-blue-50'>
        <div className='container mx-auto'>
          {images !== undefined && images.length === 1 ? (
            <Item
              original={images[0]}
              thumbnail={images[0]}
              width='1024'
              height='768'
            >
              {({ ref, open }) => (
                <Image
                  src={images[0]}
                  alt=''
                  className='object-cover mx-auto rounded-xl'
                  width={1800}
                  height={400}
                  priority={true}
                  ref={ref}
                  onClick={open}
                />
              )}
            </Item>
          ) : (
            <div className='grid grid-cols-2 gap-4'>
              {images !== undefined &&
                images.map((image, i) => (
                  <div
                    className={`
              ${images.length === 3 && i === 2 ? 'col-span-2' : 'col-span-1'}
              `}
                    key={i}
                  >
                    <Item
                      original={image}
                      thumbnail={image}
                      width='1024'
                      height='768'
                    >
                      {({ ref, open }) => (
                        <Image
                          src={image}
                          alt=''
                          className='object-cover mx-auto rounded-xl'
                          width={1800}
                          height={400}
                          priority={true}
                          ref={ref}
                          onClick={open}
                        />
                      )}
                    </Item>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>
    </Gallery>
  )
}

export default PropImages
