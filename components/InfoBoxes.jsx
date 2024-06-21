import InfoBox from './InfoBox'

const InfoBoxes = () => {
  return (
    <section>
      <div className='m-auto container-xl lg:container'>
        <div className='grid grid-cols-1 gap-4 p-4 rounded-lg md:grid-cols-2'>
          <InfoBox
            heading={'For Renters'}
            bgColor='bg-gray-100'
            btnInfo={{
              text: 'Browse Properties',
              link: '/properties',
              bgColor: 'bg-black',
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>
          <InfoBox
            heading={'For Property Owners'}
            bgColor='bg-blue-100'
            btnInfo={{
              text: 'Add Properties',
              link: '/properties/add',
              bgColor: 'bg-blue-500',
            }}
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  )
}

export default InfoBoxes
