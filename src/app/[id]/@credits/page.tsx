/** @format */

import React from "react";
import { movies } from "@/services/fetch";
import Image from "next/image";
import { getBaseUrlImg } from "@/services/geUrlImg";

type Props = { params: { id: string }; searchParams: { actors: boolean } };

export default async function Actors({ params, searchParams }: Props) {
  if (!searchParams.actors) {
    return null;
  }

  const data = await movies.getByIdCredits(params.id);

  return (
    <div className="mt-10 grid grid-cols-4 gap-2">
      {data.cast.map((e, i) => (
        <div key={i} className="p-1 border rounded bg-bgDarkFirst">
          <Image
            className="w-full h-auto"
            src={getBaseUrlImg(e.profile_path)}
            width={200}
            height={200}
            alt={e.name}
          />
          <div className="">{e.name}</div>
        </div>
      ))}
    </div>
  );
}
