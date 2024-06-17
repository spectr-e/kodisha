'use client'
import { fetchProp } from '@/utils/requests'
import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Spinner } from '.'

const EditPropForm = () => {
  const { id } = useParams()
  const router = useRouter()

  const [fields, setFields] = useState({
    type: '',
    name: '',
    description: '',
    location: { street: '', city: '', state: '', zip: '' },
    beds: '',
    baths: '',
    sq: '',
    amenities: [],
    rates: { weekly: '', monthly: '', nightly: '' },
    seller_info: { name: '', email: '', phone: '' },
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // fetch prop data
    const fetchPropData = async () => {
      try {
        const propData = await fetchProp(id)

        // check for null values in prop data and change into empty string
        // 1. rates
        if (propData && propData.rates) {
          const defRates = { ...propData.rates }
          for (const rate in defRates) {
            if (defRates[rate] === null) {
              defRates[rate] = ''
            }
          }
          propData.rates = defRates
        }
        // 2. location
        if (propData && propData.location) {
          const defLocation = { ...propData.location }
          for (const value in defLocation) {
            if (defLocation[value] === null) {
              defLocation[value] = ''
            }
          }
          propData.location = defLocation
        }
        // 3. seller_info
        if (propData && propData.seller_info) {
          const defSellerInfo = { ...propData.seller_info }
          for (const value in defSellerInfo) {
            if (defSellerInfo[value] === null) {
              defSellerInfo[value] = ''
            }
          }
          propData.seller_info = defSellerInfo
        }

        setFields(propData)
      } catch (e) {
        console.log({ error: e })
      } finally {
        setLoading(false)
      }
    }

    fetchPropData()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target

    // if nested fields
    if (name.includes('.')) {
      // eg. 'location.street' becomes 'location' 'street'
      const [outerKey, innerKey] = name.split('.')
      setFields((prev) => ({
        // bring in all the fields in the main object
        ...prev,
        // specify outer key object to be edited
        [outerKey]: {
          // bring in all the fields in the outer key object
          ...prev[outerKey],
          // specify inner key field to be edited
          [innerKey]: value,
        },
      }))
    } else {
      // if not nested fields
      setFields((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleAmenitiesChange = (e) => {
    const { value, checked } = e.target

    // clone the current array in state
    const updatedAmmenities = [...fields.amenities]
    if (checked) {
      // add value to array
      updatedAmmenities.push(value)
    } else {
      // remove value from array
      const index = updatedAmmenities.indexOf(value)
      if (index !== -1) {
        updatedAmmenities.splice(index, 1)
      }
    }

    // update state with updated array
    setFields((prev) => ({
      ...prev,
      amenities: updatedAmmenities,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)

    try {
      const resp = await fetch(`/api/properties/${id}`, {
        method: 'PUT',
        body: formData,
        // next: { revalidate: 60 },
      })

      if (resp.status === 200) {
        router.push(`/properties/${id}`)
      } else if (resp.status === 401 || resp.status === 404) {
        toast.error('Permission denied!')
      } else {
        toast.error('Something went wrong!')
      }
    } catch (err) {
      toast.error('Something went wrong!')
      console.log({ error: err })
    } finally {
      setLoading(false)
    }
  }

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <form onSubmit={handleSubmit}>
      <h2 className='mb-6 text-3xl font-semibold text-center'>Edit Property</h2>
      {/* property type field */}
      <div className='mb-4'>
        <label htmlFor='type' className='block mb-2 font-bold text-gray-700'>
          Property Type
        </label>
        <select
          id='type'
          name='type'
          className='w-full px-3 py-2 border rounded'
          required
          value={fields.type}
          onChange={handleChange}
        >
          <option value='Apartment'>Apartment</option>
          <option value='Condo'>Condo</option>
          <option value='House'>House</option>
          <option value='Cabin Or Cottage'>Cabin or Cottage</option>
          <option value='Room'>Room</option>
          <option value='Studio'>Studio</option>
          <option value='Other'>Other</option>
        </select>
      </div>

      {/* listing name field */}
      <div className='mb-4'>
        <label className='block mb-2 font-bold text-gray-700'>
          Listing Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='w-full px-3 py-2 mb-2 border rounded'
          placeholder='eg. Beautiful Apartment In Miami'
          required
          value={fields.name}
          onChange={handleChange}
        />
      </div>

      {/* description field */}
      <div className='mb-4'>
        <label
          htmlFor='description'
          className='block mb-2 font-bold text-gray-700'
        >
          Description
        </label>
        <textarea
          id='description'
          name='description'
          className='w-full px-3 py-2 border rounded'
          rows='4'
          placeholder='Add an optional description of your property'
          value={fields.description}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* location field */}
      <div className='p-4 mb-4 bg-blue-50'>
        <label className='block mb-2 font-bold text-gray-700'>Location</label>
        <input
          type='text'
          id='street'
          name='location.street'
          className='w-full px-3 py-2 mb-2 border rounded'
          placeholder='Street'
          value={fields.location.street}
          onChange={handleChange}
        />
        <input
          type='text'
          id='city'
          name='location.city'
          className='w-full px-3 py-2 mb-2 border rounded'
          placeholder='City'
          required
          value={fields.location.city}
          onChange={handleChange}
        />
        <input
          type='text'
          id='state'
          name='location.state'
          className='w-full px-3 py-2 mb-2 border rounded'
          placeholder='State'
          required
          value={fields.location.state}
          onChange={handleChange}
        />
        <input
          type='text'
          id='zipcode'
          name='location.zip'
          className='w-full px-3 py-2 mb-2 border rounded'
          placeholder='Zipcode'
          value={fields.location.zip}
          onChange={handleChange}
        />
      </div>

      {/* bbb fields */}
      <div className='flex flex-wrap mb-4'>
        {/* beds field */}
        <div className='w-full pr-2 sm:w-1/3'>
          <label htmlFor='beds' className='block mb-2 font-bold text-gray-700'>
            Beds
          </label>
          <input
            type='number'
            id='beds'
            name='beds'
            className='w-full px-3 py-2 border rounded'
            required
            value={fields.beds}
            onChange={handleChange}
          />
        </div>
        {/* baths field */}
        <div className='w-full px-2 sm:w-1/3'>
          <label htmlFor='baths' className='block mb-2 font-bold text-gray-700'>
            Baths
          </label>
          <input
            type='number'
            id='baths'
            name='baths'
            className='w-full px-3 py-2 border rounded'
            required
            value={fields.baths}
            onChange={handleChange}
          />
        </div>
        {/* square feet field */}
        <div className='w-full pl-2 sm:w-1/3'>
          <label
            htmlFor='square_feet'
            className='block mb-2 font-bold text-gray-700'
          >
            Square Feet
          </label>
          <input
            type='number'
            id='square_feet'
            name='sq'
            className='w-full px-3 py-2 border rounded'
            required
            value={fields.sq}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* amenities field */}
      <div className='mb-4'>
        <label className='block mb-2 font-bold text-gray-700'>Amenities</label>
        <div className='grid grid-cols-2 gap-2 md:grid-cols-3'>
          <div>
            <input
              type='checkbox'
              id='amenity_wifi'
              name='amenities'
              value='Wifi'
              className='mr-2'
              checked={fields.amenities.includes('Wifi')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_wifi'>Wifi</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_kitchen'
              name='amenities'
              value='Full Kitchen'
              className='mr-2'
              checked={fields.amenities.includes('Full Kitchen')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_kitchen'>Full kitchen</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_washer_dryer'
              name='amenities'
              value='Washer & Dryer'
              className='mr-2'
              checked={fields.amenities.includes('Washer & Dryer')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_washer_dryer'>Washer & Dryer</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_free_parking'
              name='amenities'
              value='Free Parking'
              className='mr-2'
              checked={fields.amenities.includes('Free Parking')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_free_parking'>Free Parking</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_pool'
              name='amenities'
              value='Swimming Pool'
              className='mr-2'
              checked={fields.amenities.includes('Swimming Pool')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_pool'>Swimming Pool</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_hot_tub'
              name='amenities'
              value='Hot Tub'
              className='mr-2'
              checked={fields.amenities.includes('Hot Tub')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_hot_tub'>Hot Tub</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_24_7_security'
              name='amenities'
              value='24/7 Security'
              className='mr-2'
              checked={fields.amenities.includes('24/7 Security')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_24_7_security'>24/7 Security</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_wheelchair_accessible'
              name='amenities'
              value='Wheelchair Accessible'
              className='mr-2'
              checked={fields.amenities.includes('Wheelchair Accessible')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_wheelchair_accessible'>
              Wheelchair Accessible
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_elevator_access'
              name='amenities'
              value='Elevator Access'
              className='mr-2'
              checked={fields.amenities.includes('Elevator Access')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_elevator_access'>Elevator Access</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_dishwasher'
              name='amenities'
              value='Dishwasher'
              className='mr-2'
              checked={fields.amenities.includes('Dishwasher')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_dishwasher'>Dishwasher</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_gym_fitness_center'
              name='amenities'
              value='Gym/Fitness Center'
              className='mr-2'
              checked={fields.amenities.includes('Gym/Fitness Center')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_gym_fitness_center'>
              Gym/Fitness Center
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_air_conditioning'
              name='amenities'
              value='Air Conditioning'
              className='mr-2'
              checked={fields.amenities.includes('Air Conditioning')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_air_conditioning'>Air Conditioning</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_balcony_patio'
              name='amenities'
              value='Balcony/Patio'
              className='mr-2'
              checked={fields.amenities.includes('Balcony/Patio')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_balcony_patio'>Balcony/Patio</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_smart_tv'
              name='amenities'
              value='Smart TV'
              className='mr-2'
              checked={fields.amenities.includes('Smart TV')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_smart_tv'>Smart TV</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amenity_coffee_maker'
              name='amenities'
              value='Coffee Maker'
              className='mr-2'
              checked={fields.amenities.includes('Coffee Maker')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor='amenity_coffee_maker'>Coffee Maker</label>
          </div>
        </div>
      </div>

      {/* rates field */}
      <div className='p-4 mb-4 bg-blue-50'>
        <label className='block mb-2 font-bold text-gray-700'>
          Rates (Leave blank if not applicable)
        </label>
        <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
          {/* weekly rates */}
          <div className='flex items-center'>
            <label htmlFor='weekly_rate' className='mr-2'>
              Weekly
            </label>
            <input
              type='number'
              id='weekly_rate'
              name='rates.weekly'
              className='w-full px-3 py-2 border rounded'
              value={fields.rates.weekly}
              onChange={handleChange}
            />
          </div>
          {/* monthly rates */}
          <div className='flex items-center'>
            <label htmlFor='monthly_rate' className='mr-2'>
              Monthly
            </label>
            <input
              type='number'
              id='monthly_rate'
              name='rates.monthly'
              className='w-full px-3 py-2 border rounded'
              value={fields.rates.monthly}
              onChange={handleChange}
            />
          </div>
          {/* nightly rates */}
          <div className='flex items-center'>
            <label htmlFor='nightly_rate' className='mr-2'>
              Nightly
            </label>
            <input
              type='number'
              id='nightly_rate'
              name='rates.nightly'
              className='w-full px-3 py-2 border rounded'
              checked={fields.rates.nightly}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* seller name field */}
      <div className='mb-4'>
        <label
          htmlFor='seller_name'
          className='block mb-2 font-bold text-gray-700'
        >
          Seller Name
        </label>
        <input
          type='text'
          id='seller_name'
          name='seller_info.name'
          className='w-full px-3 py-2 border rounded'
          placeholder='Name'
          value={fields.seller_info.name}
          onChange={handleChange}
        />
      </div>
      {/* seller email field */}
      <div className='mb-4'>
        <label
          htmlFor='seller_email'
          className='block mb-2 font-bold text-gray-700'
        >
          Seller Email
        </label>
        <input
          type='email'
          id='seller_email'
          name='seller_info.email'
          className='w-full px-3 py-2 border rounded'
          placeholder='Email address'
          required
          onChange={handleChange}
          value={fields.seller_info.email}
        />
      </div>
      {/* seller phone field */}
      <div className='mb-4'>
        <label
          htmlFor='seller_phone'
          className='block mb-2 font-bold text-gray-700'
        >
          Seller Phone
        </label>
        <input
          type='tel'
          id='seller_phone'
          name='seller_info.phone'
          className='w-full px-3 py-2 border rounded'
          placeholder='Phone'
          value={fields.seller_info.phone}
          onChange={handleChange}
        />
      </div>

      {/* submit button */}
      <div>
        <button
          className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Edit Property
        </button>
      </div>
    </form>
  )
}

export default EditPropForm
