import connectDB from '@/config/database'
import Property from '@/model/Property'

// GET /api/properties/user/:userId
export const GET = async (request, { params }) => {
  try {
    await connectDB()

    const userID = params.userID

    if (!userID) {
      return new Response('User ID is required', { status: 400 })
    }

    const properties = await Property.find({ owner: userID })

    return new Response(JSON.stringify(properties), {
      status: 200,
    })
  } catch (error) {
    console.log(error)
    return new Response('Something is not right', { status: 500 })
  }
}
