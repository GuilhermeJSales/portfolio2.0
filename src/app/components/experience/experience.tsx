import { experiences } from "../../../../experience-data";
import ExperienceItem from "./experienceItem";

export default function Experience() {
  return (
    <section className="container pt-28" id="experiencias">
      <h2 className="mb-18 text-4xl font-extrabold text-zinc-800 uppercase md:text-5xl lg:text-4xl xl:text-5xl">
        Experiências
      </h2>
      <ul className="flex flex-col pl-6">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.id} {...exp} />
        ))}
      </ul>
    </section>
  );
}
