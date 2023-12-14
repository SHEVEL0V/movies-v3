/** @format */
"use client";
import React, { useState } from "react";
import Modal from "@/components/modal";
import TextField from "@mui/material/TextField";
import { login, create } from "@/firebase/client";
import { useRouter } from "next/navigation";
import GoogleAuthBtn from "@/components/button/googleAuthBtn";
import LoadingBtn from "@/components/button/loadingBtn";

export default function Login() {
  const router = useRouter();
  const [status, setStatus] = useState(true);

  const action = async (formData: FormData) => {
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const password2 = String(formData.get("password2"));

    status
      ? await login(email as string, password as string)
          .then(() => router.back())
          .catch(() => alert("🔴 Wrong login or password"))
      : password == password2
      ? await create(email, password)
          .then(() => router.back())
          .catch(() => alert("🚫 User not created."))
      : alert("🚫 The passwords is incompatible");
  };

  return (
    <Modal>
      <form
        action={action}
        className="max-w-[600px]  flex flex-col gap-3 p-4 rounded shadow bg-bgWhiteFirst dark:bg-bgDarkFirst"
      >
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
        {!status && (
          <TextField
            name="password2"
            label="Password again"
            type="password"
            autoComplete="current-password"
            variant="standard"
            required={true}
          />
        )}

        <LoadingBtn title={!status ? "Sing in" : "Sign up"} />
        <div className="flex  items-center">
          <button
            type="button"
            className=" hover:text-blue  mr-auto"
            onClick={() => setStatus(!status)}
          >
            {status ? "Sing in" : "Sign up"}
          </button>
          <GoogleAuthBtn />
        </div>
      </form>
    </Modal>
  );
}
