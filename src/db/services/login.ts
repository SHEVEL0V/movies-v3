/** @format */
"use server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "@/db/schemas/user";
import { cookies } from "next/headers";
import { connectDB } from "../connect";
import {  redirect } from "next/navigation";

export const login = async (email: string, password: string) => {
  await connectDB();

  const user = await User.findOne({ email }).select({ password: 1, name: 1 });

  if (!user) {
    const message = "🔴 User not found";
    console.error(message, 400);
    return message;
    // throw new Error("🔴 User not found");
  }

  if (!(await bcrypt.compare(password, user.password))) {
    const message = "🔴 Password does not match";
    console.error(message, 400);
    return message;
    // throw new Error("🔴 Password does not match");
  }

  const secret = process.env.JWT_SECRET || "secret";

  const token = jwt.sign({ email }, secret);

  cookies().set("user", token);

  // return "The '" + user.name + "' has successfully logged in";
  redirect("/");
};
