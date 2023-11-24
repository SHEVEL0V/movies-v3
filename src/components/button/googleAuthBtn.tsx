/** @format */
"use client";
import React from "react";
import Fab from "@mui/material/Fab";
import { loginGoogle } from "@/firebase/client";
import { useRouter } from "next/navigation";
import Image from "next/image";

import img from "../../assets/google-svgrepo-com.svg";

export default function GoogleAuthBtn() {
  const router = useRouter();
  const handelAuth = () =>
    loginGoogle()
      .then(() => router.back())
      .catch((err) => alert(err));

  return (
    <Fab size="small" aria-label="googleAuth" onClick={() => handelAuth()}>
      <Image src={img} alt="google svg" />
    </Fab>
  );
}
