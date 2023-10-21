/** @format */

const BASE_URL = process.env.BASE_URL;
const KEY = process.env.KEY;

import type { Movie } from "@/types";

type TypeRes = {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
};

const get = async (url: string): Promise<TypeRes> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const getId = async (url: string): Promise<Movie> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const movies = {
  getById: (id: string, page = 1) =>
    getId(
      `${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US&page=${page}&include_adult=true`
    ),

  getByIdCredits: (id: string, page = 1) =>
    get(
      `${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US&page=${page}&include_adult=true`
    ),

  getQuery: (query = "", page = 1) =>
    get(
      `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=true`
    ),

  getTrendWeek: (query = "", page = 1) =>
    get(
      `${BASE_URL}/trending/movie/week?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=true`
    ),

  getByIdReviews: (id: string, page = 1) =>
    get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=${page}&include_adult=true`
    ),
};
