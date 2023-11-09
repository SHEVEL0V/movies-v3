/** @format */

import ProfileBtn from "../button/profileBtn";
import LoginBtn from "../button/loginBtn";

import Navigate from "./navigate";
import { movies } from "@/services/fetch";

export default async function Sidebar() {
  const auth = await movies.auth();

  return (
    <aside className="flex flex-col  rounded p-2  bg-bgWhiteSecond dark:bg-bgDarkThird">
      <Navigate />
      {auth.success ? <ProfileBtn /> : <LoginBtn />}
    </aside>
  );
}
