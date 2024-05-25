'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { fetchProp } from '@/utils/requests'
import { PropHeadImg } from '@/components'

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
      <h1 className='text-center text-2xl font-bold mt-10'>
        Property not found
      </h1>
    )
  }

  return (
    <>
      {!loading && property && (
        <>
          <PropHeadImg img={property.images} />
        </>
      )}
    </>
  )
}

export default PropertyPage
