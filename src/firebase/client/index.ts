/** @format */

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { setUidToCookie } from "../server";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "rest-api-364210.firebaseapp.com",
  projectId: "rest-api-364210",
  storageBucket: "rest-api-364210.appspot.com",
  messagingSenderId: "577029159136",
  appId: "1:577029159136:web:991d04f43af6a71a6d7885",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

type userType = { email: string; password: string };

export const create = async (user: userType) => {
  const res = await createUserWithEmailAndPassword(auth, user.email, user.password);
  setUidToCookie(res.user.uid);
};

export const login = async (user: userType) => {
  const res = await signInWithEmailAndPassword(auth, user.email, user.password);
  setUidToCookie(res.user.uid);
};

export const loginGoogle = async () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      setUidToCookie(result.user.uid);
      return "Auth google success";
    })
    .catch((err) => err.message);
};
