import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Footer from "./components/footer";
import Formation from "./components/formation/formation";
import Skills from "./components/skills/skills";

export default function Home() {
  return (
    <main className="pt-14">
      <About />
      <Experience />
      <Formation />
      <Skills />
      <Footer />
    </main>
  );
}
