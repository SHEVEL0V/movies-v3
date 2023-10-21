/** @format */
"use client";
import MenuBtn from "@/components/button/menuBtn";
import { useRouter, usePathname } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SortIcon from "@mui/icons-material/Sort";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import ThemSwitches from "@/components/switch/them";
import { PATH } from "@/router/path";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className="flex flex-col  rounded p-2 gap-3 bg-bgWhiteSecond dark:bg-bgDarkThird">
      <MenuBtn
        title="Home"
        path={pathname}
        onClick={() => router.push(PATH.HOME)}
      >
        <HomeIcon />
      </MenuBtn>
      <MenuBtn
        title="Favorite"
        path={pathname}
        onClick={() => router.push(PATH.FAVORITES)}
      >
        <FavoriteIcon />
      </MenuBtn>
      <MenuBtn
        title="Genre"
        path={pathname}
        onClick={() => router.push(PATH.GENRE)}
      >
        <SortIcon />
      </MenuBtn>
      <MenuBtn
        title="Actors"
        path={pathname}
        onClick={() => router.push(PATH.ACTORS)}
      >
        <RecentActorsIcon />
      </MenuBtn>
      <div className="ml-auto">
        <ThemSwitches />
      </div>

      <div
        className="flex items-center justify-center w-14 h-14  ml-auto mr-auto mt-auto rounded-full bg-white "
        onClick={() => router.push(PATH.ACCOUNT.LOGIN)}
      >
        user
      </div>
    </aside>
  );
}
