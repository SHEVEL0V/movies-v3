/** @format */

import ListMovies from "@/components/listMovies";
import { movies } from "@/services/fetch";
import React from "react";

type P = {
  searchParams: {
    page: string;
    id: string;
  };
};

export default async function Genre({ searchParams }: P) {
  const { page, id } = searchParams;

  const data = await movies.getByGenreId(id, page);

  return <ListMovies data={data.results} />;
}
