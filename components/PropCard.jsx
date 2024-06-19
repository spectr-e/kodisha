import Image from 'next/image'
import Link from 'next/link'
import {
  FaBath,
  FaBed,
  FaMapMarker,
  FaMoneyBill,
  FaRulerCombined,
} from 'react-icons/fa'

const PropCard = ({ property }) => {
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
    <div className='relative shadow-md rounded-xl'>
      <Image
        src={property.images[0]}
        alt=''
        width={0}
        height={0}
        sizes='100vw'
        priority={true}
        className='w-full h-auto rounded-t-xl'
      />
      <div className='p-4'>
        <div className='mb-6 text-left md:text-center lg:text-left'>
          <div className='text-gray-600'>{property.type}</div>
          <h3 className='text-xl font-bold'>{property.name}</h3>
        </div>
        <h3 className='absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
          {getRate()}
        </h3>

        <div className='flex justify-center gap-4 mb-4 text-gray-500'>
          <p className='flex items-center gap-2'>
            <FaBed /> {property.beds}{' '}
            <span className='md:hidden lg:inline'>beds</span>
          </p>
          <p className='flex items-center gap-2'>
            <FaBath /> {property.baths}{' '}
            <span className='md:hidden lg:inline'>baths</span>
          </p>
          <p className='flex items-center gap-2'>
            <FaRulerCombined />
            {property.sq} <span className='md:hidden lg:inline'>sq</span>
          </p>
        </div>

        <div className='flex justify-center gap-4 mb-4 text-sm text-green-900'>
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

        <div className='mb-5 border border-gray-100'></div>

        <div className='flex flex-col justify-between mb-4 lg:flex-row'>
          <div className='flex gap-2 mb-4 align-middle lg:mb-0'>
            <FaMapMarker className='text-lg text-orange-700' />
            <span className='text-orange-700'>
              {' '}
              {property.location.city} {property.location.state}{' '}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className='h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PropCard
