/** @format */

import Filter from "@/components/filter";
import ListMovies from "@/components/listMovies";
import { movies } from "@/fetch";

type Props = { searchParams: { query: string; page: string } };

export default async function Search({ searchParams }: Props) {
  const data = await movies.getQuery(searchParams);

  return (
    <>
      <ListMovies data={data} />
    </>
  );
}
