/** @format */

import mongoose from "mongoose";

const connectString = process.env.MONGODB_KEY || "";

export const connectDB = async () => await mongoose.connect(connectString);
