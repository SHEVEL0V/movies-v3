/** @format */

import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

type Props = {
  children?: React.ReactNode;
  title: string;
  name: string;
  path: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function MenuBtn({
  children,
  title,
  name,
  path,
  onClick,
}: Props) {
  const disabled =
    path.includes(name.toLocaleLowerCase()) || (path === "/" && name === "Home")
      ? "shadow shadow-bgDarkSecond bg-bgDarkSecond  dark:bg-bgWhiteFirst dark:shadow-white  "
      : "";

  const matches = useMediaQuery("(min-width:600px)");

  return (
    <button className="flex items-center " onClick={onClick}>
      <div className={`w-2 h-full mr-1   rounded ${disabled}`}></div>
      {children}
      <div className="ml-2">{matches && title}</div>
    </button>
  );
}
