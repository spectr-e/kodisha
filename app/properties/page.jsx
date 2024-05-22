import { properties } from '@/assets/data'

const PropertiesPage = () => {
  return (
    <section className='px-4 py-6'>
      <div className='px-4 py-6 m-auto container-xl lg:container'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {properties.map((prop, i) => (
            <div key={i}>{prop.name}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PropertiesPage
