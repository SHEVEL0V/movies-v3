/** @format */
"use server";

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    password: {
      type: String,
      required: [true, "Set password for user"],
      RegExp: /[a-zA-Z0-9]/,
      minLength: 6,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      RegExp:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      minLength: 3,
      maxLength: 30,
    },

    avatarURL: {
      type: String,
      default: "",
    },
    verify: {
      type: Boolean,
      default: false,
    },
  }
  // { versionKey: false, timestamps: true }
);

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
