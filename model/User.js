import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, 'Email already exists'],
      required: [true, 'Emai is required'],
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
    },
    image: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId, // property id
        ref: 'Property', // the model we are getting the ids from
      },
    ],
  },
  { timestamps: true }
)
