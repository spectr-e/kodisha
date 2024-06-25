const Pagination = () => {
  return (
    <section className='container flex items-center justify-center mx-auto my-8'>
      <button className='px-2 py-1 mr-2 border border-gray-300 rounded'>
        Previous
      </button>
      <span className='mx-2'>Page 1 of 10</span>
      <button className='px-2 py-1 ml-2 border border-gray-300 rounded'>
        Next
      </button>
    </section>
  )
}

export default Pagination
