/** @format */

import Navigate from "./navigate";

export default async function Sidebar() {
  return (
    <aside className="flex flex-col  rounded p-2 mr-2  bg-bgWhiteSecond dark:bg-bgDarkThird">
      <Navigate />
    </aside>
  );
}
