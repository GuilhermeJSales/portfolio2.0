import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Formation from "./components/formation/formation";

export default function Home() {
  return (
    <main className="pt-14 pb-14">
      <About />
      <Experience />
      <Formation />
    </main>
  );
}
