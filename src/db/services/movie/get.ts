/** @format */

import { connectDB } from "../../connect";
import { Favorite } from "../../schemas/favorite";
import { auth } from "../auth/authorization";

import { MovieType } from "@/types";

export const getFavMovie = async () => {
  const user = auth().userID;

  return Favorite.find({ user })
    .select({ _id: 0, __v: 0 })
    .then((data) => JSON.stringify(data))
    .then((data) => {
      const res = JSON.parse(data);
      return {
        results: res as MovieType[],
        total_pages: res.length > 20 ? 2 : 1,
      };
    })
    .catch(() => ({
      results: [],
      total_pages: 1,
    }));
};
