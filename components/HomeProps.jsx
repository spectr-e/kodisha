import { properties } from '@/assets/data'
import { PropCard } from '.'
import Link from 'next/link'

const HomeProps = () => {
  const recentProps = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3)

  return (
    <>
      <section className='px-4 py-6'>
        <div className='m-auto container-xl lg:container'>
          <h2 className='mb-6 text-3xl font-bold text-center text-blue-500'>
            Recent Properties
          </h2>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {recentProps === 0 ? (
              <p>No Properties Found</p>
            ) : (
              recentProps.map((prop, i) => (
                <PropCard key={prop._id} property={prop} />
              ))
            )}
          </div>
        </div>
      </section>

      <section className='max-w-lg px-6 m-auto my-10'>
        <Link
          href='/properties'
          className='block px-6 py-4 text-center text-white bg-black rounded-xl hover:bg-gray-700'
        >
          View All Properties
        </Link>
      </section>
    </>
  )
}

export default HomeProps
