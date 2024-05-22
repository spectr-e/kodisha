import { logoBlue } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='py-4 mt-auto bg-gray-200'>
      <div className='container flex flex-col items-center justify-between px-4 mx-auto md:flex-row'>
        <div className='mb-4 md:mb-0'>
          <Image src={logoBlue} alt='Logo' className='w-auto h-8' />
        </div>
        <div className='flex flex-wrap justify-center mb-4 md:justify-start md:mb-0'>
          <ul className='flex space-x-4'>
            <li>
              <Link href='/properties'>Properties</Link>
            </li>
            <li>
              <Link href='/terms'>Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='mt-2 text-sm text-gray-500 md:mt-0'>
            &copy; 2024 Kodisha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
