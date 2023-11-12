/** @format */
import { NextResponse } from "next/server";

const response = (message = "message", status: number) => {
  return NextResponse.json({ message }, { status });
};

export default response;
