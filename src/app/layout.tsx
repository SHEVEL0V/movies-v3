/** @format */
import Sidebar from "@/components/sidebar";
import Container from "@/components/container/container";
import InputSearch from "@/components/header/inputSearch";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies",
  icons: "https://example.com/icon.png",
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          "bg-bgDarkFirst flex justify-center relative" + inter.className
        }
      >
        <Container>
          <Sidebar />
          <main>
            <InputSearch />
            {props.children}
          </main>
        </Container>
        {props.modal}
      </body>
    </html>
  );
}
