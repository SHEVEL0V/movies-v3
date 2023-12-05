/** @format */
"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { login, create } from "@/firebase/client";
import Modal from "@/components/modal";
import { useRouter } from "next/navigation";
import GoogleAuthBtn from "@/components/button/googleAuthBtn";

export default function Login() {
  const router = useRouter();
  const [status, setStatus] = useState(true);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const action = async (formData: FormData) => {
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const password2 = String(formData.get("password2"));
    setLoading(true);
    status
      ? await login(email as string, password as string)
          .then(() => router.back())
          .catch(() => setMessage("🔴 Wrong login or password"))
      : password == password2
      ? await create(email, password)
          .then(() => router.back())
          .catch(() => setMessage("🚫 User not created."))
      : setMessage("🚫 The passwords is incompatible");
    setLoading(false);
  };

  return (
    <Modal>
      <form
        action={action}
        className="max-w-[600px]  flex flex-col gap-3 p-4 rounded shadow bg-bgWhiteFirst"
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

        <LoadingButton
          disabled={loading}
          type="submit"
          loading={loading}
          className="bg-bgWhiteSecond border shadow rounded p-2 mt-4"
        >
          {status ? "Sing in" : "Sign up"}
        </LoadingButton>
        <div className="flex  items-center">
          <button
            className="font-bold text-blue mr-auto"
            onClick={() => setStatus(!status)}
          >
            {status ? "Sign up" : "Sing in"}
          </button>
          <GoogleAuthBtn />
        </div>
      </form>
    </Modal>
  );
}
