import { FaShare } from 'react-icons/fa'

const ShareBtn = ({ property }) => {
  return (
    <button className='flex items-center justify-center w-full px-4 py-2 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600'>
      <FaShare className='mr-2' /> Share Property
    </button>
  )
}

export default ShareBtn
