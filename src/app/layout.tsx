/** @format */
import Sidebar from "@/components/sidebar";
import Container from "@/components/container/container";
import InputSearch from "@/components/header/inputSearch";
import { auth } from "@/db/services/auth";
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
  // modal: React.ReactNode;
}) {
  const auntefication = await auth();
  return (
    <html lang="en">
      <body
        className={
          "bg-bgDarkFirst flex justify-center relative" + inter.className
        }
      >
        <Container>
          <Sidebar />
          <main className="w-full">
            <InputSearch auth={auntefication.status} />
            {props.children}
          </main>
        </Container>
      </body>
    </html>
  );
}
