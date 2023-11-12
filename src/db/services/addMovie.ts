/** @format */
import { Favorite } from "../schemas/favorite";

import type { MovieType } from "@/types";

export const addMovie = async (data: MovieType) => {
  const movie = new Favorite(data);

  const res = await Favorite.find({ id: movie.id });

  if (res.length) {
    throw new Error("Movie is already added");
  }

  return movie
    .save()
    .then(() => "Movie '" + data.title + "' added favorite successfully")
    .catch(() => new Error("Movie added failed to save"));
};
