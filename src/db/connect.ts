/** @format */
"use server";
import mongoose from "mongoose";

const connectString = process.env.MONGODB_KEY || "";

export const connectDB = () =>
  mongoose
    .connect(connectString)
    .then(() => console.log("📙 Connect MongoDB success"))
    .catch(() => {
      const message = "🚫 Connect MongoDB failed";
      console.error(message);
      throw new Error(message);
    });
