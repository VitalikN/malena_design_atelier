import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mulish } from "@/fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Malena Design Atelier",
  description: "Malena Design Atelier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${mulish.className} antialiased bg-mainBg text-colorText`}
      >
        <Header />
        <main className=" ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
