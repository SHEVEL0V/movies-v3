/** @format */

import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

export default function MovieRating({ rating = 0 }) {
  return (
    <div className=" flex items-center text-yellow">
      <Rating
        name="text-feedback"
        value={Math.round(rating) / 2}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </div>
  );
}
