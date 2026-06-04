import "./globals.css";
import localFont from "next/font/local";
import ClientWrapper from "@/components/layout/ClientWrapper";
import { Metadata } from "next";

const jedar = localFont({
  src: "../public/fonts/Jedar.ttf",
  variable: "--font-jedar",
});

export const metadata: Metadata = {
  title: "Sabiha Aamir | AI Content Creator & Prompt Engineer",
  description: "Portfolio of Sabiha Aamir, showcasing expertise in AI content creation, prompt engineering, and cinematic web design.",
  metadataBase: new URL("https://sabihaaamir.vercel.app"),
  openGraph: {
    title: "Sabiha Aamir | AI Content Creator & Prompt Engineer",
    description: "Portfolio of Sabiha Aamir, showcasing expertise in AI content creation, prompt engineering, and cinematic web design.",
    url: "/",
    siteName: "Sabiha Aamir Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jedar.variable}>
      <body className="antialiased bg-base text-white cursor-none overflow-x-hidden font-sans">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
