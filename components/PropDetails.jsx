import { FaXmark } from 'react-icons/fa6'
import {
  FaBath,
  FaBed,
  FaCheck,
  FaRulerCombined,
  FaMapMarker,
} from 'react-icons/fa'

const PropDetails = ({ property }) => {
  return (
    <main>
      {/* <!-- Header --> */}
      <div className='p-6 text-center bg-white rounded-lg shadow-md md:text-left'>
        <div className='mb-4 text-gray-500'>{property.type}</div>
        <h1 className='mb-4 text-3xl font-bold'>{property.name}</h1>
        <div className='flex justify-center mb-4 text-gray-500 align-middle md:justify-start'>
          <FaMapMarker className='mr-2 text-lg text-orange-700' />
          <p className='text-orange-700'>
            {property.location.street}, {property.location.city},{' '}
            {property.location.state}
          </p>
        </div>

        {/* <!-- Rates & Options --> */}
        <h3 className='p-2 my-6 text-lg font-bold text-white bg-gray-800'>
          Rates & Options
        </h3>
        <div className='flex flex-col justify-around md:flex-row'>
          {/* <!-- Nightly --> */}
          <div className='flex items-center justify-center pb-4 mb-4 border-b border-gray-200 md:border-b-0 md:pb-0'>
            <div className='mr-2 font-bold text-gray-500'>Nightly</div>
            <div className='text-2xl font-bold'>
              {property.rates.nightly ? (
                <div className='text-2xl font-bold text-blue-500'>
                  KES {property.rates.nightly.toLocaleString()}
                </div>
              ) : (
                <FaXmark className='text-red-700' />
              )}
            </div>
          </div>
          {/* <!-- Weekly --> */}
          <div className='flex items-center justify-center pb-4 mb-4 border-b border-gray-200 md:border-b-0 md:pb-0'>
            <div className='mr-2 font-bold text-gray-500'>Weekly</div>
            <div className='text-2xl font-bold'>
              {property.rates.weekly ? (
                <div className='text-2xl font-bold text-blue-500'>
                  KES {property.rates.weekly.toLocaleString()}
                </div>
              ) : (
                <FaXmark className='text-red-700' />
              )}
            </div>
          </div>
          {/* <!-- Monthly --> */}
          <div className='flex items-center justify-center pb-4 mb-4 md:pb-0'>
            <div className='mr-2 font-bold text-gray-500'>Monthly</div>
            <div className='text-2xl font-bold'>
              {property.rates.monthly ? (
                <div className='text-2xl font-bold text-blue-500'>
                  KES {property.rates.monthly.toLocaleString()}
                </div>
              ) : (
                <FaXmark className='text-red-700' />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Description --> */}
      <div className='p-6 mt-6 bg-white rounded-lg shadow-md'>
        <h3 className='mb-6 text-lg font-bold'>Description</h3>
        <div className='flex justify-center gap-4 mb-4 text-xl text-blue-500 space-x-9'>
          <p className='flex items-center gap-2'>
            <FaBed /> {property.beds}{' '}
            <span className='hidden sm:inline'>Beds</span>
          </p>
          <p className='flex items-center gap-2'>
            <FaBath /> {property.baths}{' '}
            <span className='hidden sm:inline'>Baths</span>
          </p>
          <p className='flex items-center gap-2'>
            <FaRulerCombined />
            {property.sq} <span className='hidden sm:inline'>sq</span>
          </p>
        </div>

        <p className='mb-4 text-center text-gray-500'>{property.description}</p>
      </div>

      {/* <!-- Amenities --> */}
      <div className='p-6 mt-6 bg-white rounded-lg shadow-md'>
        <h3 className='mb-6 text-lg font-bold'>Amenities</h3>
        <ul className='grid grid-cols-1 space-y-2 list-none md:grid-cols-2 lg:grid-cols-3'>
          {property.amenities.map((amenity, i) => (
            <li key={i}>
              <FaCheck className='inline-block mr-2 text-green-600' /> {amenity}
            </li>
          ))}
        </ul>
      </div>

      {/* <!-- Mapbox --> */}
      <div className='p-6 mt-6 bg-white rounded-lg shadow-md'>
        <div id='map'></div>
      </div>
    </main>
  )
}

export default PropDetails
