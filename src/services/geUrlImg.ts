/** @format */

const BASE_IMG_URL = process.env.BASE_IMG_URL;
import img from "../assets/placeholder.png";

export const getBaseUrlImg = (path: string) =>
  path ? BASE_IMG_URL + path : img;
