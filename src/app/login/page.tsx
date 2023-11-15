/** @format */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { PATH } from "@/router";

import Button from "@mui/material/Button";
import { login } from "@/db/services/login";

export default function Login() {
  const [message, setMessage] = useState("");

  const action = async (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await login(email as string, password as string);

    setMessage(res);
  };

  return (
    <form
      action={action}
      className="w-full flex flex-col gap-3 p-4 rounded shadow bg-white"
    >
      <p className="text-textBlack">{message}</p>
      <TextField
        name="email"
        label="email"
        type="email"
        autoComplete="current-email"
        variant="standard"
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
      />
      <Button
        type="submit"
        className="bg-bgWhiteSecond border shadow rounded p-2"
      >
        sign in
      </Button>
      <Link href={PATH.REGISTER} className="font-bold text-blue">
        Sign up
      </Link>
    </form>
  );
}
