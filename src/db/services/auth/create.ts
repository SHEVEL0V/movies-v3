/** @format */
"use server";
import bcrypt from "bcrypt";
import { User } from "@/db/schemas/user";
import { redirect } from "next/navigation";
import { connectDB } from "../../connect";
type Input = {
  name: string;
  email: string;
  password: string;
  password2: string;
};

export const create = async ({ name, email, password, password2 }: Input) => {
  await connectDB();

  const find = await User.find({ email });

  if (find.length) {
    return "❗Email is already created";
  }
  if (password !== password2) {
    return "❗Password not coincide";
  }

  const user = new User({
    email,
    name,
    password: await bcrypt.hash(password, 10),
  });

  const res = await user
    .save()
    .then(() => "successfully")
    .catch((err: Error) => "🚫" + err.message);

  if (res === "successfully") {
    console.log("😊 User created successfully");
    redirect("/login");
  }

  return res;
};
