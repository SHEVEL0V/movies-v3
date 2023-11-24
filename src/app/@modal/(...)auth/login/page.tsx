/** @format */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { PATH } from "@/router";
import Button from "@mui/material/Button";
import { login } from "@/firebase/client";
import Modal from "@/components/modal";
import { useRouter } from "next/navigation";
import GoogleAuthBtn from "@/components/button/googleAuthBtn";

export default function Login() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  const action = async (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    login(email as string, password as string)
      .then(() => router.back())
      .catch(() => setMessage("🔴 Wrong login or password"));
  };

  return (
    <Modal>
      <form
        action={action}
        className="max-w-[600px]  flex flex-col gap-3 p-4 rounded shadow bg-bgWhiteFirst"
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
        <Button type="submit" className="bg-bgWhiteSecond border shadow rounded p-2">
          sign in
        </Button>
        <div className="flex  items-center">
          <Link href={PATH.REGISTER} className="font-bold text-blue mr-auto">
            Sign up
          </Link>
          <GoogleAuthBtn />
        </div>
      </form>
    </Modal>
  );
}
