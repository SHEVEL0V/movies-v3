/** @format */

import ListMovies from "@/components/listMovies";
import { getMovie } from "@/db/services/getMovie";

export default async function Favorite() {
  const data = await getMovie();

  return <ListMovies data={data} />;
}
