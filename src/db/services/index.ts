/** @format */
"use server";
import mongoose from "mongoose";

import { auth } from "./auth";
import { create } from "./create";
import { login } from "./login";
import response from "@/helpers/response";

const connectString = process.env.MONGODB_KEY || "";

const middleware = <T>(value?: T) => {
  try {
    mongoose.connect(connectString);

    response("success", 200);
  } catch (err) {
    console.log("🔴", err);
    response("failed", 400);
  }
};

export const userService = {
  create,
  login: middleware(login),
  auth,
};
