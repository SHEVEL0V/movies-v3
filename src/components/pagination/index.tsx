/** @format */
"use client";
import React from "react";
import Pagination from "@mui/material/Pagination";
import { useParams } from "@/hooks/useParams";

export default function Pag() {
  const { add, get } = useParams();

  return (
    <div className="flex justify-center mt-2 ">
      <Pagination
        color="secondary"
        count={10}
        page={Number(get("page")) || 1}
        onChange={(_, v) => add("page", String(v))}
      />
    </div>
  );
}
