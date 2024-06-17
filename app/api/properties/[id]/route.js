import connectDB from '@/config/database'
import Property from '@/model/Property'
import { getSessionUser } from '@/utils/getSessionUser'

// GET /api/properties/:id
export const GET = async (request, { params }) => {
  try {
    await connectDB()
    const property = await Property.findById(params.id)
    // unsuccessful reponse
    if (!property) {
      return new Response('Property not found', { status: 404 })
    }
    // successful reponse
    return new Response(JSON.stringify(property), {
      status: 200,
    })
  } catch (error) {
    console.log(error)
    return new Response('Something is not right', { status: 500 })
  }
}

// DELETE /api/properties/:id
export const DELETE = async (request, { params }) => {
  try {
    await connectDB()
    const sessionUser = await getSessionUser()

    // check for session
    if (!sessionUser || !sessionUser.userId) {
      return new Response('Unauthorized', { status: 401 })
    }

    const { userId } = sessionUser
    const propId = params.id

    const prop = await Property.findById(propId)

    // unsuccessful reponse
    if (!prop) {
      return new Response('Property not found', { status: 404 })
    }

    // verify owner
    if (prop.owner.toString() !== userId) {
      return new Response('Unauthorized', { status: 401 })
    }

    await prop.deleteOne()

    // successful reponse
    return new Response('Property deleted!', {
      status: 200,
    })
  } catch (error) {
    console.log(error)
    return new Response('Something is not right', { status: 500 })
  }
}

// PUT /api/properties/:id
export const PUT = async (req, { params }) => {
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

    // property id
    const { id } = params

    // c. get the form data
    const formData = await req.formData()

    // d. access all values from amenities
    const amenities = formData.getAll('amenities')

    // get property to update
    const existingProperty = await Property.findById(id)

    if (!existingProperty) {
      return new Response('Property does not exist!', { status: 404 })
    }

    // verify ownership
    if (existingProperty.owner.toString() !== userId) {
      return new Response('Unauthorized', { status: 401 })
    }

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
    }

    // g. update prop in db
    const updatedProp = await Property.findByIdAndUpdate(id, propData)
    return new Response(JSON.stringify(updatedProp), { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response('Failed to add property', { status: 500 })
  }
}
