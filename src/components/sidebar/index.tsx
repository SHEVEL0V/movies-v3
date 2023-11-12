/** @format */

import ProfileBtn from "../button/userBtn";
import LoginBtn from "../button/loginBtn";

import Navigate from "./navigate";
import { auth } from "@/db/services/auth";
import UserBtn from "../button/userBtn";

export default async function Sidebar() {
  const auntefication = await auth();

  return (
    <aside className="flex flex-col  rounded p-2  bg-bgWhiteSecond dark:bg-bgDarkThird">
      <Navigate />
      {auntefication.status ? <UserBtn /> : <LoginBtn />}
    </aside>
  );
}
