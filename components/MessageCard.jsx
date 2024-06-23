const MessageCard = ({ message }) => {
  return (
    <div className='space-y-4'>
      <div className='relative p-4 bg-white border border-gray-200 rounded-md shadow-md'>
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
        <button className='px-3 py-1 mt-4 mr-3 text-white bg-blue-500 rounded-md'>
          Mark As Read
        </button>
        <button className='px-3 py-1 mt-4 text-white bg-red-500 rounded-md'>
          Delete
        </button>
      </div>
    </div>
  )
}

export default MessageCard
