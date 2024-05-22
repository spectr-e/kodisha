import { properties } from '@/assets/data'
import { PropCard } from '@/components'

const PropertiesPage = () => {
  return (
    <section className='px-4 py-6'>
      <div className='px-4 py-6 m-auto container-xl lg:container'>
        {properties.length === 0 ? (
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
