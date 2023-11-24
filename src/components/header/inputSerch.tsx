/** @format */
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { PATH } from "@/router";

export default function InputSearch() {
  const [value, setValue] = useState("");

  const router = useRouter();

  const handlerRoute = () => value && router.push(PATH.SEARCH + "?" + "query=" + value);

  return (
    <div
      className="flex border rounded border-bgDarkSecond dark:border-bgWhiteSecond
 hover:dark:bg-bgDarkSecond hover:bg-bgWhiteFirst 
  transition-all duration-500"
    >
      <InputBase
        className="m-2 text-textBlack dark:text-textWhite "
        placeholder="search"
        inputProps={{ "aria-label": "search input" }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton className="mr-auto" type="button" onClick={handlerRoute}>
        <SearchIcon className="fill-textBlack dark:fill-textWhite" />
      </IconButton>
    </div>
  );
}
