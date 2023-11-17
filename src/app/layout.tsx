/** @format */
import Sidebar from "@/components/sidebar";
import Container from "@/components/container/container";
import Header from "@/components/header";
import { auth } from "@/db/services/auth/authorization";
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
  const auntefication = auth();
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
            <Header auth={auntefication.status} />
            {props.children}
          </main>
        </Container>
        {props.modal}
      </body>
    </html>
  );
}
