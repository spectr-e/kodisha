'use client'
import { fetchProps } from '@/utils/requests'
import { useEffect, useState } from 'react'
import { PropCard, Spinner } from '.'

const Properties = async () => {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const props = await fetchProps()
        setProperties(props.properties)
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // sort props by date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <section className='px-4 py-6'>
      <div className='px-4 py-6 m-auto container-xl lg:container'>
        {!properties ? (
          <p>No Properties Found</p>
        ) : (
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {properties.map((prop, i) => (
              <PropCard property={prop} key={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Properties
