/** @format */

import React from "react";
import CardFilm from "@/components/card/cardMovie";
import Pag from "./pagination";
import Filter from "@/components/filter";
import type { MovieType } from "@/types";
import { getMovie } from "@/firebase/server";

type Props = { data: { results: MovieType[]; total_pages: number } };

export default async function ListMovies({ data }: Props) {
  const fav = (await getMovie()).map((movie) => movie.id);

  return (
    <div className="flex flex-col overflow-auto  ">
      <Filter />
      <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-2 ">
        {data.results.map((el, i: number) => (
          <CardFilm key={i} movie={el} fav={fav} />
        ))}
      </div>
      <div className="mt-2"></div>
      <Pag qtyPage={data.total_pages} />
    </div>
  );
}
