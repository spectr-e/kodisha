'use client'

import { profile } from '@/assets/images'
import { Spinner } from '@/components'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const ProfilePage = () => {
  const { data: session } = useSession()
  const profileImg = session?.user?.image
  const name = session?.user?.name
  const email = session?.user?.email

  const [props, setProps] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userProps = async (id) => {
      if (!id) {
        return
      }

      try {
        const resp = await fetch(`api/properties/user/${id}`, {
          next: { revalidate: 60 },
        })

        if (resp.status === 200) {
          const data = await resp.json()
          setProps(data)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    // fetch user properties when session is available
    if (session?.user?.id) {
      userProps(session.user.id)
    }
  }, [session])

  const handleDelete = (id) => {}

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

            {/* <!-- Listings Section --> */}
            <div className='md:w-3/4 md:pl-4'>
              <h2 className='mb-4 text-xl font-semibold'>Your Listings</h2>
              {!loading && props.length === 0 && (
                <p>You have no property listings</p>
              )}
              {loading ? (
                <Spinner loading={loading} />
              ) : (
                props.map((prop) => (
                  <div key={prop._id} className='mb-10'>
                    <Link href={`/properties/${prop._id}`}>
                      <Image
                        height={100}
                        width={500}
                        className='object-cover w-full h-32 rounded-md'
                        src={prop.images[0]}
                        priority={true}
                        alt='Property 1'
                      />
                    </Link>
                    <div className='mt-2'>
                      <p className='text-lg font-semibold'>{prop.name}</p>
                      <p className='text-gray-600'>
                        {prop.location.street}, {prop.location.city}
                        {prop.location.state}
                      </p>
                    </div>
                    <div className='mt-2'>
                      <Link
                        href={`/properties/${prop._id}/edit`}
                        className='px-3 py-3 mr-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
                      >
                        Edit
                      </Link>
                      <button
                        onclick={handleDelete(prop._id)}
                        className='px-3 py-2 text-white bg-red-500 rounded-md hover:bg-red-600'
                        type='button'
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage
