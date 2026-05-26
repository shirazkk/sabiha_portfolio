import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Services />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
