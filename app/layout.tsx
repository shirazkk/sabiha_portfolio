import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-base text-white">
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
