/** @format */
"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { LoadingButton } from "@mui/lab";

type Props = { title: string };

export default function LoadingBtn({ title }: Props) {
  const { pending } = useFormStatus();
  return (
    <LoadingButton
      className="mt-4 hover:bg-bgWhiteSecond dark:hover:bg-bgDarkSecond"
      color="inherit"
      variant="contained"
      loading={pending}
      type="submit"
    >
      {title}
    </LoadingButton>
  );
}
