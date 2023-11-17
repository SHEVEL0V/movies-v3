/** @format */

export const PATH = {
  HOME: "/",
  SEARCH: "/search",
  FAVORITES: "/favorites",
  GENRE: "/genres",
  ACTORS: "/actors",
  USER: "/user",
  MOVIE: {
    DEFAULT: (id: string) => `/movie/${id}`,
    ACTORS: (id: string) => `/movie/${id}/actors`,
    REVIEWS: (id: string) => `/movie/${id}/reviews`,
  },
  LOGIN: "/login",
  REGISTER: "/register",
};
