/** @format */
"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

type Props = {
  title: string;
};

export default function OptionsBtn({ title }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <button
      className="bg-yellow/50 border rounded shadow p-2 active:bg-yellow/70"
      onClick={() => router.push(pathname + "/credits")}
    >
      {title}
    </button>
  );
}
