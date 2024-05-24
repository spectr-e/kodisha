import { Schema, model, models } from 'mongoose'

const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId, // user id
      ref: 'User', // the model we are getting the ids from
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    location: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      zip: {
        type: String,
      },
    },

    beds: {
      type: Number,
      required: true,
    },

    baths: {
      type: Number,
      required: true,
    },

    sq: {
      type: Number,
      required: true,
    },

    amenities: [
      {
        type: String,
        required: true,
      },
    ],

    rates: {
      nightly: {
        type: Number,
      },
      weekly: {
        type: Number,
      },
      monthly: {
        type: Number,
      },
    },

    seller_info: {
      name: { type: String },
      email: { type: String },
      phone: { type: String },
    },

    images: [{ type: String }],

    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const Property = models.property || model('Property', PropertySchema)

export default Property
