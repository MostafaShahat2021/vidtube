import mongoose, { Schema } from "mongoose";

const tweetSchema = new Schema({
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
})

export const Tweet = mongoose.model("Tweet", tweetSchema)

/**
 * id string pk
  owner ObjectId users
  content string
  createdAt Date
  updatedAt Date  
 */