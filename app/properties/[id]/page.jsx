'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { fetchProp } from '@/utils/requests'
import { PropHeadImg } from '@/components'
import Link from 'next/link'
import {
  FaArrowLeft,
  FaBath,
  FaBed,
  FaBookmark,
  FaCheck,
  FaMapMarker,
  FaPaperPlane,
  FaRulerCombined,
  FaShare,
} from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const PropertyPage = () => {
  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        return
      }
      try {
        const property = await fetchProp(id)
        setProperty(property)
      } catch (error) {
        console.log('Error fetching property: ', error)
      } finally {
        setLoading(false)
      }
    }
    if (!property) {
      fetchData()
    }
  }, [id, property])

  if (!property && !loading) {
    return (
      <h1 classNameName='text-center text-2xl font-bold mt-10'>
        Property not found
      </h1>
    )
  }

  return (
    <>
      {!loading && property && (
        <>
          {/* <!-- Property Header Image --> */}
          <PropHeadImg img={property.images[0]} />

          {/* <!-- Go Back --> */}
          <section>
            <div className='container m-auto py-6 px-6'>
              <Link
                href='/properties'
                className='text-blue-500 hover:text-blue-600 flex items-center'
              >
                <FaArrowLeft className='mr-2' /> Back to Properties
              </Link>
            </div>
          </section>

          {/* <!-- Property Info --> */}
          <section className='bg-blue-50'>
            <div className='container m-auto py-10 px-6'>
              <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
                <main>
                  <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                    <div className='text-gray-500 mb-4'>Apartment</div>
                    <h1 className='text-3xl font-bold mb-4'>
                      Boston Commons Retreat
                    </h1>
                    <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
                      <FaMapMarker className='text-lg text-orange-700 mr-2' />
                      <p className='text-orange-700'>
                        120 Tremont Street Boston, MA 02111
                      </p>
                    </div>

                    <h3 className='text-lg font-bold my-6 bg-gray-800 text-white p-2'>
                      Rates & Options
                    </h3>
                    <div className='flex flex-col md:flex-row justify-around'>
                      <div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
                        <div className='text-gray-500 mr-2 font-bold'>
                          Nightly
                        </div>
                        <div className='text-2xl font-bold'>
                          <FaXmark className='text-red-700' />
                        </div>
                      </div>
                      <div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
                        <div className='text-gray-500 mr-2 font-bold'>
                          Weekly
                        </div>
                        <div className='text-2xl font-bold text-blue-500'>
                          $1,100
                        </div>
                      </div>
                      <div className='flex items-center justify-center mb-4 pb-4 md:pb-0'>
                        <div className='text-gray-500 mr-2 font-bold'>
                          Monthly
                        </div>
                        <div className='text-2xl font-bold text-blue-500'>
                          $4,200
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                    <h3 className='text-lg font-bold mb-6'>
                      Description & Details
                    </h3>
                    <div className='flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9'>
                      <p>
                        <FaBed /> 3
                        <span className='hidden sm:inline'>Beds</span>
                      </p>
                      <p>
                        <FaBath /> 2
                        <span className='hidden sm:inline'>Baths</span>
                      </p>
                      <p>
                        <FaRulerCombined />
                        1,500 <span className='hidden sm:inline'>sqft</span>
                      </p>
                    </div>
                    <p className='text-gray-500 mb-4'>
                      This is a beautiful apartment located near the commons
                    </p>
                    <p className='text-gray-500 mb-4'>
                      We have a beautiful apartment located near the commons. It
                      is a 2 bedroom apartment with a full kitchen and bathroom.
                      It is available for weekly or monthly rentals.
                    </p>
                  </div>

                  <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                    <h3 className='text-lg font-bold mb-6'>Amenities</h3>

                    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none'>
                      <li>
                        <FaCheck className='text-green-600 mr-2 mt-3' /> Wifi
                      </li>
                      <li>
                        <FaCheck className='text-green-600 mr-2 mt-3' /> Full
                        kitchen
                      </li>
                      <li>
                        <FaCheck className='text-green-600 mr-2 mt-3' /> Washer
                        & Dryer
                      </li>
                      <li>
                        <FaCheck className='text-green-600 mr-2 mt-3' />
                        Free Parking
                      </li>
                      <li>
                        <FaCheck className='text-green-600 mr-2 mt-3' />
                        Hot Tub
                      </li>
                      <li>
                        <FaCheck className='text-green-600 mr-2 mt-3' />
                        24/7 Security
                      </li>
                      <li>
                        <FaCheck className='text-green-600 mr-2 mt-3' />
                        Wheelchair Accessible
                      </li>
                      <li>
                        <FaCheck className='text-green-600 mr-2 mt-3' />
                        Elevator Access
                      </li>
                      <li>
                        <FaCheck className='text-green-600 mr-2 mt-3' />
                        Dishwasher
                      </li>
                      <li>
                        <FaCheck className='text-green-600 mr-2 mt-3' />
                        Gym/Fitness Center
                      </li>
                      <li>
                        <FaCheck className='text-green-600 mr-2 mt-3' />
                        Air Conditioning
                      </li>
                      <li>
                        <FaCheck className='text-green-600 mr-2 mt-3' />
                        Balcony/Patio
                      </li>
                      <li>
                        <FaCheck className='text-green-600 mr-2 mt-3' />
                        Smart TV
                      </li>
                      <li>
                        <FaCheck className='text-green-600 mr-2 mt-3' />
                        Coffee Maker
                      </li>
                    </ul>
                  </div>
                  <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                    <div id='map'></div>
                  </div>
                </main>

                {/* <!-- Sidebar --> */}
                <aside className='space-y-4'>
                  <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'>
                    <FaBookmark className='mr-2' /> Bookmark Property
                  </button>
                  <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'>
                    <FaShare className='mr-2' /> Share Property
                  </button>

                  {/* <!-- Contact Form --> */}
                  <div className='bg-white p-6 rounded-lg shadow-md'>
                    <h3 className='text-xl font-bold mb-6'>
                      Contact Property Manager
                    </h3>
                    <form>
                      <div className='mb-4'>
                        <label
                          className='block text-gray-700 text-sm font-bold mb-2'
                          htmlFor='name'
                        >
                          Name:
                        </label>
                        <input
                          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='name'
                          type='text'
                          placeholder='Enter your name'
                          required
                        />
                      </div>
                      <div className='mb-4'>
                        <label
                          className='block text-gray-700 text-sm font-bold mb-2'
                          htmlFor='email'
                        >
                          Email:
                        </label>
                        <input
                          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='email'
                          type='email'
                          placeholder='Enter your email'
                          required
                        />
                      </div>
                      <div className='mb-4'>
                        <label
                          className='block text-gray-700 text-sm font-bold mb-2'
                          htmlFor='phone'
                        >
                          Phone:
                        </label>
                        <input
                          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='phone'
                          type='text'
                          placeholder='Enter your phone number'
                        />
                      </div>
                      <div className='mb-4'>
                        <label
                          className='block text-gray-700 text-sm font-bold mb-2'
                          htmlFor='message'
                        >
                          Message:
                        </label>
                        <textarea
                          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline'
                          id='message'
                          placeholder='Enter your message'
                        ></textarea>
                      </div>
                      <div>
                        <button
                          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center'
                          type='submit'
                        >
                          <FaPaperPlane className='mr-2' /> Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default PropertyPage
