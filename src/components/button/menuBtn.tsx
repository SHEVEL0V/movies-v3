/** @format */

import React from "react";

type Props = {
  children?: React.ReactNode;
  title: string;
  path: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function MenuBtn({ children, title, path, onClick }: Props) {
  const disabled =
    path.includes(title.toLocaleLowerCase()) ||
    (path === "/" && title === "Home")
      ? "shadow shadow-bgDarkSecond bg-bgDarkSecond  dark:bg-bgWhiteFirst dark:shadow-white  "
      : "";

  return (
    <button className="flex items-center " onClick={onClick}>
      <div className={`w-2 h-full mr-1   rounded ${disabled}`}></div>
      {children}
      <div className="ml-2">{title}</div>
    </button>
  );
}
