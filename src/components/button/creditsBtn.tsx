/** @format */
"use client";
import React from "react";
import { PATH } from "@/router";
import Button from "@mui/material/Button";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import ContactsIcon from "@mui/icons-material/Contacts";
import { usePathname, useRouter } from "next/navigation";

export default function CreditsBtn({ id }: { id: string }) {
  const path = usePathname()
    .split("/")
    .some((item) => item === "actors");
  const router = useRouter();

  return (
    <Button
      variant="outlined"
      color={"inherit"}
      className="w-full mt-2"
      onClick={() =>
        path ? router.back() : router.push(PATH.MOVIE.ACTORS(id))
      }
    >
      Actors
      <div className="ml-2">
        {path ? <ContactsIcon /> : <FolderSharedIcon />}
      </div>
    </Button>
  );
}
