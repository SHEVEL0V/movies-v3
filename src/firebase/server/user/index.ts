/** @format */
import { getAuth } from "firebase-admin/auth";
import { fb } from "../initApp";

const auth = getAuth(fb);
//----------------------------------------------------------------
export const isAuthMethod = async (uid = "") =>
  auth
    .getUser(uid)
    .then((user) => user)
    .catch(() => null);

//----------------------------------------------------------------
export const updateUserMethod = async (
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
