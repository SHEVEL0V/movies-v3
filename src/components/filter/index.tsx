/** @format */
"use client";
import React from "react";
import { useParams } from "@/hooks/useParams";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { usePathname } from "next/navigation";

const button = [
  { param: "popularity.desc", title: "Popular", svg: <ArrowDropDownIcon /> },
  { param: "popularity.asc", title: "Popular", svg: <ArrowDropUpIcon /> },
  {
    param: "release_date.desc",
    title: "Release",
    svg: <ArrowDropDownIcon />,
  },
  { param: "release_date.asc", title: "Release", svg: <ArrowDropUpIcon /> },
];

export default function Filter() {
  const { add } = useParams();

  if (!usePathname().split("/").includes("genres")) {
    return;
  }

  return (
    <div className="flex flex-wrap gap-2 items-center rounded mb-2 p-1 dark:bg-bgDarkThird ">
      Filter:
      {button.map((e, i) => (
        <button
          key={i}
          type="button"
          className=" rounded p-1 shadow bg-bgDarkSecond hover:bg-bgDarkFirst/70 active:scale-95"
          onClick={() => add("sort_by", e.param)}
        >
          {e.title}
          {e.svg}
        </button>
      ))}
    </div>
  );
}
