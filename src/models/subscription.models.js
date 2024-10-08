import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
  subscriber: {
    type: Schema.Types.ObjectId, // One who is SUBSCRIBING
    ref: "User",
  },
  channel: {
    type: Schema.Types.ObjectId, // One to whom "subscriber" is SUBSCRIBING
    ref: "User"
  }
}, { timestamps: true })

export const Subscription = mongoose.model("Subscription", subscriptionSchema)

/**
 * id string pk
  subscriber ObjectId users
  channel ObjectId users
  createdAt Date
  updatedAt Date
*/