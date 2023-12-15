/** @format */
import React from "react";

export default function Container({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div
      className="mx-auto flex max-w-[1280px] h-[calc(100vh-8px)] p-3 rounded-2xl shadow 
     bg-bgWhiteFirst text-textBlack  dark:bg-bgDarkSecond dark:text-textWhite"
    >
      {children}
    </div>
  );
}
