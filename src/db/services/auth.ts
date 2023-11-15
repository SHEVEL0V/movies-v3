/** @format */
"use server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const res = (message = "message", status = false) => ({
  message,
  status,
});

export const auth = () => {
  const secret = process.env.JWT_SECRET || "secret";
  const user = cookies().get("user");

  const token = user?.value as string;

  if (!token) {
    return res("🔴 Auntefication error , please add token");
  }

  const verify = jwt.verify(token, secret);

  if (verify) {
    console.log("🚀 User authenticated");

    return res("Auntefication success", true);
  }
  return res("🔴 Auntefication error ");
};
