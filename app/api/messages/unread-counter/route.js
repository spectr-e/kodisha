import connectDB from '@/config/database'
import Message from '@/model/Message'
import { getSessionUser } from '@/utils/getSessionUser'

// to avoid deployment issues
export const dynamic = 'force-dynamic'

// GET /api/messages/unread-counter
export const GET = async (req) => {
  try {
    // a. connect to db
    await connectDB()

    // b. get the userid to attach to property
    const sessionUser = await getSessionUser()
    const { userId } = sessionUser
    // if not authorized
    if (!sessionUser || !sessionUser.userId) {
      return new Response(
        JSON.stringify({ message: 'Not authorized - Please log in!' }),
        { status: 401 }
      )
    }
    // c. get the count of user unread messages
    const unreadCount = await Message.countDocuments({
      recipient: userId,
      read: false,
    })
    // d. return the count
    return new Response(JSON.stringify({ count: unreadCount }), {
      status: 200,
    })
  } catch (err) {
    console.log(err)
    return new Response('Something went wrong!', { status: 500 })
  }
}
