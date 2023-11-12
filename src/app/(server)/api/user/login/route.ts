/** @format */

import response from "@/helpers/response";
import { login } from "@/db/services/login";
import { connectDB } from "@/db/connect";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || email === "") {
      throw new Error("🔴 Email field is missing ");
    }
    if (!password || password === "") {
      throw new Error("🔴 Password field is missing ");
    }

    await connectDB();

    const message = await login(email, password);
    return response(message, 200);
  } catch (err) {
    return response((err as Error).message, 400);
  }
}
