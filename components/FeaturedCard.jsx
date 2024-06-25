import Image from 'next/image'
import Link from 'next/link'
import { FaBath, FaBed, FaMoneyBill, FaRulerCombined } from 'react-icons/fa'

const FeaturedCard = ({ property }) => {
  const getRate = () => {
    const { rates } = property
    if (rates.monthly) {
      return `KES ${rates.monthly.toLocaleString()}/mo`
    } else if (rates.weekly) {
      return `KES ${rates.weekly.toLocaleString()}/wk`
    } else if (rates.nightly) {
      return `KES ${rates.nightly.toLocaleString()}/night`
    }
  }
  return (
    <div className='bg-white rounded-xl shadow-md relative flex flex-col md:flex-row'>
      <Image
        priority={true}
        sizes='100vh'
        width={0}
        height={0}
        src={property.images[0]}
        alt=''
        className='object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl w-full md:w-2/5'
      />
      <div className='p-6'>
        <h3 className='text-xl font-bold'>{property.name}</h3>
        <div className='text-gray-600 mb-4'>Condo</div>
        <h3 className='absolute top-[10px] left-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
          {getRate()}
        </h3>
        <div className='flex justify-center gap-4 text-gray-500 mb-4'>
          <p className='flex items-center gap-1'>
            <FaBed /> {property.beds}
            <span className='md:hidden lg:inline'> Beds</span>
          </p>
          <p className='flex items-center gap-1'>
            <FaBath /> {property.baths}
            <span className='md:hidden lg:inline'> Baths</span>
          </p>
          <p className='flex items-center gap-1'>
            <FaRulerCombined />
            {property.sq} <span className='md:hidden lg:inline'> sq</span>
          </p>
        </div>

        <div className='flex justify-center gap-4 text-green-900 text-sm mb-4'>
          {property.rates.nightly && (
            <p>
              <FaMoneyBill className='inline mr-2' /> Nightly
            </p>
          )}
          {property.rates.weekly && (
            <p>
              <FaMoneyBill className='inline mr-2' /> Weekly
            </p>
          )}
          {property.rates.monthly && (
            <p>
              <FaMoneyBill className='inline mr-2' /> Monthly
            </p>
          )}
        </div>

        <div className='border border-gray-200 mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='flex align-middle gap-2 mb-4 lg:mb-0'>
            <i className='fa-solid fa-location-dot text-lg text-orange-700'></i>
            <span className='text-orange-700'>
              {' '}
              {property.location.city} {property.location.state}{' '}
            </span>
          </div>
          <Link
            href={`/properties/${property._id.toString()}`}
            className='h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCard
