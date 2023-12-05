/** @format */
"use client";
import React, { useState } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { addMovie, deleteMovie } from "@/firebase/server";

import type { MovieType } from "@/types";

export default function FavoriteBtn({ movie, fav }: { movie: MovieType; fav: string[] }) {
  const isChecked = !!fav.find((item) => item == movie.id.toString());

  const [checked, setChecked] = useState(isChecked);

  const [loader, setLoader] = useState(false);

  const add = async () => {
    setLoader(true);
    const res = await addMovie(movie);
    setLoader(false);
    if (typeof res === "boolean") {
      setChecked(res);
    }
    if (res === "login") {
      alert("Please login");
    }
  };

  const remove = async () => {
    setLoader(true);
    const res = await deleteMovie(movie.id.toString());
    setLoader(false);
    setChecked(!res);
  };

  return (
    <button
      className="absolute right-1 bottom-1
      p-2 rounded-full bg-bgWhiteSecond/30  hover:bg-bgWhiteFirst/40 hover:shadow hover:shadow-white/50 "
      color="inherit"
      disabled={loader}
      onClick={() => (checked ? remove() : add())}
    >
      {loader ? (
        <AutorenewIcon className={"animate-spin"} />
      ) : checked ? (
        <Favorite className="text-yellow" />
      ) : (
        <FavoriteBorder />
      )}
    </button>
  );
}
