import connectDB from '@/config/database'
import Property from '@/model/Property'
import User from '@/model/User'
import { getSessionUser } from '@/utils/getSessionUser'

export const dynamic = 'force-dynamic'

// POST /aoi/bookmarks
export const POST = async (request) => {
  try {
    await connectDB()
    // get user details
    const sessionUser = await getSessionUser()
    const { userId } = sessionUser
    if (!sessionUser || !sessionUser.userId) {
      return new Response('Not authorized - User ID required!', {
        status: 401,
      })
    }
    // get property details
    const { propertyId } = await request.json()

    // find user in db
    const user = await User.findById(userId)

    // check if user owns property
    const property = await Property.findById(propertyId)
    if (!property) {
      return new Response(
        { message: 'Property not found!', isBookmarked: false },
        {
          status: 404,
        }
      )
    }
    if (property.owner.toString() === userId) {
      return new Response(
        JSON.stringify({
          message: 'You own this property!',
          isBookmarked: false,
        }),
        {
          status: 201,
        }
      )
    }

    // check if property is already bookmarked
    let isBookmarked = user.bookmarks.includes(propertyId)
    let message

    if (isBookmarked) {
      // if bookmarked, remove
      user.bookmarks.pull(propertyId)
      isBookmarked = false
      message = 'Bookmark removed successfully!'
    } else {
      // if not bookmarked, add
      user.bookmarks.push(propertyId)
      message = 'Property bookmarked!'
      isBookmarked = true
    }
    await user.save()

    return new Response(JSON.stringify({ message, isBookmarked }), {
      status: 200,
    })
  } catch (err) {
    console.log(err)
    return new Response('Something is not right', { status: 500 })
  }
}

// GET /api/bookmarks
export const GET = async (req) => {
  try {
    await connectDB()
    // get user details
    const sessionUser = await getSessionUser()
    const { userId } = sessionUser
    if (!sessionUser || !sessionUser.userId) {
      return new Response('Not authorized - User ID required!', {
        status: 401,
      })
    }

    // find user in db
    const user = await User.findById(userId)

    // get bookmarks from user and their associated properties details
    const bookmarks = await Property.find({ _id: { $in: user.bookmarks } })
    return new Response(JSON.stringify({ bookmarks }), {
      status: 200,
    })
  } catch (error) {
    console.log(error)
    return new Response('Something is not right', { status: 500 })
  }
}
