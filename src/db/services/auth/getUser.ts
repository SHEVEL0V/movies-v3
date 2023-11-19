/** @format */
"use server";
import { connectDB } from "@/db/connect";
import { User } from "@/db/schemas/user";
import { UserType } from "@/types";

export const getUser = async (id: string) => {
  await connectDB();

  const user = await User.findById(id);

  return user as UserType;
};
