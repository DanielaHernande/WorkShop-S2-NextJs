import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Caveat } from "next/font/google";
import "./globals.css";
import Title from "./_components/title/title";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quick-Notes",
  description: "App of Notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={caveat.className}>
        <Title />
        {children}
      </body>
    </html>
  );
}
