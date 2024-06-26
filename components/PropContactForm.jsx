'use client'
import { FaPaperPlane } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Spinner } from '.'
import { useSession } from 'next-auth/react'

const PropContactForm = ({ property }) => {
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    recipient: property.owner,
    property: property._id,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const resp = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await resp.json()
      if (resp.ok) {
        setSubmitted(true)
        toast.success(data.message)
      } else if (resp.status === 400 || resp.status === 401) {
        toast.warn(data.message)
      } else {
        console.log(resp.statusText)
        toast.error('Message not sent!')
      }
    } catch (e) {
      console.log(e)
      toast.error('Something went wrong!')
    } finally {
      setLoading(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        recipient: property.owner,
        property: property._id,
      })
    }
  }

  // if user already owns the property, do not display the contact form
  if (session?.user?.id === property.owner) {
    return (
      <>
        <h3 className='mb-6 text-xl font-bold'>Contact Property Manager</h3>
        <p>You cannot send message to self!</p>
      </>
    )
  }

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h3 className='mb-6 text-xl font-bold'>Contact Property Manager</h3>
      {!session ? (
        <p>You must be logged in to send a message</p>
      ) : submitted ? (
        <p className='mb-4 text-orange-500'>
          Your message has been sent successfully
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              className='block mb-2 text-sm font-bold text-gray-700'
              htmlFor='name'
            >
              Name:
            </label>
            <input
              className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='Enter your name'
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block mb-2 text-sm font-bold text-gray-700'
              htmlFor='email'
            >
              Email:
            </label>
            <input
              className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Enter your email'
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block mb-2 text-sm font-bold text-gray-700'
              htmlFor='phone'
            >
              Phone:
            </label>
            <input
              className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
              id='phone'
              type='text'
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder='Enter your phone number'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block mb-2 text-sm font-bold text-gray-700'
              htmlFor='message'
            >
              Message:
            </label>
            <textarea
              className='w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none h-44 focus:outline-none focus:shadow-outline'
              id='message'
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder='Enter your message'
            ></textarea>
          </div>
          <div>
            <button
              className='flex items-center justify-center w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline'
              type='submit'
            >
              <FaPaperPlane className='mr-2' /> Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default PropContactForm
