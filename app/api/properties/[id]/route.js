import connectDB from '@/config/database'
import Property from '@/model/Property'

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
