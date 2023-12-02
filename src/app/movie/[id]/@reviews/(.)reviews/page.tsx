/** @format */
import React from "react";
import { movies } from "@/fetch";
import { parseDate } from "@/helpers/parseDate";

export default async function Reviews({ params }: { params: { id: string } }) {
  const data = await movies.getByIdReviews(params.id);

  return (
    <div className="mt-2 p-2 flex flex-col gap-2  rounded shadow bg-bgWhiteSecond dark:bg-bgDarkThird/30">
      <h2>Comments:</h2>
      {data.results.map((e, i) => (
        <div
          key={i}
          className="p-2 rounded shadow-md bg-bgWhiteFirst dark:bg-bgDarkFirst/30"
        >
          <div className="flex flex-wrap">
            <b>Create user: {e.author}</b>

            <span className="rounded ml-2 p-1 shadow bg-bgWhiteSecond/70 dark:bg-bgDarkSecond">
              {parseDate(e.created_at)}
            </span>
          </div>
          <div>{e.content}</div>
        </div>
      ))}
    </div>
  );
}
