import About from "@/components/About";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Section from "@/components/Section";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="mb-10">
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Section />
      <Contact />

    </div>
  );
}
