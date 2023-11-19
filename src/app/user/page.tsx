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
    <div className=" flex bg-bgWhiteSecond">
      <Image
        placeholder="blur"
        src={user.avatarURL}
        height={500}
        width={500}
        alt={user.name}
      />
      <div>
        <div>{user.name}</div>
        <div>{user.email}</div>
      </div>
    </div>
  );
}
