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
  const auth = await isAuth();

  return (
    <html lang="en">
      <body
        style={inter.style}
        className={"overflow-hidden pt-1  bg-[url(../assets/bg.jpg)]"}
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
