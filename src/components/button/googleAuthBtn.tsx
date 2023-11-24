/** @format */
"use client";
import React from "react";
import Fab from "@mui/material/Fab";

import GoogleIcon from "@mui/icons-material/Google";
import { loginGoogle } from "@/firebase/client";
import { useRouter } from "next/navigation";

export default function GoogleAuthBtn() {
  const router = useRouter();
  const handelAuth = () =>
    loginGoogle()
      .then(() => router.back())
      .catch((err) => alert(err));

  return (
    <Fab size="small" aria-label="googleAuth" onClick={() => handelAuth()}>
      <GoogleIcon />
    </Fab>
  );
}
