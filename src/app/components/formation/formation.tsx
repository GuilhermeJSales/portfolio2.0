import FormationItem from "./formationItem";

export type FormationProps = {
  id: number;
  data: string;
  curso: string;
  escola: string;
  local: string;
};

export default function Formation() {
  const formationData: FormationProps[] = [
    {
      id: 0,
      data: "FEVEREIRO 2025 - NOVEMBRO 2028",
      curso: "Ciência da Computação",
      escola: "Universidade Cruzeiro do Sul",
      local: "Anália Franco - São Paulo",
    },
    {
      id: 1,
      data: "NOVEMBRO 2020 - JANEIRO 2025",
      curso: "Front-End & UX/UI Design ",
      escola: "Origamid",
      local: "Remoto/EAD",
    },
    {
      id: 2,
      data: "ABRIL 2023 - ABRIL 2024",
      curso: "Ignite - Formação em React",
      escola: "Rocketseat",
      local: "Remoto/EAD",
    },
    {
      id: 3,
      data: "ABRIL 2018 - NOVEMBRO 2020",
      curso: "Design Digital e Multimídia",
      escola: "SAGA - School of Art and Game Animation",
      local: "Tatuapé - São Paulo",
    },
    {
      id: 4,
      data: "FEVEREIRO 2012 - DEZEMBRO 2013",
      curso: "Análise e Desenv. de Sistemas",
      escola: "Universidade Nove de Julho - UNINOVE",
      local: "Vila Maria - São Paulo",
    },
    {
      id: 5,
      data: "JANEIRO 2012 - JANEIRO 2013",
      curso: "Inglês - Básico & Intermediário",
      escola: "Microlins",
      local: "Penha - São Paulo",
    },
  ];
  return (
    <section className="bg-gray-100 pt-28" id="formacao">
      <div className="container">
        <h2 className="mb-18 text-4xl font-extrabold text-zinc-800 uppercase md:text-5xl lg:text-4xl xl:text-5xl">
          Cursos e Formações
        </h2>

        <ul className="items-start pl-6 lg:grid lg:grid-cols-3 lg:justify-items-center">
          {formationData.map((form) => (
            <FormationItem key={form.id} {...form} />
          ))}
        </ul>
      </div>
    </section>
  );
}
