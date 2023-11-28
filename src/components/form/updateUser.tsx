/** @format */
"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { updateUser } from "@/firebase/server";
import Button from "@mui/material/Button";

type P = {
  uid: string;
  name?: string;
  phone?: string;
};

export default function UpdateUserForm({ name, phone, uid }: P) {
  const [form, setForm] = useState({
    name: name || "",
    phone: phone || "",
    password: "",
  });

  const action = async (formData: FormData) => {
    const res = await updateUser(uid, form);

    alert(res);
  };

  return (
    <form action={action} className="p-2 flex flex-col gap-2">
      <TextField
        name="name"
        label="name"
        type="text"
        variant="standard"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <TextField
        name="phone"
        label="phone"
        type="phone"
        variant="standard"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <TextField
        name="password"
        label="password"
        type="password"
        variant="standard"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <Button className="mt-6" type="submit" color="inherit" variant="outlined">
        Outlined
      </Button>
    </form>
  );
}
