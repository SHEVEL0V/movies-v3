/** @format */
import { auth } from "./auth";
import { create } from "./create";
import { login } from "./login";
import { logout } from "./logout";
import { addMovie } from "./addMovie";
import { getMovie } from "./getMovie";
import { removeMovie } from "./removeMovie";

export const services = {
  auth,
  login,
  create,
  logout,

  movie: {
    addMovie,
    getMovie,
    removeMovie,
  },
};
