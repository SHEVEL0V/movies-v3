/** @format */

import ListMovies from "@/components/listMovies";
import { movies } from "@/fetch";

type Params = {
  searchParams: {
    page: string;
    with_genres: string;
    sort_by: string;
  };
};

export default async function Genre({ searchParams }: Params) {
  const data = await movies.getByGenreId(searchParams);

  return <ListMovies data={data} />;
}
