"use client";

import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Cursor from "@/components/ui/Cursor";
import { Preloader } from "@/components/ui/Preloader";
import { LoadingProvider, useLoading } from "@/components/context/LoadingContext";

function PreloaderManager() {
  const { loaded, setLoaded } = useLoading();
  return !loaded ? <Preloader onComplete={() => setLoaded(true)} /> : null;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body className="antialiased bg-base text-white cursor-none overflow-x-hidden">
        <LoadingProvider>
          <PreloaderManager />
          <Cursor />
          <div className="noise" />
          <SmoothScroll>
            <MainContent>{children}</MainContent>
          </SmoothScroll>
        </LoadingProvider>
      </body>
    </html>
  );
}

function MainContent({ children }: { children: React.ReactNode }) {
  const { loaded } = useLoading();
  return (
    <main className={`overflow-x-hidden w-full transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </main>
  );
}