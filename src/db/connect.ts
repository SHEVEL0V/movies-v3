/** @format */
"use server";
import mongoose from "mongoose";

const connectString = process.env.MONGODB_KEY || "";

export const connectDB = async () =>
  await mongoose
    .connect(connectString)
    .then(() => console.log("✅ Connect MongoDB success"))
    .catch(() => console.log("🔴 Connect MongoDB failed"));
