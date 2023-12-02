/** @format */
"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { login, create } from "@/firebase/client";
import Modal from "@/components/modal";
import { useRouter } from "next/navigation";
import GoogleAuthBtn from "@/components/button/googleAuthBtn";
import LinearProgress from "@mui/material/LinearProgress";

export default function Login() {
  const router = useRouter();
  const [status, setStatus] = useState(true);
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const action = async (formData: FormData) => {
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const password2 = String(formData.get("password2"));
    setLoader(true);
    status
      ? await login(email as string, password as string)
          .then(() => router.back())
          .catch(() => setMessage("🔴 Wrong login or password"))
      : password == password2
      ? await create(email, password)
          .then(() => router.back())
          .catch(() => setMessage("🚫 User not created."))
      : setMessage("🚫 The passwords is incompatible");
    setLoader(false);
  };

  console.log(loader);

  return (
    <Modal>
      <form
        action={action}
        className="max-w-[600px]  flex flex-col gap-3 p-4 rounded shadow bg-bgWhiteFirst"
      >
        {loader ? <LinearProgress /> : <div className="text-textBlack">{message}</div>}
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

        <Button
          disabled={loader}
          type="submit"
          className="bg-bgWhiteSecond border shadow rounded p-2 mt-4"
        >
          {status ? "Sing in" : "Sign up"}
        </Button>
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
