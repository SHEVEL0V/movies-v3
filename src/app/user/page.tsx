/** @format */

import React from "react";
import { isAuth } from "@/firebase/server";
import UpdateUserForm from "@/components/form/updateUser";
import Image from "next/image";

export default async function User() {
  const user = await isAuth();

  return (
    <div className=" flex gap-2 bg-bgWhiteSecond dark:bg-bgDarkThird">
      <div className="p-2">
        <Image
          src={user?.photoURL || ""}
          alt="user image"
          width={300}
          height={300}
          priority={true}
        />
      </div>

      <UpdateUserForm
        uid={user?.uid || "none"}
        name={user?.displayName}
        phone={user?.phoneNumber}
      />
    </div>
  );
}
