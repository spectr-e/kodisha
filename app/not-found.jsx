import Link from 'next/link'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <section className='flex-grow min-h-screen bg-blue-50'>
      <div className='container max-w-2xl py-24 m-auto'>
        <div className='px-6 py-24 m-4 mb-4 bg-white border rounded-md shadow-md md:m-0'>
          <div className='flex justify-center'>
            <FaExclamationTriangle className='text-yellow-400 text-8xl' />
          </div>
          <div className='text-center'>
            <h1 className='mt-4 mb-2 text-3xl font-bold'>Page Not Found</h1>
            <p className='mb-10 text-xl text-gray-500'>
              The page you are looking for does not exist.
            </p>
            <Link
              href='/'
              className='px-6 py-4 font-bold text-white bg-blue-700 rounded hover:bg-blue-800'
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <div className='flex-grow'></div>
    </section>
  )
}

export default NotFoundPage
