/** @format */

import React from "react";
import { isAuth } from "@/firebase/server";
import UpdateUserForm from "@/components/form/updateUser";
import Image from "next/image";
import avatar from "@/assets/avatar.png";

export default async function User() {
  const user = await isAuth();

  return (
    <div className=" sm:flex h-full rounded gap-2 bg-bgWhiteSecond dark:bg-bgDarkThird">
      <div className="p-2">
        <Image
          className="rounded shadow"
          src={user?.photoURL || avatar}
          alt="user image"
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <div>
        <div className="p-2 mt-4">{user?.email}</div>
        <UpdateUserForm
          uid={user?.uid || "none"}
          name={user?.displayName}
          phone={user?.phoneNumber}
        />
      </div>
    </div>
  );
}
