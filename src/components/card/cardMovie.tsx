/** @format */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getBaseUrlImg } from "@/helpers/geUrlImg";
import { PATH } from "@/router";

import type { MovieType } from "@/types";
import FavoriteBtn from "../button/favoriteBtn";

type Props = { movie: MovieType };

export default function CardMovie({ movie }: Props) {
  const { id, backdrop_path, title, vote_average } = movie;

  const img = getBaseUrlImg(backdrop_path);

  const path = title.split(" ").join("");

  return (
    <div className="relative overflow-hidden  rounded-lg shadow ">
      <Link href={PATH.MOVIE.DEFAULT(path + "-" + id)}>
        <Image src={img} width={500} height={500} alt={title} />
        <div className="absolute bottom-0 p-3 w-full rounded-lg bg-bgWhiteSecond/50 dark:bg-bgDarkSecond/60 font-bold ">
          <h3>{title}</h3>
        </div>
        <div className="absolute top-2 right-2 rounded w-8 px-1 bg-yellow text-textBlack">
          {vote_average.toFixed(1)}
        </div>
      </Link>
      <FavoriteBtn movie={movie} />
    </div>
  );
}
