/** @format */
"use server";
import { cookies } from "next/headers";
import { cert, initializeApp, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { revalidateTag } from "next/cache";
import { MovieType } from "@/types";

//===========cookie================================
export const uid = () => cookies().get("uid")?.value || "";

export const setUidToCookie = (value: string) => {
  cookies().set("uid", value);
};
export const deleteUidToCookie = () => cookies().delete("uid");

//===========init================================
const app = !!getApps().length
  ? getApps()[0]
  : initializeApp({
      credential: cert({
        projectId: process.env.PROJECT_ID,
        clientEmail: process.env.CLIENT_EMAIL,
        privateKey: process.env.PRIVATE_KEY,
      }),
    });

//============auth===================================
const auth = getAuth(app);

export const isAuth = async () =>
  auth
    .getUser(uid())
    .then((user) => user)
    .catch(() => null);

export const updateUser = async (
  uid: string,
  user: { name?: string; url?: string; phone?: string; password?: string }
) =>
  auth
    .updateUser(uid, {
      password: user.password,
      phoneNumber: user.phone,
      displayName: user.name,
      photoURL: user.url,
    })
    .then(() => "user updated successfully")
    .catch((error) => error.message as string);

//============movies================================
const db = getFirestore(app);

export const getMovie = async () => {
  let res: any[] = [];

  uid() && (await db.collection(uid()).get()).forEach((doc) => res.push(doc.data()));

  return res;
};

export const addMovie = async (data: MovieType) =>
  uid()
    ? db
        .collection(uid())
        .doc(data.id.toString())
        .set(data)
        .then(() => {
          revalidateTag("posts");
          return true;
        })
        .catch(() => false)
    : "login";

export const deleteMovie = async (id: string) =>
  db
    .collection(uid())
    .doc(id)
    .delete()
    .then(() => {
      revalidateTag("posts");
      return true;
    })
    .catch(() => false);
