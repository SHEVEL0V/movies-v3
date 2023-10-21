/** @format */
import Sidebar from "@/module/sidebar";
import Container from "@/components/container";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <Sidebar />
          <main>{children}</main>
        </Container>
      </body>
    </html>
  );
}
