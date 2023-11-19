/** @format */
"use server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

import { AuthType } from "@/types";

const res = (status = false, email = "", userID = "") => {
  return {
    email,
    userID,
    status,
  };
};

export const auth = () => {
  const secret = process.env.JWT_SECRET || "secret";
  const user = cookies().get("user");

  const token = user?.value as string;

  if (!token) {
    console.log("🚫 Auntefication error , please add token");
    return res(false);
  }

  const verify = jwt.verify(token, secret);

  if (verify) {
    console.log("🔑 Auth");

    return res(true, (verify as AuthType).email, (verify as AuthType).userID);
  }
  console.log("🚫 Auntefication error ");
  return res(false);
};
