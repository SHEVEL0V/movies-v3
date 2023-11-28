/** @format */
"use client";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Fab from "@mui/material/Fab";
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
    const res = await deleteMovie(String(movie.doc));
    setLoader(false);
    setChecked(!res);
  };

  return (
    <div className="absolute right-1 bottom-1">
      <Fab
        className="  bg-bgWhiteSecond/50 hover:bg-bgWhiteFirst/50"
        size="small"
        color="error"
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
      </Fab>
    </div>
  );
}
