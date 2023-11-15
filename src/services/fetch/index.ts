/** @format */
import { fetchMovie } from "./fetch";
import type { MovieType, MovieCreditType } from "@/types";

type TypeRes = {
  results: MovieType[];
  page: number;
  total_pages: number;
  total_results: number;
};

const searchParams = (page?: string, query?: string) => {
  const params = {
    api_key: "?api_key=4fc86b17259ac63837b074fbab2b63b2",
    lang: "language=en",
    query: query && "query=" + query,
    page: page && "page=" + page,
    adult: "include_adult=true",
  };

  return Object.values(params).join("&");
};

const makeId = (id: string) => id.split("-").pop();

export const movies = {
  //================================================================
  getTrendWeek: (page: string): Promise<TypeRes> =>
    fetchMovie(`/trending/movie/week` + searchParams(page)),
  //================================================================
  getById: (id: string, page?: string): Promise<MovieType> =>
    fetchMovie("/movie/" + makeId(id) + searchParams(page)),
  //================================================================
  getByIdCredits: (
    id: string,
    page: string
  ): Promise<{ cast: MovieCreditType[] }> =>
    fetchMovie("/movie/" + makeId(id) + "/credits" + searchParams(page)),
  //================================================================
  getQuery: (query: string, page: string): Promise<TypeRes> =>
    fetchMovie("/search/movie" + searchParams(page, query)),
  //================================================================
  getByIdReviews: (id: string, page: string) =>
    fetchMovie("/movie/" + id + "/reviews" + searchParams(page)),
  //================================================================
  getGenres: () => fetchMovie("/genre/movie/list" + searchParams()),
  //================================================================
  // discover/movie
  getByGenreId: (genre: string, page?: string): Promise<TypeRes> =>
    fetchMovie(
      "/discover/movie" + searchParams(page) + "&with_genres=" + genre
    ),
};
