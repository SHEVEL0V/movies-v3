/** @format */
import ListMovies from "@/components/listMovies";
import InputSearch from "@/components/UI/inputSearch";

import { connectDB } from "@/db/connect";
import { movies } from "@/services/fetch";

export default async function Home() {
  const data = await movies.getTrendWeek();

  // const handleSearch = (v: string) => console.log(v);

  // connectDB()
  //   .then(() => console.log("✅ mongoDB connection successful"))
  //   .catch((error) => console.log(error));

  return (
    <>
      <InputSearch />
      <ListMovies data={data.results} />
    </>
  );
}
