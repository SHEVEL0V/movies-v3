/** @format */

import { create } from "./create";
import { login } from "./login";

import { connectDB } from "@/db/connect";

const middleware = <T>(value: T) => {
  try {
    connectDB();
    return value;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const userService = {
  create: middleware(create),
  login: middleware(login),
};
