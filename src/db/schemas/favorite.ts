/** @format */

import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  adult: Boolean,
  backdrop_path: String,
  id: Number,
  title: String,
  original_language: String,
  original_title: String,
  overview: String,
  poster_path: String,
  media_type: String,
  genre_ids: [Number],
  popularity: Number,
  release_date: String,
  video: Boolean,
  vote_average: Number,
  vote_count: Number,
});

export const Favorite =
  mongoose.models.favorite || mongoose.model("favorite", movieSchema);
