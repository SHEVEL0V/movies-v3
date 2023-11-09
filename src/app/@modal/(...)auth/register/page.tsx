/** @format */
"use client";
import Modal from "@/components/modal";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { userService } from "@/db/services";
import Link from "next/link";
import { PATH } from "@/router";
import { useRouter } from "next/navigation";

import Button from "@mui/material/Button";

export default function Login() {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const action = async (formData: FormData) => {
    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const password2 = String(formData.get("password2"));

    const res = await userService.create({ name, email, password, password2 });

    setMessage(res.message);

    if (res.status) {
      router.push(PATH.LOGIN);
    }
  };
  return (
    <Modal>
      <form
        action={action}
        className="flex flex-col gap-3 p-4 rounded shadow bg-bgWhiteFirst"
      >
        <p>{message}</p>
        <TextField
          name="name"
          label="name"
          type="name"
          autoComplete="text"
          variant="standard"
          required={true}
        />
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
