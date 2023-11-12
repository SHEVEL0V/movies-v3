/** @format */

import React from "react";
import Link from "next/link";
import { PATH } from "@/router";

export default function UserBtn() {
  return (
    <Link
      href={PATH.USER}
      className="flex items-center justify-center w-14 h-14  ml-auto mr-auto mt-auto rounded-full bg-bgDarkSecond "
    >
      user
    </Link>
  );
}
