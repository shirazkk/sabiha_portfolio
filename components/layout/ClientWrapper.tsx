"use client";

import SmoothScroll from "@/components/ui/SmoothScroll";
import Cursor from "@/components/ui/Cursor";
import { Preloader } from "@/components/ui/Preloader";
import {
  LoadingProvider,
  useLoading,
} from "@/components/context/LoadingContext";

function PreloaderManager() {
  const { loaded, setLoaded } = useLoading();
  return !loaded ? <Preloader onComplete={() => setLoaded(true)} /> : null;
}

function MainContent({ children }: { children: React.ReactNode }) {
  const { loaded } = useLoading();
  return (
    <main
      className={`overflow-x-hidden w-full transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </main>
  );
}

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LoadingProvider>
      <PreloaderManager />
      <Cursor />
      <SmoothScroll>
        <MainContent>{children}</MainContent>
      </SmoothScroll>
    </LoadingProvider>
  );
}
