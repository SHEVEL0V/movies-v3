/** @format */

import { auth } from "@/db/services/auth/authorization";
import { getUser } from "@/db/services/auth/getUser";
import Image from "next/image";
import React from "react";

export default async function User() {
  const id = auth().userID;

  if (!id) {
    return <>Pleas authorization</>;
  }

  const user = await getUser(id);

  return (
    <div className=" flex gap-2 bg-bgWhiteSecond dark:bg-bgDarkThird">
      <div className="p-2">
        <div className="bg-yellow/50 w-[400px] h-[500px] rounded"></div>
      </div>

      {/* <Image
        // placeholder="blur"
        src={user.avatarURL}
        height={500}
        width={500}
        alt={user.name}
      /> */}
      <div className="p-2 flex flex-col gap-2">
        <div className="p-2 rounded min-w-[400px] bg-bgWhiteFirst dark:bg-bgDarkSecond">
          {user?.name}
        </div>
        <div className="p-2 rounded min-w-[400px] bg-bgWhiteFirst dark:bg-bgDarkSecond">
          {user?.email}
        </div>
      </div>
    </div>
  );
}
