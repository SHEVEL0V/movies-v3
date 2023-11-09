/** @format */

const BASE_URL = process.env.BASE_URL;
const TOKEN = process.env.TOKEN;

export const fetchMovie = async (url: string, method?: "GET" | "POST") => {
  const res = await fetch(BASE_URL + url, {
    method: method || "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + TOKEN,
    },
  });
  if (!res.ok) {
    console.error(res.body, 400);

    return res.json();
  }

  return res.json();
};
