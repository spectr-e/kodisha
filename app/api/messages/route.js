import connectDB from '@/config/database'
import Message from '@/model/Message'
import { getSessionUser } from '@/utils/getSessionUser'

// to avoid deployment issues
export const dynamic = 'force-dynamic'

// GET /api/messages
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
    // c. get the user read messages
    const readMessages = await Message.find({
      recipient: userId,
      read: true,
    })
      .sort({ createdAt: -1 }) // sort messages in ascending order
      .populate('sender', 'name')
      .populate('property', 'name')

    // c. get the user unread messages
    const unreadMessages = await Message.find({
      recipient: userId,
      read: false,
    })
      .sort({ createdAt: -1 }) // sort messages in ascending order
      .populate('sender', 'name')
      .populate('property', 'name')

    // combine them
    const messages = [...unreadMessages, ...readMessages]

    // d. return the messages
    return new Response(JSON.stringify(messages), {
      status: 200,
    })
  } catch (err) {
    console.log(err)
    return new Response('Something went wrong!', { status: 500 })
  }
}

// POST /api/messages
export const POST = async (req) => {
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
    // c. get the form data
    const { name, email, message, phone, recipient, property } =
      await req.json()

    // d. cannot send a message to self
    if (user.id === recipient) {
      return new Response(
        JSON.stringify({ message: 'You cannot send a message to yourself!' }),
        {
          status: 400,
        }
      )
    }

    // f. create the message
    const newMessage = new Message({
      name,
      email,
      phone,
      recipient,
      property,
      body: message,
      sender: user.id,
    })

    await newMessage.save()

    // g. return
    return new Response(JSON.stringify({ message: 'Message sent' }), {
      status: 200,
    })
  } catch (error) {
    console.log(error)
    return new Response('Failed to add message', { status: 500 })
  }
}
