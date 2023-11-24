/** @format */

import React from "react";
import ThemSwitches from "@/components/switch/them";
import UserBtn from "../button/userBtn";
import Link from "next/link";
import { PATH } from "@/router";
import InputSearch from "./inputSerch";

export default function Header({ user }: { user?: string }) {
  return (
    <div className="flex mb-2 p-2  bg-bgWhiteSecond dark:bg-bgDarkThird rounded">
      <InputSearch />
      <div className="ml-auto flex">
        {/* <ThemSwitches /> */}
        {user ? (
          <UserBtn />
        ) : (
          <Link href={PATH.LOGIN} className="flex items-center pr-2 ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
