/** @format */

import React from "react";
import CardFilm from "@/components/card/cardFilm";

import type { Movie } from "@/types";
type Props = { data: Movie[] };

export default function ListMovies({ data }: Props) {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 ">
      {data.map((el, i: number) => (
        <CardFilm key={i} movie={el} />
      ))}
    </div>
  );
}
