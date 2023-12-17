/** @format */

import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("This is not valid email"),
  password: z
    .string()
    .min(6, "This is  password length < 6")
    .max(30, "This is password length > 30"),

  password_again: z.string().optional(),
});

const userSchema = z.object({
  name: z.string(),
  password: z
    .string()
    .min(6, "This is  password length < 6")
    .max(30, "This is password length > 30")
    .optional(),

  phone: z.string().length(13, "The phone number must consist of 13 characters"),
});

export const validateLogin = loginSchema.safeParse;

export const validateUser = userSchema.safeParse;
