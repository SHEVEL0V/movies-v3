/** @format */
"use server";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { MovieType } from "@/types";

import { addMovieMethod, deleteMovieMethod, getMoviesMethod } from "./movie";
import { isAuthMethod, updateUserMethod } from "./user";

//===========cookie================================
export const uid = () => cookies().get("uid")?.value || "";

export const setUidToCookie = (value: string) => {
  cookies().set("uid", value);
};
export const deleteUidToCookie = () => cookies().delete("uid");

//============auth===================================

export const isAuth = async () => isAuthMethod(uid());

export const updateUser = async (
  uid: string,
  user: { name?: string; url?: string; phone?: string; password?: string }
) => updateUserMethod(uid, user);

//============movies================================

const resMovie = () => {
  revalidateTag("posts");
  return true;
};

export const getMovie = () => getMoviesMethod(uid());

export const addMovie = async (data: MovieType) =>
  uid()
    ? addMovieMethod(uid(), data)
        .then(() => resMovie())
        .catch(() => false)
    : "login";

export const deleteMovie = async (id: string) =>
  deleteMovieMethod(uid(), id)
    .then(() => resMovie())
    .catch(() => false);
