import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullname: {
    type: String,
    required: [true, "full name is required"],
    maxlength:30,
    trim: true,
    index: true,
  },
  avatar: {
    type: String,
    reqired: true,
  },
  coverImage: String,
  watchHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video"
    }
  ],
  password: {
    type: String,
    reqired: [true, "password is required"],
    minlength:8,

  },
  refreshToken: {
    type: String,
  },
}, { timestamps: true})
export const User = mongoose.model("User", userSchema)

/*users
    id string pk
    username string
    email string
    fullName string
    avatar string
    coverImage string
    watchHistory ObjectId[] videos
    password string
    refreshToken string
    createdAt Date
    updatedAt Date
  */
