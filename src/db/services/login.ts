/** @format */
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "@/db/schemas/user";
import { cookies } from "next/headers";

export const login = async (email: string, password: string) => {
  const passwordDB = await User.findOne({ email }).select({ password: 1 });

  if (!passwordDB) {
    throw new Error("🔴 User not found");
  }

  if (!(await bcrypt.compare(password, passwordDB.password))) {
    throw new Error("🔴 Password does not match");
  }

  const secret = process.env.JWT_SECRET || "secret";

  const token = jwt.sign({ email }, secret);

  cookies().set("user", token);

  return "The user has successfully logged in";
};
