'use client'
import { useState, useEffect } from 'react'
import { MessageCard, Spinner } from '.'
import { toast } from 'react-toastify'

const Messages = () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch('/api/messages', { next: { revalidate: 60 } })

        if (res.ok) {
          const data = await res.json()
          setMessages(data)
        } else {
          console.log(res.statusText)
          toast.error('Unable to fetch messages')
        }
      } catch (error) {
        console.log(error)
        toast.error('Something went wrong!')
      } finally {
        setLoading(false)
      }
    }
    fetchMessages()
  }, [])

  return (
    <section className='bg-blue-50'>
      <div className='container max-w-6xl py-24 m-auto'>
        <div className='px-6 py-8 m-4 mb-4 bg-white border rounded-md shadow-md md:m-0'>
          <h1 className='mb-4 text-3xl font-bold'>Your Messages</h1>
          {messages.length === 0 ? (
            <p>You have no messaage</p>
          ) : loading ? (
            <Spinner loading={loading} />
          ) : (
            messages.map((message, i) => (
              <MessageCard message={message} key={i} />
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Messages
