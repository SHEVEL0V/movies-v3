/** @format */
"use client";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

import type { MovieType } from "@/types";

export default function FavoriteBtn({ movie }: { movie: MovieType }) {
  const addMovie = () => {
    fetch("/api/movie/add", { method: "POST", body: JSON.stringify(movie) });
  };
  const removeMovie = () => {
    fetch("/api/movie/remove", {
      method: "DELETE",
      body: JSON.stringify({ id: movie.id }),
    });
  };
  return (
    <Checkbox
      className="absolute right-1 bottom-1 bg-bgWhiteSecond hover:bg-bgWhiteFirst"
      size="small"
      icon={<FavoriteBorder />}
      checkedIcon={<Favorite />}
      onChange={(e, checked) => (checked ? addMovie() : removeMovie())}
    />
  );
}
