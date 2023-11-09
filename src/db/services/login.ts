/** @format */
"use server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "@/db/schemas/user";
import { cookies } from "next/headers";
import res from "@/helpers/response";

export const login = async (email: string, password: string) => {
  const passwordDB = await User.findOne({ email }).select({ password: 1 });

  if (!passwordDB) {
    return res("🔴 User not found");
  }

  if (!(await bcrypt.compare(password, passwordDB.password))) {
    return res("🔴 Password does not match");
  }

  const secret = process.env.JWT_SECRET || "secret";

  const token = jwt.sign({ email }, secret);

  cookies().set("user", token);

  return res("The user has successfully logged in", true);
};
