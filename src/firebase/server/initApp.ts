/** @format */
import { cert, initializeApp, getApps } from "firebase-admin/app";

//===========init================================
export const fb = !!getApps().length
  ? getApps()[0]
  : initializeApp({
      credential: cert({
        projectId: process.env.PROJECT_ID,
        clientEmail: process.env.CLIENT_EMAIL,
        privateKey: process.env.PRIVATE_KEY,
      }),
    });
