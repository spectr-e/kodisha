const PropCard = () => {
  return (
    <div class='relative shadow-md rounded-xl'>
      <img
        src='images/properties/a1.jpg'
        alt=''
        class='w-full h-auto rounded-t-xl'
      />
      <div class='p-4'>
        <div class='mb-6 text-left md:text-center lg:text-left'>
          <div class='text-gray-600'>Apartment</div>
          <h3 class='text-xl font-bold'>Boston Commons Retreat</h3>
        </div>
        <h3 class='absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
          $4,200/mo
        </h3>

        <div class='flex justify-center gap-4 mb-4 text-gray-500'>
          <p>
            <i class='fa-solid fa-bed'></i> 3
            <span class='md:hidden lg:inline'>Beds</span>
          </p>
          <p>
            <i class='fa-solid fa-bath'></i> 2
            <span class='md:hidden lg:inline'>Baths</span>
          </p>
          <p>
            <i class='fa-solid fa-ruler-combined'></i>
            1,500 <span class='md:hidden lg:inline'>sqft</span>
          </p>
        </div>

        <div class='flex justify-center gap-4 mb-4 text-sm text-green-900'>
          <p>
            <i class='fa-solid fa-money-bill'></i> Weekly
          </p>
          <p>
            <i class='fa-solid fa-money-bill'></i> Monthly
          </p>
        </div>

        <div class='mb-5 border border-gray-100'></div>

        <div class='flex flex-col justify-between mb-4 lg:flex-row'>
          <div class='flex gap-2 mb-4 align-middle lg:mb-0'>
            <i class='text-lg text-orange-700 fa-solid fa-location-dot'></i>
            <span class='text-orange-700'> Boston MA </span>
          </div>
          <a
            href='property.html'
            class='h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Details
          </a>
        </div>
      </div>
    </div>
  )
}

export default PropCard
