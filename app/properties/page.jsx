'use client'
import { PropCard, SearchForm } from '@/components'
import { fetchProps } from '@/utils/requests'

const PropertiesPage = async () => {
  const properties = await fetchProps()
  // sort props by date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  return (
    <>
      <section className='py-4 bg-blue-700'>
        <div className='flex flex-col items-start px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <SearchForm />
        </div>
      </section>

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
    </>
  )
}

export default PropertiesPage
