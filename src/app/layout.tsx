import type { Metadata } from "next";
import { Inter, Oswald, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-headline", weight: ["500", "600", "700"], display: "swap" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-script", weight: ["600", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Muhammad Nur Afiz — Portofolio",
  description:
    "Portofolio Muhammad Nur Afiz, lulusan Informatika dengan minat pada web development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${oswald.variable} ${caveat.variable}`}>
        {children}
      </body>
    </html>
  );
}
