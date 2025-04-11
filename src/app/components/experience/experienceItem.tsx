import { ExperienceProps } from "../../../../experience-data";

export default function ExperienceItem({
  cargo,
  data,
  empresa,
  description,
  competencias,
}: ExperienceProps) {
  return (
    <article className="card-sombra-button mb-5 grid items-start gap-5 rounded-3xl bg-zinc-100 p-10 md:grid-cols-2">
      <div>
        <p className="text-xl font-bold text-zinc-950">{empresa}</p>
        <time className="mb-2.5 text-sm">{data}</time>
        <p className="text-base text-zinc-700">{description}</p>
      </div>
      <div>
        <p className="mb-2.5 text-xl font-bold text-zinc-950">{cargo}</p>
        <ul className="flex flex-wrap gap-2.5">
          {competencias.map((comp, i) => (
            <li key={i} className="rounded-sm bg-white p-1.5 text-base">
              {comp}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
