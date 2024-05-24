import { PropCard } from '@/components'
import { fetchProps } from '@/utils/requests'

const PropertiesPage = async () => {
  const properties = await fetchProps()
  // sort props by date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  return (
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

export default PropertiesPage
