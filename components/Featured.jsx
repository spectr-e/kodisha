'use client'
import { useState, useEffect } from 'react'
import { FeaturedCard } from '.'

const Featured = () => {
  const [featuredProps, setFeaturedProps] = useState([])

  useEffect(() => {
    const fetchProps = async () => {
      try {
        const response = await fetch(`/api/properties/featured`, {
          cache: 'no-store',
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
      <section className='bg-blue-50 px-4 pt-6 pb-10'>
        <div className='container-xl lg:container m-auto'>
          <h2 className='text-3xl font-bold text-blue-500 mb-6 text-center'>
            Featured Properties
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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
