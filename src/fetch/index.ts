/** @format */
import { fetchMovie } from "./fetch";
import type { MovieType, MovieCreditType, ReviewsType } from "@/types";

type TypeRes = {
  results: MovieType[];
  page: number;
  total_pages: number;
  total_results: number;
};

type Params = {
  page?: string;
  sort_by?: string;
  query?: string;
  with_genres?: string;
};

type Genres = { genres: { id: number; name: string }[] };

const searchParams = (params: Params) => {
  const res = {
    api_key: "4fc86b17259ac63837b074fbab2b63b2",
    include_adult: "true",
    language: "en",
    ...params,
  };

  return (
    "?" +
    Object.entries(res)
      .map((item) => item.join("="))
      .join("&")
  );
};

const makeId = (id: string) => id.split("-").pop();

export const movies = {
  //================================================================
  getTrendWeek: (params: Params): Promise<TypeRes> =>
    fetchMovie(`/trending/movie/week` + searchParams(params)),
  //================================================================
  getById: (id: string): Promise<MovieType> =>
    fetchMovie("/movie/" + makeId(id) + searchParams({})),
  //================================================================
  getByIdCredits: (id: string): Promise<{ cast: MovieCreditType[] }> =>
    fetchMovie("/movie/" + makeId(id) + "/credits" + searchParams({})),
  //================================================================
  getQuery: (params: Params): Promise<TypeRes> =>
    fetchMovie("/search/movie" + searchParams(params)),
  //================================================================
  getByIdReviews: (id: string): Promise<{ results: ReviewsType[] }> =>
    fetchMovie("/movie/" + makeId(id) + "/reviews" + searchParams({})),
  //================================================================
  getGenres: (): Promise<Genres> =>
    fetchMovie("/genre/movie/list" + searchParams({})),
  //================================================================
  // discover/movie
  getByGenreId: (params: Params): Promise<TypeRes> =>
    fetchMovie("/discover/movie" + searchParams(params)),
};
