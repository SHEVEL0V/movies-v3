/** @format */

import React from "react";
import CardFilm from "@/components/card/cardMovie";
import Pag from "./pagination";

import type { MovieType } from "@/types";

type Props = { data: MovieType[] };

export default function ListMovies({ data }: Props) {
  return (
    <div>
      <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 ">
        {data && data.map((el, i: number) => <CardFilm key={i} movie={el} />)}
      </div>
      <Pag />
    </div>
  );
}
