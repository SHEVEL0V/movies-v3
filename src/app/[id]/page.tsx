/** @format */

import { movies } from "@/services/fetch";
import Image from "next/image";
import { getBaseUrlImg } from "@/services/getBaseUrlImg";
import MovieRating from "@/components/UI/rating";

type Props = { searchParams: { id: string } };

export default async function Movie({ searchParams }: Props) {
  const data = await movies.getById(searchParams.id);

  const {
    title,
    backdrop_path,
    budget,
    genres,
    overview,
    vote_average,
    release_date,
    poster_path,
    production_companies,
  } = data;

  return (
    <div className="p-2">
      <div className="grid gap-1 grid-cols-3 ">
        <Image
          src={getBaseUrlImg(poster_path)}
          width={400}
          height={400}
          alt={title}
        />
        <div className="col-span-2 flex flex-col gap-2">
          <h1 className="text-2xl ">{title}</h1>
          <div className="flex">
            Rating:
            <MovieRating rating={vote_average || 0} />
          </div>
          <div>
            Genre:
            {genres.map((e, i) => (
              <span key={i} className="mx-1">
                {e.name}
              </span>
            ))}
          </div>
          <div>Release: {release_date}</div>
          <div>budget: ${budget}</div>
          <div className="flex  gap-2">
            {production_companies.map((item) => (
              <div key={item.id} className="border rounded">
                <Image
                  src={getBaseUrlImg(item.logo_path)}
                  height={100}
                  width={100}
                  alt={item.name}
                />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3">{overview}</div>
      </div>
    </div>
  );
}
