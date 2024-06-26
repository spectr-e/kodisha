import mongoose from 'mongoose'

let connected = false

const connectDB = async () => {
  // ensures only the fields specified in schema are saved in db
  mongoose.set('strictQuery', true)

  // if connected, dont reconnect
  if (connected) {
    console.log('DB is already connected')
    return
  }

  // connect to db
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    connected = true
    console.log('DB connected')
  } catch (error) {
    console.log('DB not connected')
    console.log(error)
  }
}

export default connectDB
