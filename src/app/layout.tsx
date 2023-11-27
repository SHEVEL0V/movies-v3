/** @format */
import Sidebar from "@/components/sidebar";
import Container from "@/components/container/container";
import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { isAuth } from "@/firebase/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies",
  icons: "https://example.com/icon.png",
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const auth = { uid: "" };

  return (
    <html lang="en">
      <body
        className={
          "overflow-hidden flex pt-1 justify-center relative bg-[url(../assets/bg.jpg)] " +
          inter.className
        }
      >
        <Container>
          <Sidebar />
          <main className="w-full flex flex-col">
            <Header user={auth?.uid} />
            {props.children}
          </main>
        </Container>
        {props.modal}
      </body>
    </html>
  );
}
