/** @format */

import ListMovies from "@/components/listMovies";
import { getMovie, uid } from "@/firebase/server";

export default async function Favorite() {
  const movies = await getMovie();
  const data = { results: movies, total_pages: movies.length };

  if (uid()) {
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
