/** @format */

import { connectDB } from "../connect";
import { Favorite } from "../schemas/favorite";

export const getMovie = async () => {
  await connectDB();
  return Favorite.find()
    .select({ _id: 0, __v: 0 })
    .then((data) => JSON.stringify(data))
    .then((data) => JSON.parse(data))
    .catch(() => []);
};
