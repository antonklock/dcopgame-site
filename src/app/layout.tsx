import "./globals.css";
import type { Metadata } from "next";
import { Inter, Anton, Black_Ops_One } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  display: "swap",
  subsets: ["latin"],
});
const blackOpsOne = Black_Ops_One({
  weight: "400",
  variable: "--font-blackOpsOne",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DCOP Game",
  description: "A game by John Eriksson and Anton Klock",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${blackOpsOne.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
