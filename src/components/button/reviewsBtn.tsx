/** @format */
"use client";
import React from "react";
import { PATH } from "@/router";
import Button from "@mui/material/Button";
import ReviewsIcon from "@mui/icons-material/Reviews";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { usePathname, useRouter } from "next/navigation";

export default function ReviewsBtn({ id }: { id: string }) {
  const path = usePathname()
    .split("/")
    .some((item) => item === "reviews");
  const router = useRouter();

  return (
    <Button
      variant="outlined"
      color={"inherit"}
      className="w-full mt-2"
      onClick={() =>
        path ? router.back() : router.push(PATH.MOVIE.REVIEWS(id))
      }
    >
      Reviews
      <div className="ml-2">{path ? <RateReviewIcon /> : <ReviewsIcon />}</div>
    </Button>
  );
}
