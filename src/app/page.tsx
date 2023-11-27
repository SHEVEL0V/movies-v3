/** @format */

import ListMovies from "@/components/listMovies";
import { movies } from "@/fetch";

type Params = {
  searchParams: { page: string; sort_by: string };
};

export default async function Home({ searchParams }: Params) {
  const data = await movies.getTrendWeek(searchParams);

  return <ListMovies data={data} />;
}
