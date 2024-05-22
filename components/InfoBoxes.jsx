const InfoBoxes = () => {
  return (
    <section>
      <div className='m-auto container-xl lg:container'>
        <div className='grid grid-cols-1 gap-4 p-4 rounded-lg md:grid-cols-2'>
          <div className='p-6 bg-gray-100 rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold'>For Renters</h2>
            <p className='mt-2 mb-4'>
              Find your dream rental property. Bookmark properties and contact
              owners.
            </p>
            <a
              href='/properties.html'
              className='inline-block px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-700'
            >
              Browse Properties
            </a>
          </div>
          <div className='p-6 bg-blue-100 rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold'>For Property Owners</h2>
            <p className='mt-2 mb-4'>
              List your properties and reach potential tenants. Rent as an
              airbnb or long term.
            </p>
            <a
              href='/add-property.html'
              className='inline-block px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600'
            >
              Add Property
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoBoxes
