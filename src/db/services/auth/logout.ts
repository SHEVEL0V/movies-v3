/** @format */

"use server";

import { cookies } from "next/headers";

export const logout = async () => {
  console.log("🔐 User logout");

  cookies().delete("user");
};
