const SearchForm = () => {
  return (
    <form className='flex flex-col items-center w-full max-w-2xl mx-auto mt-3 md:flex-row'>
      {/* <!-- Location Input --> */}
      <div className='w-full mb-4 md:w-3/5 md:pr-2 md:mb-0'>
        <label htmlFor='location' className='sr-only'>
          Location
        </label>
        <input
          type='text'
          id='location'
          placeholder='Enter Location (City, State, Zip, etc'
          className='w-full px-4 py-3 text-gray-800 bg-white rounded-lg focus:outline-none focus:ring focus:ring-blue-500'
        />
      </div>

      {/* <!-- Type Input --> */}
      <div className='w-full md:w-2/5 md:pl-2'>
        <label htmlFor='property-type' className='sr-only'>
          Property Type
        </label>
        <select
          id='property-type'
          className='w-full px-4 py-3 text-gray-800 bg-white rounded-lg focus:outline-none focus:ring focus:ring-blue-500'
        >
          <option value='All'>All</option>
          <option value='Apartment'>Apartment</option>
          <option value='Studio'>Studio</option>
          <option value='Condo'>Condo</option>
          <option value='House'>House</option>
          <option value='Cabin Or Cottage'>Cabin or Cottage</option>
          <option value='Loft'>Loft</option>
          <option value='Room'>Room</option>
          <option value='Other'>Other</option>
        </select>
      </div>
      <button
        type='submit'
        className='w-full px-6 py-3 mt-4 text-white bg-blue-500 rounded-lg md:ml-4 md:mt-0 md:w-auto hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500'
      >
        Search
      </button>
    </form>
  )
}

export default SearchForm
