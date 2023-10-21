/** @format */

const BASE_IMG_URL = process.env.BASE_IMG_URL;

export const getBaseUrlImg = (path: string) => BASE_IMG_URL + path;
