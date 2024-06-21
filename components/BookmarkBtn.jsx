import { FaBookmark } from 'react-icons/fa'

const BookmarkBtn = ({ property }) => {
  return (
    <button className='flex items-center justify-center w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600'>
      <FaBookmark className='mr-2' /> Bookmark Property
    </button>
  )
}

export default BookmarkBtn
