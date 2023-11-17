/** @format */
"use client";
import MenuBtn from "@/components/button/menuBtn";
import { useRouter, usePathname } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SortIcon from "@mui/icons-material/Sort";

import { PATH } from "@/router";

export default function Navigate() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className=" flex flex-col gap-3">
      <MenuBtn
        name="Home"
        title="Home"
        path={pathname}
        onClick={() => router.push(PATH.HOME)}
      >
        <HomeIcon />
      </MenuBtn>
      <MenuBtn
        name="Favorite"
        title="Favorite"
        path={pathname}
        onClick={() => router.push(PATH.FAVORITES)}
      >
        <FavoriteIcon />
      </MenuBtn>
      <MenuBtn
        name="Genre"
        title="Genre"
        path={pathname}
        onClick={() => router.push(PATH.GENRE)}
      >
        <SortIcon />
      </MenuBtn>
    </nav>
  );
}
