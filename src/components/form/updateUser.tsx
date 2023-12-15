/** @format */
"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { updateUser } from "@/firebase/server";
import LoadingBtn from "../button/loadingBtn";

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

  const action = async (formData: FormData) => {
    const res = await updateUser(uid, form);

    alert(res);
  };

  return (
    <form action={action} className="w-full p-2 flex flex-col gap-4">
      <TextField
        name="name"
        label="name"
        type="text"
        autoComplete="username"
        variant="standard"
        color="info"
        value={form.name || ""}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <TextField
        name="phone"
        label="phone"
        type="phone"
        autoComplete=""
        variant="standard"
        color="info"
        error={form.phone?.length === 12}
        value={form.phone || ""}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <TextField
        name="password"
        label="password"
        type="password"
        variant="standard"
        color="info"
        autoComplete="current-password"
        error={!!form.password && form.password?.length < 4}
        value={form.password || ""}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <LoadingBtn title="  Update" />
    </form>
  );
}
