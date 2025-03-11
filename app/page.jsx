import About from "@/components/About";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="mb-10">
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
