import Image from 'next/image'

const PropImages = ({ images }) => {
  return (
    <section className='p-4 bg-blue-50'>
      <div className='container mx-auto'>
        {images !== undefined && images.length === 1 ? (
          <Image
            src={images[0]}
            alt=''
            className='object-cover mx-auto rounded-xl'
            width={1800}
            height={400}
            priority={true}
          />
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
                  <Image
                    src={image}
                    alt=''
                    className='object-cover mx-auto rounded-xl'
                    width={1800}
                    height={400}
                    priority={true}
                  />
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default PropImages
