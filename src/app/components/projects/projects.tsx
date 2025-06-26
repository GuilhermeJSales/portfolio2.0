import Image from "next/image";
import { projectsData } from "../../../../datas/projects-data";
import { VscGithub } from "react-icons/vsc";
import { HiOutlineGlobeAlt } from "react-icons/hi";

export default function Projects() {
  return (
    <section className="bg-zinc-50 py-20" id="projetos">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-zinc-900 uppercase md:text-5xl">
            Projetos
          </h2>
          <p className="mt-2 text-zinc-600">
            Conheça os principais projetos que já desenvolvi
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <Image
                  src={project.img}
                  alt={project.name}
                  width={600}
                  height={300}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-xl font-semibold text-zinc-800">
                  {project.name}
                </h3>
                <p className="text-sm text-amber-700">{project.tech}</p>
                <p className="text-sm text-zinc-600">{project.description}</p>
                <div className="mt-auto flex gap-4 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-zinc-700 hover:text-zinc-900"
                      title="GitHub"
                    >
                      <VscGithub size={22} />
                    </a>
                  )}
                  {project.deploy && (
                    <a
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Deploy"
                      className="text-zinc-700 hover:text-zinc-900"
                      title="Deploy"
                    >
                      <HiOutlineGlobeAlt size={22} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
