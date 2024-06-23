import connectDB from '@/config/database'
import Property from '@/model/Property'

// GET /api/properties/search
export const GET = async (req) => {
  try {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const location = searchParams.get('location')
    const propType = searchParams.get('propType')

    console.log({ location, propType })

    return new Response(
      JSON.stringify({
        message: 'Success',
      }),
      { status: 200 }
    )
  } catch (error) {
    console.log(error)
    return new Response('Something is not right', { status: 500 })
  }
}
