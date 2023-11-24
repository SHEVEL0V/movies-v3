/** @format */
"use server";
import { cookies } from "next/headers";
import { cert, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const app = initializeApp({
  credential: cert({
    projectId: process.env.PROJECT_ID,
    clientEmail: process.env.CLIENT_EMAIL,
    privateKey: process.env.PRIVATE_KEY,
  }),
});

//===========cookie================================
const uid = () => cookies().get("uid")?.value || "";

export const setUidToCookie = (value: string) => {
  cookies().set("uid", value);
};

export const deleteUidToCookie = () => cookies().delete("uid");

//============auth===================================
const auth = getAuth(app);

export const isAuth = async () =>
  auth
    .getUser(uid())
    .then((user) => user)
    .catch(() => null);

export const updateUser = async (
  uid: string,
  user: { name?: string; url?: string; phone?: string }
) =>
  auth
    .updateUser(uid, {
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

  if (uid()) {
    const movie = await db.collection("movies").where("uid", "==", uid()).get();
    movie.forEach((doc) => res.push({ ...doc.data(), doc: doc.id }));
  }

  return res;
};

export const addMovie = async (data: any) => {
  if (uid()) {
    await db
      .collection("movies")
      .doc()
      .set({ ...data, uid: uid() });
  }
};

export const deleteMovie = async (id: string) => {
  await db.collection("movies").doc(id).delete();
};
