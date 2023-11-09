/** @format */
import ListMovies from "@/components/listMovies";
import { movies } from "@/services/fetch";

type P = {
  searchParams: { page: string };
};

export default async function Home({ searchParams }: P) {
  const data = await movies.getTrendWeek(searchParams.page);

  return <ListMovies data={data.results} />;
}
