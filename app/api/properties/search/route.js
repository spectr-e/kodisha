import connectDB from '@/config/database'
import Property from '@/model/Property'

// GET /api/properties/search
export const GET = async (req) => {
  const { searchParams } = new URL(req.url)

  try {
    await connectDB()

    const location = searchParams.get('location')
    const propType = searchParams.get('propType')

    // match location to description (keyword) or location (street, city, etc)
    const locationPattern = new RegExp(location, 'i')
    let query = {
      $or: [
        { name: locationPattern },
        { description: locationPattern },
        { 'location.street': locationPattern },
        { 'location.state': locationPattern },
        { 'location.city': locationPattern },
        { 'location.zipcode': locationPattern },
      ],
    }

    // if proptype is specified (not "all"), add it to query
    if (propType && propType !== 'All') {
      const typePattern = new RegExp(propType, 'i')
      query.type = typePattern
    }

    const properties = await Property.find(query)

    return new Response(JSON.stringify(properties), { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response('Something is not right', { status: 500 })
  }
}
