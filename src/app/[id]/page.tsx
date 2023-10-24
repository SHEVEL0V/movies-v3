/** @format */

import { movies } from "@/services/fetch";
import Image from "next/image";
import { getBaseUrlImg } from "@/services/geUrlImg";
import MovieRating from "@/components/UI/rating";
import OptionsBtn from "@/components/button/optionsBtn";

type Props = { params: { id: string }; searchParams: any };

export default async function MovieLayout({ params }: Props) {
  const data = await movies.getById(params.id);

  return (
    <div>
      <div className="grid gap-1 grid-cols-3 ">
        <Image
          src={getBaseUrlImg(data.poster_path)}
          width={400}
          height={400}
          alt={data.title}
        />
        <div className="col-span-2 flex flex-col gap-2">
          <h1 className="text-2xl ">{data.title}</h1>
          <div className="flex">
            Rating:
            <MovieRating rating={data.vote_average || 0} />
          </div>
          <div>
            Genre:
            {data.genres.map((e, i) => (
              <span key={i} className="mx-1">
                {e.name}
              </span>
            ))}
          </div>
          <div>Release: {data.release_date}</div>
          <div>budget: ${data.budget}</div>
          Production companies
          <div className="flex  gap-2">
            {data.production_companies.map((item) => (
              <div
                key={item.id}
                className="p-1 border rounded bg-bgWhiteSecond dark:bg-bgDarkFirst"
              >
                <Image
                  src={getBaseUrlImg(item.logo_path)}
                  height={100}
                  width={100}
                  alt={item.name}
                />
                <div className="mt-auto">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3">{data.overview}</div>
      </div>
    </div>
  );
}
