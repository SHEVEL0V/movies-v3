/** @format */

import ListMovies from "@/components/listMovies";
import { getFavMovie } from "@/db/services/movie/get";

export default async function Favorite() {
  const data = await getFavMovie();

  return <ListMovies data={data} />;
}
