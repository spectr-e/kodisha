'use client'
import { useSession } from 'next-auth/react'
import { FaBookmark } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { Spinner } from '.'

const BookmarkBtn = ({ property }) => {
  const { data: session } = useSession()
  const userId = session?.user?.id
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleBookmark = async () => {
    setLoading(true)
    if (!userId) {
      toast.error('You need to log in to bookmark!')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/bookmarks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ propertyId: property._id }),
      })

      if (response.ok) {
        const data = await response.json()
        toast.success(data.message)
        setIsBookmarked(data.isBookmarked)
      }
    } catch (err) {
      console.log(err)
      toast.error('Something went wrong!')
    } finally {
      setLoading(false)
    }
  }

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <button
      onClick={handleBookmark}
      className={`flex items-center justify-center w-full px-4 py-2 font-bold text-white ${
        isBookmarked
          ? 'bg-green-500 rounded-full hover:bg-green-600'
          : 'bg-blue-500 rounded-full hover:bg-blue-600'
      }`}
    >
      <FaBookmark className='mr-2' />{' '}
      {isBookmarked ? 'Remove Bookmark' : 'Bookmark Property'}
    </button>
  )
}

export default BookmarkBtn
