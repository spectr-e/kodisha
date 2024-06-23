'use client'

import { PropCard, Spinner } from '@/components'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa'

const SearchResultsPage = () => {
  const searchParams = useSearchParams()
  const [props, setProps] = useState([])
  const [loading, setLoading] = useState(true)

  const location = searchParams.get('location')
  const propType = searchParams.get('propType')

  useEffect(() => {
    const fetchSearchProps = async () => {
      try {
        const response = await fetch(
          `/api/properties/search?location=${location}&propType=${propType}`,
          {
            next: { revalidate: 60 },
          }
        )
        if (response.ok) {
          const data = await response.json()
          setProps(data)
        } else {
          console.log(response.statusText)
        }
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchSearchProps()
  }, [location, propType])

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <section className='px-4 py-6'>
      <div className='px-4 py-6 m-auto container-xl lg:container'>
        <Link
          href='/properties'
          className='flex items-center mb-3 text-blue-500 hover:underline'
        >
          <FaArrowAltCircleLeft className='mb-1 mr-2' />
          Back to Properties
        </Link>
        <h1 className='mb-4 text-2xl'>Search Results</h1>
        {!props ? (
          <p>No Results Found</p>
        ) : (
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {props.map((prop, i) => (
              <PropCard property={prop} key={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default SearchResultsPage
