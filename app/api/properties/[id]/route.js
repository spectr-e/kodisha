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
