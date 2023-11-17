/** @format */

import { movies } from "@/fetch";
import Image from "next/image";
import { getBaseUrlImg } from "@/helpers/geUrlImg";
import MovieRating from "@/components/UI/rating";
// import Link from "next/link";
// import { PATH } from "@/router";

type Props = { params: { id: string } };

export default async function MovieLayout(props: Props) {
  const id = props.params.id;
  const data = await movies.getById(id);

  return (
    <div>
      <div className="grid gap-1 grid-cols-3 ">
        <Image
          className="rounded shadow"
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
                className="flex flex-col min-w-[80px] p-1 shadow  rounded bg-bgWhiteSecond dark:bg-bgDarkThird/30"
              >
                <Image
                  className="my-auto"
                  src={getBaseUrlImg(item.logo_path)}
                  height={100}
                  width={100}
                  alt={item.name}
                />
                {/* <div className="mt-auto bg-bgDarkSecond rounded">
                  {item.name}
                </div> */}
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3">{data.overview}</div>
      </div>
    </div>
  );
}
