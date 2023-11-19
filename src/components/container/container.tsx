/** @format */
import React from "react";

export default function Container({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div
      className="flex  m-2 w-[1280px] h-[98vh]  p-4 rounded-2xl shadow
     bg-bgWhiteFirst text-textBlack  dark:bg-bgDarkSecond dark:text-textWhite"
    >
      {children}
    </div>
  );
}
