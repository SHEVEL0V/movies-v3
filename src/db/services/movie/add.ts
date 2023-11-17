/** @format */
"use server";
import { Favorite } from "../../schemas/favorite";

import type { MovieType } from "@/types";
type User = { user: string };
type Data = MovieType & User;

export const addFavMovie = async (data: Data): Promise<boolean> => {
  const movie = new Favorite(data);

  const res = await Favorite.find({ id: movie.id });

  if (res.length) {
    console.log("❗Movie is already added");
    return false;
  }

  return movie
    .save()
    .then(() => {
      console.log("✅ Movie '" + data.title + "' added favorite successfully");
      return true;
    })

    .catch(() => {
      console.log("🚫 Movie added failed to save");
      return false;
    });
};
