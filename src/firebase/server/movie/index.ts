/** @format */

import { fb } from "../initApp";
import { getFirestore } from "firebase-admin/firestore";
import { MovieType } from "@/types";

const db = getFirestore(fb);
//----------------------------------------------------------------
export const getMoviesMethod = async (uid?: string) => {
  let res: any[] = [];

  uid && (await db.collection(uid).get()).forEach((doc) => res.push(doc.data()));

  return res;
};
//----------------------------------------------------------------
export const addMovieMethod = async (uid: string, data: MovieType) =>
  db.collection(uid).doc(data.id.toString()).set(data);
//----------------------------------------------------------------
export const deleteMovieMethod = async (uid: string, id: string) =>
  db.collection(uid).doc(id).delete();
