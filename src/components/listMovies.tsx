/** @format */

import React from "react";
import CardFilm from "@/components/card/cardMovie";
import Pag from "./pagination";
import { auth } from "@/db/services/auth/authorization";

import type { MovieType } from "@/types";

type Props = { data: { results: MovieType[]; total_pages: number } };

export default function ListMovies({ data }: Props) {
  const authentication = auth();

  return (
    <div className="flex flex-col h-[90%]">
      <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-2 ">
        {data.results.map((el, i: number) => (
          <CardFilm key={i} movie={el} auth={authentication} />
        ))}
      </div>
      <div className="mt-2"></div>
      <Pag qtyPage={data.total_pages} />
    </div>
  );
}
