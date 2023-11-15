/** @format */
"use server";
import { Favorite } from "../schemas/favorite";

export const removeMovie = async (id: string): Promise<boolean> => {
  return await Favorite.findOneAndDelete({ id })
    .then((res) => {
      console.log(
        "❎ Movie '" + res.title + "' remove is favorite successfully"
      );
      return true;
    })

    .catch(() => {
      console.log("❗ Movie remove failed");
      return false;
    });
};
