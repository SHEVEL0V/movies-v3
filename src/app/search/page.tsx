/** @format */

import ListMovies from "@/components/listMovies";
import { movies } from "@/services/fetch";

type Props = { searchParams: { query: string; page: string } };

export default async function Search({ searchParams }: Props) {
  const data = await movies.getQuery(searchParams.query, searchParams.page);

  return <ListMovies data={data.results} />;
}
