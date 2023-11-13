/** @format */
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import ThemSwitches from "@/components/switch/them";
import UserBtn from "../button/userBtn";
import Link from "next/link";
import { PATH } from "@/router";

export default function InputSearch({ auth }: { auth: boolean }) {
  const [value, setValue] = useState("");

  const router = useRouter();

  const handlerRoute = () => router.push(PATH.SEARCH + "?" + "query=" + value);

  return (
    <div className="flex mb-2 p-2 bg-bgWhiteSecond dark:bg-bgDarkThird rounded">
      <div
        className="border rounded border-bgDarkSecond dark:border-bgWhiteSecond
       hover:dark:bg-bgDarkSecond hover:bg-bgWhiteFirst "
      >
        <InputBase
          className="m-2 text-textBlack dark:text-textWhite "
          placeholder="search"
          inputProps={{ "aria-label": "search input" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <IconButton type="button" onClick={handlerRoute}>
          <SearchIcon className="fill-textBlack dark:fill-textWhite" />
        </IconButton>
      </div>
      <div className="ml-auto flex">
        <ThemSwitches />
        {auth ? (
          <UserBtn />
        ) : (
          <Link href={PATH.LOGIN} className="flex items-center  ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
