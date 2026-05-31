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
  metadataBase: new URL("https://sabiha-swart.vercel.app"),
  title: {
    default: "Sabiha Aamir | AI Content Creator & Prompt Engineer",
    template: "%s | Sabiha Aamir",
  },
  description: "Portfolio of Sabiha Aamir, specializing in AI-driven content creation, advanced prompt engineering, and cinematic digital storytelling. Student of Artificial Intelligence.",
  openGraph: {
    title: "Sabiha Aamir | AI Content Creator & Prompt Engineer",
    description: "Portfolio of Sabiha Aamir, specializing in AI-driven content creation, advanced prompt engineering, and cinematic digital storytelling.",
    type: "website",
    url: "https://sabiha-swart.vercel.app",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sabiha Aamir",
  "jobTitle": ["AI Content Creator", "Prompt Engineer"],
  "description": "AI Content Creator and Prompt Engineer specializing in cinematic digital storytelling and AI workflows.",
  "knowsAbout": ["Artificial Intelligence", "Prompt Engineering", "Media Automation", "Digital Storytelling"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
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