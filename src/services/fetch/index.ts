/** @format */
import { fetchMovie } from "./fetch";
import type { MovieType, MovieCreditType } from "@/types";

type TypeRes = {
  results: MovieType[];
  page: number;
  total_pages: number;
  total_results: number;
};

const searchParams = (page = "1", query?: string) =>
  `?language=en-US&query=${query}&page=${page}&include_adult=true`;

const makeId = (id: string) => id.split("-").pop();

export const movies = {
  //================================================================
  auth: (): Promise<{ success: boolean }> => fetchMovie("/authentication"),
  //================================================================
  getTrendWeek: (page: string): Promise<TypeRes> =>
    fetchMovie(`/trending/movie/week` + searchParams(page)),
  //================================================================
  getById: (id: string, page: string): Promise<MovieType> =>
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
};
