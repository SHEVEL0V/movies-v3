/** @format */
"use server";
import mongoose from "mongoose";

import { auth } from "./auth";
import { create } from "./create";
import { login } from "./login";

const connectString = process.env.MONGODB_KEY || "";

const middleware = async <T>(value?: T) => {
  try {
    console.log(connectString);

    await mongoose.connect(connectString);
    // .then(() => console.log("✅ Connect MongoDB success"))
    // .catch(() => console.log("🔴 Connect MongoDB failed"));
    return value;
  } catch (err) {
    console.log("🔴", err);
    throw err;
  }
};

export const userService = {
  create,
  login,
  auth,
};
