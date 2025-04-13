import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Formation from "./components/formation/formation";
import Skills from "./components/skills/skills";

export default function Home() {
  return (
    <main className="container pt-14 pb-14">
      <About />
      <Experience />
      <Formation />
      <Skills />
    </main>
  );
}
