/** @format */
import ListMovies from "@/components/listMovies";
import { movies } from "@/fetch";
// import { getMovie } from "@/firebase/server";
// import { cookies } from "next/headers";

type Params = {
  searchParams: { page: string; sort_by: string };
};

export default async function Home({ searchParams }: Params) {
  const data = await movies.getTrendWeek(searchParams);
  // const fav = await getMovie();

  return <ListMovies data={data} />;
}
