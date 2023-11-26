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
  const [focus, setFocus] = useState(false);

  const router = useRouter();

  const handlerRoute = () => router.push(PATH.SEARCH + "?" + "query=" + value);

  return (
    <div
      className="flex border rounded border-bgDarkSecond dark:border-bgWhiteSecond
 hover:dark:bg-bgDarkSecond focus-within:dark:bg-bgDarkSecond hover:bg-bgWhiteFirst focus-within:bg-bgWhiteFirst transition-all duration-300"
    >
      <InputBase
        onFocus={() => setFocus(true)}
        onBlur={() => !value && setFocus(false)}
        style={{ marginRight: focus ? "30px" : "" }}
        className="m-2 text-textBlack dark:text-textWhite transition-all duration-300 "
        placeholder="search"
        inputProps={{ "aria-label": "search input" }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton
        disabled={!value}
        className="mr-auto"
        type="button"
        onClick={handlerRoute}
      >
        <SearchIcon className="fill-textBlack dark:fill-textWhite" />
      </IconButton>
    </div>
  );
}
