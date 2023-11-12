/** @format */

import { addMovie } from "@/db/services/addMovie";
import response from "@/helpers/response";

export async function POST(request: Request) {
  const movie = await request.json();

  return addMovie(movie)
    .then((message) => response(message as string, 200))
    .catch((error) => response(error.message, 400));
}
