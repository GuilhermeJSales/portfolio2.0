import { experiences } from "../../../../experience-data";
import ExperienceItem from "./experienceItem";

export default function Experience() {
  return (
    <section className="grid gap-10 pt-14 lg:grid-cols-[1fr_2fr] lg:gap-24">
      <h2 className="text-6xl leading-none font-extrabold break-all text-zinc-700 uppercase lg:max-w-[4ch] lg:text-[8rem]">
        Experiências
      </h2>

      <div>
        {experiences.map((exp) => (
          <ExperienceItem key={exp.id} {...exp} />
        ))}
      </div>
    </section>
  );
}
