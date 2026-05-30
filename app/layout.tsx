import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Cursor from "@/components/ui/Cursor";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sabiha Aamir — AI Maximalist",
  description: "Portfolio of Sabiha Aamir, AI Content Creator & Prompt Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased bg-base text-white cursor-none overflow-x-hidden">
        <Cursor />
        <div className="noise" />
        <SmoothScroll>
          <main className="overflow-x-hidden w-full">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}