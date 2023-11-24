/** @format */
"use client";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import type { MovieType } from "@/types";
import { usePathname } from "next/navigation";
import { addMovie, deleteMovie } from "@/firebase/server";

export default function FavoriteBtn({ movie }: { movie: MovieType }) {
  const [checked, setChecked] = useState(usePathname() === "/favorites");

  const [loader, setLoader] = useState(false);

  const add = async () => {
    setLoader(true);
    const res = await addMovie(movie);
    setLoader(false);
    // setChecked(res);
  };

  const remove = async () => {
    setLoader(true);
    const res = await deleteMovie(String(movie.doc));
    setLoader(false);
    // setChecked(res);
  };

  return (
    <Checkbox
      className="absolute right-1 bottom-1 bg-bgWhiteSecond/50 hover:bg-bgWhiteFirst"
      size="small"
      color="error"
      icon={
        loader ? (
          <AutorenewIcon className={"animate-spin"} />
        ) : (
          <FavoriteBorder />
        )
      }
      checkedIcon={<Favorite />}
      // checked={checked}
      onChange={(_, checked) => (checked ? add() : remove())}
    />
  );
}
