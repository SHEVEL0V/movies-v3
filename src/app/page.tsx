/** @format */
import ListMovies from "@/components/listMovies";

import { connectDB } from "@/db/connect";
import { movies } from "@/services/fetch";

export default async function Home() {
  const data = await movies.getTrendWeek();

  // const handleSearch = (v: string) => console.log(v);

  // connectDB()
  //   .then(() => console.log("✅ mongoDB connection successful"))
  //   .catch((error) => console.log(error));

  return <ListMovies data={data.results} />;
}
