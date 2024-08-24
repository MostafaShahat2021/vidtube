import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  videos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    }
  ],
  name: {
    type: String,
    required: [true, "name is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
}, { timestamps: true })

export const Playlist = mongoose.model("PLaylist", playlistSchema)

/**
 * id string pk
  owner ObjectId users
  videos ObjectId[] videos
  name string
  description string
  createdAt Date
  updatedAt Date
 */