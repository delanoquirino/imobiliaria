"use client";

import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HouseContextProvider } from "@/context/HouseContext";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <HouseContextProvider>
          <main className="max-w-[1440px] mx-auto bg-white">
            <Header />
            {children}
            <Footer />
          </main>
        </HouseContextProvider>
      </body>
    </html>
  );
}
