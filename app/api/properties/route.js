import connectDB from '@/config/database'
import Property from '@/model/Property'

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

export const POST = async (req) => {
  try {
    const formData = await req.formData()

    // access all values from amenities & images
    const amenities = formData.getAll('amenities')
    const images = formData
      .getAll('images')
      .filter((image) => image.name !== '') // to prevent cloudinary from throwing an error

    return new Response(JSON.stringify({ message: 'Success' }), { status: 200 })
  } catch (error) {
    return new Response('Failed to add property', { status: 500 })
  }
}
