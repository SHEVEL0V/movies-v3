/** @format */
"use server";
import bcrypt from "bcrypt";
import { User } from "@/db/schemas/user";
import res from "@/helpers/response";

type Input = {
  name: string;
  email: string;
  password: string;
  password2: string;
};

export const create = async ({ name, email, password, password2 }: Input) => {
  if (!(await User.find({ email }))) {
    return res("🔴 Email is already created");
  }
  if (password !== password2) {
    return res("🔴 Password not coincide");
  }

  const user = new User({
    email,
    name,
    password: await bcrypt.hash(password, 10),
  });

  return user
    .save()
    .then(() => res("User " + name + " created successfully", true))
    .catch((err) => res(err.message));
};
