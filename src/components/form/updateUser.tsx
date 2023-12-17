/** @format */
"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { updateUser } from "@/firebase/server";
import LoadingBtn from "../button/loadingBtn";
import { validateUser } from "@/helpers/validation";

type P = {
  uid: string;
  name?: string;
  phone?: string;
};

type FormType = { name?: string; phone?: string; password?: string };

export default function UpdateUserForm({ name, phone, uid }: P) {
  const [form, setForm] = useState<FormType>({
    name,
    phone,
  });
  const [message, setMessage] = useState<{ [field: string]: string[] }>({});

  const action = async (formData: FormData) => {
    const validForm = validateUser(form);

    if (validForm.success) {
      const res = await updateUser(uid, form);
      alert(res);
    } else {
      setMessage(validForm.error.flatten().fieldErrors);
    }
  };

  return (
    <form action={action} className="w-full p-2 flex flex-col gap-4">
      <TextField
        name="name"
        label={message["name"] || "name"}
        type="text"
        autoComplete="username"
        variant="standard"
        color="info"
        error={!!message["name"]}
        value={form.name || ""}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <TextField
        name="phone"
        label={message["phone"] || "phone"}
        type="phone"
        autoComplete=""
        variant="standard"
        color="info"
        error={!!message["phone"]}
        value={form.phone || ""}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <TextField
        name="password"
        label={message["password"] || "password"}
        type="password"
        variant="standard"
        color="info"
        error={!!message["password"]}
        autoComplete="current-password"
        value={form.password || ""}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <LoadingBtn title="  Update" />
    </form>
  );
}
