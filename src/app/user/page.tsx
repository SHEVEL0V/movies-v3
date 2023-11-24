/** @format */

import React from "react";
import { isAuth } from "@/firebase/server";
import UpdateUserForm from "@/components/form/updateUser";

export default async function User() {
  const user = await isAuth();

  return (
    <div className=" flex gap-2 bg-bgWhiteSecond dark:bg-bgDarkThird">
      <div className="p-2">
        <div className="bg-yellow/50 w-[400px] h-[500px] rounded"></div>
      </div>

      <UpdateUserForm
        uid={user?.uid || "none"}
        name={user?.displayName}
        phone={user?.phoneNumber}
        url={user?.photoURL}
      />
    </div>
  );
}
