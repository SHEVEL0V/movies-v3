/** @format */
"use server";
import bcrypt from "bcrypt";
import { User } from "@/db/schemas/user";

type Input = {
  name: string;
  email: string;
  password: string;
  password2: string;
};

export const create = async ({ name, email, password, password2 }: Input) => {
  if (!(await User.find({ email }))) {
    throw new Error("🔴 Email is already created");
  }
  if (password !== password2) {
    throw new Error("🔴 Password not coincide");
  }

  const user = new User({
    email,
    name,
    password: await bcrypt.hash(password, 10),
  });

  return user
    .save()
    .then(() => "User " + name + " created successfully")
    .catch((err: Error) => err);
};
