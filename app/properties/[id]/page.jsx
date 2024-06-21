'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { fetchProp } from '@/utils/requests'
import {
  PropDetails,
  PropHeadImg,
  Spinner,
  PropImages,
  BookmarkBtn,
  ShareBtn,
  PropContactForm,
} from '@/components'
import Link from 'next/link'
import { FaArrowLeft, FaPaperPlane, FaShare } from 'react-icons/fa'

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
      <h1 className='mt-10 text-2xl font-bold text-center'>
        Property not found
      </h1>
    )
  }

  return (
    <>
      {loading && <Spinner loading={loading} />}
      {!loading && property && (
        <>
          {/* <!-- Property Header Image --> */}
          <PropHeadImg img={property.images[0]} />

          {/* <!-- Go Back --> */}
          <section>
            <div className='container px-6 py-6 m-auto'>
              <Link
                href='/properties'
                className='flex items-center text-blue-500 hover:text-blue-600'
              >
                <FaArrowLeft className='mr-2' /> Back to Properties
              </Link>
            </div>
          </section>

          {/* <!-- Property Info --> */}
          <section className='bg-blue-50'>
            <div className='container px-6 py-10 m-auto'>
              <div className='grid w-full grid-cols-1 gap-6 md:grid-cols-70/30'>
                {/* <!-- Property Details --> */}
                <PropDetails property={property} />
                {/* <!-- Sidebar --> */}
                <aside className='space-y-4'>
                  <BookmarkBtn property={property} />
                  <ShareBtn property={property} />

                  {/* <!-- Contact Form --> */}
                  <PropContactForm property={property} />
                </aside>
              </div>
            </div>
          </section>
          <PropImages images={property.images} />
        </>
      )}
    </>
  )
}

export default PropertyPage
