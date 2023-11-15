/** @format */
import React from "react";
import Link from "next/link";
import { movies } from "@/services/fetch";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

export default async function Genres() {
  const data = await movies.getGenres();

  return (
    <ul className="grid  gap-2 sm:grid-cols-2">
      {data.genres.map((el: { id: number; name: string }, ind: number) => (
        <Link
          href={"/genres/" + el.name.toLocaleLowerCase() + "?id=" + el.id}
          key={ind}
          className="flex p-2  rounded shadow bg-bgWhiteSecond dark:bg-bgDarkThird hover:bg-bgDarkThird/60"
        >
          <ArrowRightIcon />
          {el.name}
          <FolderOpenIcon className="ml-auto" />
        </Link>
      ))}
    </ul>
  );
}
