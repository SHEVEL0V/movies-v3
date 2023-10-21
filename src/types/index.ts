/** @format */

export type Movie = {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
  budget: string;
  genres: { id: number; name: string }[];
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
};
