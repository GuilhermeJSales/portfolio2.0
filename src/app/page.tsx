import About from "./components/about/about";
import Experience from "./components/experience/experience";

export default function Home() {
  return (
    <main className="container pt-14 pb-14">
      <About />
      <Experience />
    </main>
  );
}
