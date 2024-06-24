import connectDB from '@/config/database'
import Message from '@/model/Message'
import { getSessionUser } from '@/utils/getSessionUser'

// to avoid deployment issues
export const dynamic = 'force-dynamic'

// PUT /api/messages/:id
export const PUT = async (req, { params }) => {
  try {
    // a. connect to db
    await connectDB()

    // b. get the userid to attach to property
    const sessionUser = await getSessionUser()
    const { user } = sessionUser

    // if not authorized
    if (!sessionUser || !sessionUser.userId) {
      return new Response(
        JSON.stringify({ message: 'Not authorized - Please log in!' }),
        { status: 401 }
      )
    }
    // c. messageId
    const { id } = params
    // d. find message by id
    const message = await Message.findById(id)

    // f. handle not found message
    if (!message) {
      return new Response('Message not found!', { status: 404 })
    }

    // e. check if user owns message
    if (message.recipient.toString() !== user.id) {
      return new Response('Unauthorized', { status: 401 })
    }
    // f. update message to mark as read or unread depending on current state
    message.read = !message.read

    await message.save()

    // g. return
    return new Response(JSON.stringify(message), {
      status: 200,
    })
  } catch (error) {
    console.log(error)
    return new Response('Something went wrong!', { status: 500 })
  }
}
