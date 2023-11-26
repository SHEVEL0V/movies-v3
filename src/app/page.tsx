/** @format */
import ListMovies from "@/components/listMovies";
import { movies } from "@/fetch";
import { getMovie } from "@/firebase/server";

type Params = {
  searchParams: { page: string; sort_by: string };
};

export default async function Home({ searchParams }: Params) {
  const data = await movies.getTrendWeek(searchParams);
  await getMovie();

  return <ListMovies data={data} />;
}
