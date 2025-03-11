import Landing from "@/components/Landing";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between">
      <Landing />
      <Projects />
    </div>
  );
}
