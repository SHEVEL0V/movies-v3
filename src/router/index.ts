/** @format */

export const PATH = {
  HOME: "/",
  SEARCH: "/search",
  FAVORITES: "/favorites",
  GENRE: "/genre",
  ACTORS: "/actors",
  MOVIE: {
    DEFAULT: (id: string) => `/movie/${id}`,
    ACTORS: (id: string) => `/movie/${id}/actors`,
  },
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
};
