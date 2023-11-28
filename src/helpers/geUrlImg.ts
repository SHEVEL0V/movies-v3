/** @format */

const BASE_IMG_URL = process.env.BASE_IMG_URL || "https://image.tmdb.org/t/p/w500/";
import img from "../assets/jk-placeholder-image.jpg";

export const getBaseUrlImg = (path: string) => (path ? BASE_IMG_URL + path : img);
