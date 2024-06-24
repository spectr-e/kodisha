'use client'
import { useState, useEffect } from 'react'

const UnreadCounter = ({ session }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!session) {
      return
    }
    const fetchUnreadCount = async () => {
      try {
        const res = await fetch('/api/messages/unread-counter')

        if (res.ok) {
          const data = await res.json()
          setCount(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchUnreadCount()
  }, [session])

  return (
    count > 0 && (
      <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
        {/* <!-- Replace with the actual number of notifications --> */}
        {count}
      </span>
    )
  )
}

export default UnreadCounter
