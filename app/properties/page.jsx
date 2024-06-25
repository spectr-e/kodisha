import { Properties, SearchForm } from '@/components'

const PropertiesPage = async () => {
  return (
    <>
      <section className='py-4 bg-blue-700'>
        <div className='flex flex-col items-start px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <SearchForm />
        </div>
      </section>
      <Properties />
    </>
  )
}

export default PropertiesPage
