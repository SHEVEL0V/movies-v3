/** @format */

import { Favorite } from "../schemas/favorite";

export const removeMovie = async (id: string) => {
  return await Favorite.findOneAndDelete({ id })
    .then((res) => "Movie '" + res.title + "' remove is favorite successfully")
    .catch(() => new Error("Movie remove failed"));
};
