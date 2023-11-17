/** @format */
"use server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "@/db/schemas/user";
import { cookies } from "next/headers";
import { connectDB } from "../../connect";
import { redirect } from "next/navigation";

export const login = async (email: string, password: string) => {
  await connectDB();

  const user = await User.findOne({ email }).select({ password: 1, name: 1 });

  if (!user) {
    const message = "	❗ User not found";
    console.error(message, 400);
    return message;
  }

  if (!(await bcrypt.compare(password, user.password))) {
    const message = "	❗ Password does not match";
    console.error(message, 400);
    return message;
  }

  const secret = process.env.JWT_SECRET || "secret";

  const userID = user._id;

  const token = jwt.sign({ email, userID }, secret);

  cookies().set("user", token);

  console.log("🔓 User  " + user.name + " authenticated successfully");
  redirect("/");
};
