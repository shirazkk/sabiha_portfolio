import "./globals.css";
import { Poppins } from "next/font/google";
import ClientWrapper from "@/components/layout/ClientWrapper";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sabiha Aamir | AI Content Creator & Prompt Engineer",
  description:
    "Portfolio of Sabiha Aamir, showcasing expertise in AI content creation, prompt engineering, and cinematic web design.",
  metadataBase: new URL("https://sabihaaamir.vercel.app"),
  openGraph: {
    title: "Sabiha Aamir | AI Content Creator & Prompt Engineer",
    description:
      "Portfolio of Sabiha Aamir, showcasing expertise in AI content creation, prompt engineering, and cinematic web design.",
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
    <html lang="en" className={poppins.variable}>
      <body className="antialiased cursor-none overflow-x-hidden ">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
