/** @format */

import React from "react";

export default function Container({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className=" flex w-[1280px] min-h-screen p-4 rounded-2xl
     bg-bgWhiteFirst text-textBlack  dark:bg-bgDarkSecond dark:text-textWhite" >
      {children}
    </div>
  );
}
