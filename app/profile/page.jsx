'use client'

import { profile } from '@/assets/images'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const ProfilePage = () => {
  const { data: session } = useSession()
  const profileImg = session?.user?.image
  const name = session?.user?.name
  const email = session?.user?.email

  return (
    <section className='bg-blue-50'>
      <div className='container py-24 m-auto'>
        <div className='px-6 py-8 m-4 mb-4 bg-white border rounded-md shadow-md md:m-0'>
          <h1 className='mb-4 text-3xl font-bold'>Your Profile</h1>
          <div className='flex flex-col md:flex-row'>
            <div className='mx-20 mt-10 md:w-1/4'>
              <div className='mb-4'>
                <Image
                  height={200}
                  width={200}
                  className='w-32 h-32 mx-auto rounded-full md:h-48 md:w-48 md:mx-0'
                  src={profileImg || profile}
                  alt='User'
                />
              </div>
              <h2 className='mb-4 text-lg'>
                <span className='block font-bold'>Name: </span> {name}
              </h2>
              <h2 className='text-lg'>
                <span className='block font-bold'>Email: </span> {email}
              </h2>
            </div>

            <div className='md:w-3/4 md:pl-4'>
              <h2 className='mb-4 text-xl font-semibold'>Your Listings</h2>
              <div className='mb-10'>
                <Link href='/property.html'>
                  <Image
                    sizes='100vh'
                    height={0}
                    width={0}
                    className='object-cover w-full h-32 rounded-md'
                    src='/images/properties/a1.jpg'
                    alt='Property 1'
                  />
                </Link>
                <div className='mt-2'>
                  <p className='text-lg font-semibold'>Property Title 1</p>
                  <p className='text-gray-600'>Address: 123 Main St</p>
                </div>
                <div className='mt-2'>
                  <Link
                    href='/add-property.html'
                    className='px-3 py-3 mr-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
                  >
                    Edit
                  </Link>
                  <button
                    className='px-3 py-2 text-white bg-red-500 rounded-md hover:bg-red-600'
                    type='button'
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className='mb-10'>
                <Link href='/property.html'>
                  <Image
                    sizes='100vh'
                    height={0}
                    width={0}
                    className='object-cover w-full h-32 rounded-md'
                    src='/images/properties/b1.jpg'
                    alt='Property 2'
                  />
                </Link>
                <div className='mt-2'>
                  <p className='text-lg font-semibold'>Property Title 2</p>
                  <p className='text-gray-600'>Address: 456 Elm St</p>
                </div>
                <div className='mt-2'>
                  <Link
                    href='/add-property.html'
                    className='px-3 py-3 mr-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
                  >
                    Edit
                  </Link>
                  <button
                    className='px-3 py-2 text-white bg-red-500 rounded-md hover:bg-red-600'
                    type='button'
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage
