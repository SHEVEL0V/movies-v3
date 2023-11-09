/** @format */
"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const isAuth = () => {
  const token = cookies().get("user")?.value;

  return token ? jwt.verify(token, process.env.JWT_SECRET || "") : false;
};
