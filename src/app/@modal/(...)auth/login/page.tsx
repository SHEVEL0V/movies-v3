/** @format */
"use client";
import Link from "next/link";
import Modal from "@/components/modal";
import React, { useState, FormEvent } from "react";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";
import { PATH } from "@/router";

import Button from "@mui/material/Button";

export default function Login() {
  const [message, setMessage] = useState("");
  const router = useRouter();
  // const pathName = usePathname();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const response = await fetch("/api/user/login", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data) {
      setMessage(data.message);
      router.push("/user");
    }
  };

  return (
    <Modal>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 p-4 rounded shadow bg-bgWhiteFirst"
      >
        <p>{message}</p>
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
    </Modal>
  );
}
