import type { Metadata } from "next";
import { Inter, Lexend_Deca } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Tourist's Diary",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={lexend.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
