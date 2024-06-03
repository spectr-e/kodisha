import connectDB from '@/config/database'
import Property from '@/model/Property'
import { getSessionUser } from '@/utils/getSessionUser'

// GET /api/properties
export const GET = async (request) => {
  try {
    await connectDB()
    const properties = await Property.find({})
    return new Response(JSON.stringify(properties), {
      status: 200,
    })
  } catch (error) {
    console.log(error)
    return new Response('Something is not right', { status: 500 })
  }
}

// POST /api/properties
export const POST = async (req) => {
  try {
    // a. connect to db
    await connectDB()

    // b. get the userid to attach to property
    const sessionUser = await getSessionUser()
    const { userId } = sessionUser
    // if not authorized
    if (!sessionUser || !sessionUser.userId) {
      return new Response('Not authorized - User ID required!', { status: 401 })
    }

    // c. get the form data
    const formData = await req.formData()

    // d. access all values from amenities & images
    const amenities = formData.getAll('amenities')
    const images = formData
      .getAll('images')
      .filter((image) => image.name !== '') // to prevent cloudinary from throwing an error

    // e. create propertydata object for submission
    const propData = {
      type: formData.get('type'),
      name: formData.get('name'),
      description: formData.get('description'),
      location: {
        street: formData.get('location.street'),
        city: formData.get('location.city'),
        state: formData.get('location.state'),
        zip: formData.get('location.zip'),
      },
      beds: formData.get('beds'),
      baths: formData.get('baths'),
      sq: formData.get('sq'),
      amenities,
      rates: {
        nightly: formData.get('rates.nightly'),
        weekly: formData.get('rates.weekly'),
        monthly: formData.get('rates.monthly'),
      },
      seller_info: {
        name: formData.get('seller_info.name'),
        email: formData.get('seller_info.email'),
        phone: formData.get('seller_info.phone'),
      },
      owner: userId,
      images,
    }

    console.log(propData)

    return new Response(JSON.stringify({ message: 'Success' }), { status: 200 })
  } catch (error) {
    return new Response('Failed to add property', { status: 500 })
  }
}
