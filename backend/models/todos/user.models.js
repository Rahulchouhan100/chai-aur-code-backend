import mongoose from "mongoose";

// mongoose will help you to create schema
// schema is method that takes object.
// It will create schema on mongoDB

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: string,
      required: true,
      unique: true,
      lowercase: true,
    },
    isActive: Boolean,
    password: {
      type: string,
      required: [true, "password is required"],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

// modal is a method  takes 2 parametes,pahle kya model banau or kiske based pe banau?
export const User = mongoose.model("User", userSchema);

// modal will convert in plural in lowercase ex: (users);


