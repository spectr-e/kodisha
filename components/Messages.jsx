'use client'
import { useState, useEffect } from 'react'
import { Spinner } from '.'

const Messages = () => {
  const [Messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch('/api/messages')

        if (res.ok) {
          const data = await res.json()
          setMessages(data)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchMessages()
  }, [])

  return loading ? <Spinner loading={loading} /> : <div></div>
}

export default Messages
