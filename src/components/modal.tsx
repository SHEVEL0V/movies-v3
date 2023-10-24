/** @format */

import React from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen bg-bgDarkThird/50 absolute z-50">
      <div className="w-[500px] min-h-[500px] mx-auto mt-[100px] bg-bgWhiteSecond rounded shadow">
        {children}
      </div>
    </div>
  );
}
