/** @format */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useRouter, redirect } from "next/navigation";
import { PATH } from "@/router";

import Button from "@mui/material/Button";
import { login } from "@/db/services/auth/login";
import Modal from "@/components/modal";

export default function Banner() {
  return (
    <Modal>
      <Image src={"/"} height={500} width={500} alt="" />
    </Modal>
  );
}
