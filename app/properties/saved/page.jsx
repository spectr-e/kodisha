'use client'

import { PropCard, Spinner } from '@/components'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const SavedPropsPage = () => {
  const [props, setProps] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const response = await fetch('/api/bookmarks', {
          next: { revalidate: 60 },
        })

        if (response.ok) {
          const data = await response.json()
          setProps(data.bookmarks)
        } else {
          console.log(response.statusText)
          toast.error('Failed to fetch saved properties!')
        }
      } catch (err) {
        console.log(error)
        toast.error('Failed to fetch saved properties!')
      } finally {
        setLoading(false)
      }
    }

    fetchBookmarks()
  }, [])

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <section className='px-4 py-6'>
      <div className='px-4 py-6 m-auto container-xl lg:container'>
        {!props ? (
          <p className='text-xl text-center '>No Properties Found</p>
        ) : (
          <>
            <h1 className='mb-4 text-2xl font-extrabold text-center'>
              Saved Properties
            </h1>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
              {props.map((prop, i) => (
                <PropCard property={prop} key={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default SavedPropsPage
