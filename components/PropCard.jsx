import Image from 'next/image'
import Link from 'next/link'
import {
  FaBath,
  FaBed,
  FaLocationArrow,
  FaMoneyBill,
  FaRulerCombined,
} from 'react-icons/fa'

const PropCard = ({ property }) => {
  return (
    <div className='relative shadow-md rounded-xl'>
      <Image
        src={`/images/properties/${property.images[0]}`}
        alt=''
        width={0}
        height={0}
        sizes='100vw'
        className='w-full h-auto rounded-t-xl'
      />
      <div className='p-4'>
        <div className='mb-6 text-left md:text-center lg:text-left'>
          <div className='text-gray-600'>{property.type}</div>
          <h3 className='text-xl font-bold'>{property.name}</h3>
        </div>
        <h3 className='absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
          KES {property.rates.monthly}/mo
        </h3>

        <div className='flex justify-center gap-4 mb-4 text-gray-500'>
          <p>
            <FaBed /> 3 <span className='md:hidden lg:inline'>beds</span>
          </p>
          <p>
            <FaBath /> 2 <span className='md:hidden lg:inline'>baths</span>
          </p>
          <p>
            <FaRulerCombined />
            1,500 <span className='md:hidden lg:inline'>sq</span>
          </p>
        </div>

        <div className='flex justify-center gap-4 mb-4 text-sm text-green-900'>
          <p>
            <FaMoneyBill /> Weekly
          </p>
          <p>
            <FaMoneyBill /> Monthly
          </p>
        </div>

        <div className='mb-5 border border-gray-100'></div>

        <div className='flex flex-col justify-between mb-4 lg:flex-row'>
          <div className='flex gap-2 mb-4 align-middle lg:mb-0'>
            <FaLocationArrow className='text-lg text-orange-700' />
            <span className='text-orange-700'> Boston MA </span>
          </div>
          <Link
            href='/property'
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
