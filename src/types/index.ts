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

export type MovieCredit = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
};
