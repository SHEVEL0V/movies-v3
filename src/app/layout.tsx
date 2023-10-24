/** @format */
import Sidebar from "@/module/sidebar";
import Container from "@/components/container";
import InputSearch from "@/module/inputSearch";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies",
  icons: "https://example.com/icon.png",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  auth: React.ReactNode;
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
        {props.auth}
      </body>
    </html>
  );
}
