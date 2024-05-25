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
      <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
        <div className='text-gray-500 mb-4'>{property.type}</div>
        <h1 className='text-3xl font-bold mb-4'>{property.name}</h1>
        <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
          <FaMapMarker className='text-lg text-orange-700 mr-2' />
          <p className='text-orange-700'>
            {property.location.street}, {property.location.city},{' '}
            {property.location.state}
          </p>
        </div>

        {/* <!-- Rates & Options --> */}
        <h3 className='text-lg font-bold my-6 bg-gray-800 text-white p-2'>
          Rates & Options
        </h3>
        <div className='flex flex-col md:flex-row justify-around'>
          {/* <!-- Nightly --> */}
          <div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
            <div className='text-gray-500 mr-2 font-bold'>Nightly</div>
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
          <div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
            <div className='text-gray-500 mr-2 font-bold'>Weekly</div>
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
          <div className='flex items-center justify-center mb-4 pb-4 md:pb-0'>
            <div className='text-gray-500 mr-2 font-bold'>Monthly</div>
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

      {/* <!-- Description & Details --> */}
      <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
        <h3 className='text-lg font-bold mb-6'>Description & Details</h3>
        <div className='flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9'>
          <p>
            <FaBed /> 3<span className='hidden sm:inline'>Beds</span>
          </p>
          <p>
            <FaBath /> 2<span className='hidden sm:inline'>Baths</span>
          </p>
          <p>
            <FaRulerCombined />
            1,500 <span className='hidden sm:inline'>sqft</span>
          </p>
        </div>
        <p className='text-gray-500 mb-4'>
          This is a beautiful apartment located near the commons
        </p>
        <p className='text-gray-500 mb-4'>
          We have a beautiful apartment located near the commons. It is a 2
          bedroom apartment with a full kitchen and bathroom. It is available
          for weekly or monthly rentals.
        </p>
      </div>

      {/* <!-- Amenities --> */}
      <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
        <h3 className='text-lg font-bold mb-6'>Amenities</h3>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none'>
          <li>
            <FaCheck className='text-green-600 mr-2 mt-3' /> Wifi
          </li>
          <li>
            <FaCheck className='text-green-600 mr-2 mt-3' /> Full kitchen
          </li>
          <li>
            <FaCheck className='text-green-600 mr-2 mt-3' /> Washer & Dryer
          </li>
          <li>
            <FaCheck className='text-green-600 mr-2 mt-3' />
            Free Parking
          </li>
          <li>
            <FaCheck className='text-green-600 mr-2 mt-3' />
            Hot Tub
          </li>
          <li>
            <FaCheck className='text-green-600 mr-2 mt-3' />
            24/7 Security
          </li>
          <li>
            <FaCheck className='text-green-600 mr-2 mt-3' />
            Wheelchair Accessible
          </li>
          <li>
            <FaCheck className='text-green-600 mr-2 mt-3' />
            Elevator Access
          </li>
          <li>
            <FaCheck className='text-green-600 mr-2 mt-3' />
            Dishwasher
          </li>
          <li>
            <FaCheck className='text-green-600 mr-2 mt-3' />
            Gym/Fitness Center
          </li>
          <li>
            <FaCheck className='text-green-600 mr-2 mt-3' />
            Air Conditioning
          </li>
          <li>
            <FaCheck className='text-green-600 mr-2 mt-3' />
            Balcony/Patio
          </li>
          <li>
            <FaCheck className='text-green-600 mr-2 mt-3' />
            Smart TV
          </li>
          <li>
            <FaCheck className='text-green-600 mr-2 mt-3' />
            Coffee Maker
          </li>
        </ul>
      </div>

      {/* <!-- Mapbox --> */}
      <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
        <div id='map'></div>
      </div>
    </main>
  )
}

export default PropDetails
