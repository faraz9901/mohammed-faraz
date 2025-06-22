import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}

