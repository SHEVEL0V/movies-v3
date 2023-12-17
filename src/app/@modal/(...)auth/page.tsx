/** @format */
"use client";
import React, { useState } from "react";
import Modal from "@/components/modal";
import TextField from "@mui/material/TextField";
import { login, create } from "@/firebase/client";
import { useRouter } from "next/navigation";
import GoogleAuthBtn from "@/components/button/googleAuthBtn";
import LoadingBtn from "@/components/button/loadingBtn";
import { validateLogin } from "@/helpers/validation";

export default function Login() {
  const router = useRouter();
  const [status, setStatus] = useState(true);
  const [form, setForm] = useState({ email: "", password: "", password_again: "" });
  const [message, setMessage] = useState<{ [field: string]: string[] }>({});

  const action = async () => {
    // const form = Object.fromEntries(formData);
    const validForm = validateLogin(form);

    if (validForm.success) {
      status
        ? await login(validForm.data)
            .then(() => router.back())
            .catch(() => alert("🔴 Wrong login or password"))
        : await create(validForm.data)
            .then(() => router.back())
            .catch(() => alert("🚫 User not created."));
    } else {
      setMessage(validForm.error.flatten().fieldErrors);
    }
  };

  return (
    <Modal>
      <form
        action={action}
        className="max-w-[600px] flex flex-col gap-4  p-4 rounded shadow bg-bgWhiteFirst dark:bg-bgDarkFirst"
      >
        <TextField
          name="email"
          label={message["email"] || "email"}
          type="email"
          variant="standard"
          required
          error={!!message["email"]}
          fullWidth
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <TextField
          name="password"
          label={message["password"] || "password"}
          type="password"
          variant="standard"
          required
          error={!!message["password"]}
          fullWidth
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {!status && (
          <TextField
            name={"password_again"}
            label={message["password_again"] || "password_again"}
            type="password"
            variant="standard"
            required
            error={form.password !== form.password_again}
            fullWidth
            value={form.password_again}
            onChange={(e) => setForm({ ...form, password_again: e.target.value })}
          />
        )}
        <div className="h-1"></div>
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
