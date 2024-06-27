'use client'
import { useState, useEffect } from 'react'
import { FeaturedCard } from '.'

const Featured = () => {
  const [featuredProps, setFeaturedProps] = useState([])

  useEffect(() => {
    const fetchProps = async () => {
      try {
        const response = await fetch(`/api/properties/featured`, {
          next: { revalidate: 60 },

          // Revalidate every 60 seconds
        })

        if (response.ok) {
          const data = await response.json()
          setFeaturedProps(data)
        } else {
          throw new Error('Failed to fetch data')
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchProps()
  }, [])

  return (
    featuredProps.length > 0 && (
      <section className='px-4 pt-6 pb-10 bg-blue-50'>
        <div className='m-auto container-xl lg:container'>
          <h2 className='mb-6 text-3xl font-bold text-center text-blue-500'>
            Featured Properties
          </h2>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            {featuredProps.length > 0 &&
              featuredProps.map((feature, i) => {
                return <FeaturedCard key={i} property={feature} />
              })}
          </div>
        </div>
      </section>
    )
  )
}

export default Featured
