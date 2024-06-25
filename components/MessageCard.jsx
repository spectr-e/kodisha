'use client'

import { useGlobalContext } from '@/context/GlobalContext'
import { useState } from 'react'
import { toast } from 'react-toastify'

const MessageCard = ({ message }) => {
  const [read, setRead] = useState(message.read)
  const [deleted, setDeleted] = useState(false)
  const { setCount } = useGlobalContext()
  const handleRead = async () => {
    try {
      const res = await fetch(`/api/messages/${message._id}`, {
        method: 'PUT',
      })

      if (res.status === 200) {
        const { read } = await res.json()
        setRead(read)
        setCount((prev) => (read ? prev - 1 : prev + 1))
        if (read) {
          toast.success('Message marked as read!')
        } else {
          toast.info('Message marked as unread!')
        }
      }
    } catch (e) {
      console.log(e)
      toast.error('Unable to mark message as (un)read!')
    }
  }

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/messages/${message._id}`, {
        method: 'DELETE',
      })
      if (res.status === 200) {
        setDeleted(true)
        toast.success('Message deleted!')
      }
    } catch (e) {
      console.log(e)
      toast.error('Unable to delete message!')
    }
  }

  return (
    !deleted && (
      <div className='space-y-4'>
        <div className='relative p-4 bg-white border border-gray-200 rounded-md shadow-md'>
          {!read && (
            <div className='absolute px-2 py-1 text-white bg-yellow-500 rounded-md top-2 right-2'>
              New
            </div>
          )}
          <h2 className='mb-4 text-xl font-bold'>{message.property.name}</h2>
          <p className='text-gray-700'>{message.body}</p>

          <ul className='mt-4'>
            <li>
              <strong>Name:</strong> {message.name}
            </li>

            <li>
              <strong>Email: </strong>
              <a href={`mailto:${message.email}`} className='text-blue-500'>
                {message.email}
              </a>
            </li>
            <li>
              <strong>Phone: </strong>
              <a href={`tel:${message.phone}`} className='text-blue-500'>
                {message.phone}
              </a>
            </li>
            <li>
              <strong>Received: </strong>{' '}
              {new Date(message.createdAt).toLocaleString()}
            </li>
          </ul>
          <button
            onClick={handleRead}
            className={`px-3 py-1 mt-4 mr-3  ${
              read ? 'bg-gray-300' : 'bg-blue-500 text-white'
            } rounded-md`}
          >
            {read ? 'Mark As Unread' : 'Mark As Read'}
          </button>
          <button
            onClick={handleDelete}
            className='px-3 py-1 mt-4 text-white bg-red-500 rounded-md'
          >
            Delete
          </button>
        </div>
      </div>
    )
  )
}

export default MessageCard
