/** @format */

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-green-300">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="bg-red-500" href="/">
        Return Home
      </Link>
    </div>
  );
}
