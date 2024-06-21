import connectDB from '@/config/database'
import User from '@/model/User'
import Property from '@/model/Property'
import { getSessionUser } from '@/utils/getSessionUser'

export const dynamic = 'force-dynamic'

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

    // check if property is already bookmarked
    let isBookmarked = user.bookmarks.includes(propertyId)
    let message

    if (isBookmarked) {
      // if bookmarked, remove
      user.bookmarks.pull('propertyId')
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
