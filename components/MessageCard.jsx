const MessageCard = ({ messaage }) => {
  return (
    <div className='space-y-4'>
      <div className='relative p-4 bg-white border border-gray-200 rounded-md shadow-md'>
        <h2 className='mb-4 text-xl'>
          <span className='font-bold'>Property Inquiry:</span>
          Boston Commons Retreat
        </h2>
        <p className='text-gray-700'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          libero nobis vero quos aspernatur nemo alias nam, odit dolores sed
          quaerat illum impedit quibusdam officia ad voluptatibus molestias
          sequi? Repudiandae!
        </p>

        <ul className='mt-4'>
          <li>
            <strong>Name:</strong> John Doe
          </li>

          <li>
            <strong>Reply Email:</strong>
            <a href='mailto:recipient@example.com' className='text-blue-500'>
              recipient@example.com
            </a>
          </li>
          <li>
            <strong>Reply Phone:</strong>
            <a href='tel:123-456-7890' className='text-blue-500'>
              123-456-7890
            </a>
          </li>
          <li>
            <strong>Received:</strong>1/1/2024 12:00 PM
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
