import { logoBlue } from '@/assets/images'
import Image from 'next/image'

const Footer = () => {
  const currentYr = new Date().getFullYear()
  return (
    <footer className='py-4 mt-24 shadow-sm bg-gray-200/10'>
      <div className='container flex flex-col items-center justify-between px-4 mx-auto md:flex-row'>
        <div className='mb-4 md:mb-0'>
          <Image
            src={logoBlue}
            alt='Logo'
            className='w-auto h-8'
            priority={true}
          />
        </div>

        <div>
          <p className='mt-2 text-sm text-gray-500 md:mt-0'>
            &copy; {currentYr} Kodisha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
