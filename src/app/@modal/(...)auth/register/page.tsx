/** @format */
"use client";
import Modal from "@/components/modal";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { PATH } from "@/router";
import Button from "@mui/material/Button";
import { create } from "@/firebase/client";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  const action = async (formData: FormData) => {
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const password2 = String(formData.get("password2"));

    if (password == password2) {
      await create(email, password)
        .then(() => router.back())
        .catch(() => setMessage("🚫 User not created."));
    } else {
      setMessage("🚫 The passwords is incompatible");
    }
  };

  return (
    <Modal>
      <form
        action={action}
        className="flex max-w-[600px] flex-col gap-3 p-4 rounded shadow bg-bgWhiteFirst"
      >
        <p className="text-textBlack">{message}</p>
        <TextField
          name="email"
          label="email"
          type="email"
          autoComplete="current-email"
          variant="standard"
          required={true}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          required={true}
        />
        <TextField
          name="password2"
          label="Password again"
          type="password"
          autoComplete="current-password"
          variant="standard"
          required={true}
        />
        <Button
          type="submit"
          className="bg-bgWhiteSecond active:bg-bgWhiteFirst border shadow rounded p-2"
        >
          sign up
        </Button>
        <Link href={PATH.LOGIN} className="font-bold text-blue">
          Sign in
        </Link>
      </form>
    </Modal>
  );
}
