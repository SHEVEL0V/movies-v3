/** @format */

const BASE_URL = process.env.BASE_URL;
const KEY = process.env.KEY;

import type { Movie, MovieCredit } from "@/types";

type TypeRes = {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
};

const get = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const movies = {
  getById: (id: string, page = 1): Promise<Movie> =>
    get(
      `${BASE_URL}/movie/${id
        .split("-")
        .pop()}?api_key=${KEY}&language=en-US&page=${page}&include_adult=true`
    ),

  getByIdCredits: (id: string, page = 1): Promise<{ cast: MovieCredit[] }> =>
    get(
      `${BASE_URL}/movie/${id
        .split("-")
        .pop()}/credits?api_key=${KEY}&language=en-US&page=${page}&include_adult=true`
    ),

  getQuery: (query = "", page = 1): Promise<TypeRes> =>
    get(
      `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=true`
    ),

  getTrendWeek: (query = "", page = 1): Promise<TypeRes> =>
    get(
      `${BASE_URL}/trending/movie/week?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=true`
    ),

  getByIdReviews: (id: string, page = 1) =>
    get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=${page}&include_adult=true`
    ),
};
