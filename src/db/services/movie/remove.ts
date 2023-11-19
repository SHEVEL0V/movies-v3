/** @format */
"use server";
import { Favorite } from "../../schemas/favorite";
import { revalidateTag } from "next/cache";

export const removeFavMovie = async (id: string): Promise<boolean> => {
  return await Favorite.findOneAndDelete({ id })
    .then((res) => {
      console.log(
        "❎ Movie '" + res.title + "' remove is favorite successfully"
      );
      revalidateTag("favorites");
      return true;
    })

    .catch(() => {
      console.log("❗ Movie remove failed");
      return false;
    });
};
