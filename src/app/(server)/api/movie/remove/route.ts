/** @format */

import { removeMovie } from "@/db/services/removeMovie";
import response from "@/helpers/response";

export async function DELETE(request: Request) {
  const movie = await request.json();

  return await removeMovie(movie.id)
    .then((message) => response(message as string, 200))
    .catch((error) => response(error, 400));
}
