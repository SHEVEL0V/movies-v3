/** @format */

import ListMovies from "@/components/listMovies";
import { movies } from "@/services/fetch";

type Props = { searchParams: { query: string } };

export default async function Search({ searchParams }: Props) {
  const data = await movies.getQuery(searchParams.query);

  return <ListMovies data={data.results} />;
}
