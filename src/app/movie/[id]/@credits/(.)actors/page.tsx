/** @format */

import React from "react";
import { movies } from "@/fetch";
import Image from "next/image";
import { getBaseUrlImg } from "@/helpers/geUrlImg";

type Props = { params: { id: string } };

export default async function Actors({ params }: Props) {
  const data = await movies.getByIdCredits(params.id);

  return (
    <div className="grid grid-cols-6 gap-2 py-2">
      {data.cast.map((e, i) => (
        <div
          key={i}
          className="p-1  rounded shadow bg-bgWhiteSecond dark:bg-bgDarkThird/40"
        >
          <Image
            className="w-full h-auto rounded shadow"
            src={getBaseUrlImg(e.profile_path)}
            width={200}
            height={200}
            alt={e.name}
          />
          <div>{e.name}</div>
        </div>
      ))}
    </div>
  );
}
