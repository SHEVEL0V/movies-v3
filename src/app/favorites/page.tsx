/** @format */

import ListMovies from "@/components/listMovies";
import { getFavMovie } from "@/db/services/movie/get";

export default async function Favorite() {
  const data = await getFavMovie();

  if (data?.results) {
    return <ListMovies data={data} />;
  }

  return (
    <div className="flex">
      <div className="mx-auto mt-10 p-4 rounded shadow bg-bgWhiteSecond dark:bg-bgDarkThird/90">
        You do not have permission, please log in!
      </div>
    </div>
  );
}
