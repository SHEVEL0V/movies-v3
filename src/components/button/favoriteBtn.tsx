/** @format */
"use client";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { addMovie } from "@/db/services/addMovie";
import { removeMovie } from "@/db/services/removeMovie";
import type { MovieType } from "@/types";

export default function FavoriteBtn({ movie }: { movie: MovieType }) {
  const [checked, setChecked] = useState(false);

  const add = async () => setChecked(await addMovie(movie));

  const remove = async () => setChecked(await removeMovie(String(movie.id)));

  return (
    <Checkbox
      className="absolute right-1 bottom-1 bg-bgWhiteSecond hover:bg-bgWhiteFirst"
      size="small"
      icon={<FavoriteBorder />}
      checkedIcon={<Favorite />}
      checked={checked}
      onChange={(_, checked) => (checked ? add() : remove())}
    />
  );
}
