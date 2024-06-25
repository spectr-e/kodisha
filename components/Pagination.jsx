const Pagination = ({ onPageChange, page, limit, totalProps }) => {
  // get the total number of pages
  const totalPages = Math.ceil(totalProps / limit)

  const handlePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage)
    }
  }
  return (
    <section className='container flex items-center justify-center mx-auto my-8'>
      <button
        className='px-2 py-1 mr-2 border border-gray-300 rounded'
        disabled={page === 1}
        onClick={() => handlePage(page - 1)}
      >
        Previous
      </button>
      <span className='mx-2'>
        Page {page} of {totalPages}
      </span>
      <button
        className='px-2 py-1 ml-2 border border-gray-300 rounded'
        disabled={page === totalPages}
        onClick={() => handlePage(page + 1)}
      >
        Next
      </button>
    </section>
  )
}

export default Pagination
