import Image from "next/image";
import { projectsData } from "../../../../datas/projects-data";
import { FiExternalLink } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";
import { HiOutlineGlobeAlt } from "react-icons/hi";

import { Roboto } from "next/font/google";
import { Separator } from "@radix-ui/react-separator";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function Projects() {
  return (
    <section className="py-10 md:py-28" id="projetos">
      <div className="container">
        <h2 className="text-4xl font-extrabold text-zinc-800 uppercase md:text-5xl lg:text-4xl xl:text-5xl">
          Projetos
        </h2>
        <p className="mb-18 text-zinc-500">
          Conheça os principais projetos que já desenvolvi
        </p>

        <ul className="flex flex-col gap-12">
          {projectsData.map((project, index) => (
            <li
              key={project.id}
              className={`grid grid-cols-1 items-center max-xl:justify-items-center xl:grid-cols-12 ${index % 2 === 1 ? "xl:flex-row-reverse" : ""} `}
            >
              <div
                className={`z-2 mb-10 flex flex-col gap-2 max-xl:order-16 xl:col-span-7 xl:row-start-1 xl:-row-end-1 ${index % 2 === 1 ? "xl:col-start-6 xl:col-end-12" : "xl:col-start-1 xl:col-end-8"} `}
              >
                <div
                  className={`flex items-center ${index % 2 === 1 ? "xl:justify-end" : "xl:justify-start"}`}
                >
                  <h3
                    className={`mr-3 text-2xl font-semibold text-zinc-900 capitalize ${roboto.className}`}
                  >
                    {project.name}
                  </h3>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver repositório no GitHub"
                      title="Ver repositório no GitHub"
                      className="mr-1"
                    >
                      <VscGithub size={24} color="black" />
                    </a>
                  )}
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver Projeto"
                    title="Ver Projeto"
                  >
                    <FiExternalLink size={24} />
                  </a>
                </div>
                <div
                  className={`bg-white p-4 max-xl:max-w-[828px] max-xl:shadow-md ${roboto.className} ${index % 2 === 1 ? "sombra-dir xl:*:text-right" : "sombra xl:*:text-left"}`}
                >
                  <p className="mb-2 text-sm text-amber-700">{project.tech}</p>
                  <Separator
                    className="mb-2 h-[1px] bg-zinc-300"
                    orientation="horizontal"
                  />
                  <p className="text-sm text-zinc-800">{project.description}</p>
                </div>
              </div>
              <div
                className={`mb-10 flex flex-col gap-2 max-xl:order-1 xl:row-start-1 xl:-row-end-1 ${index % 2 === 1 ? "xl:col-start-1 xl:col-end-8" : "xl:col-start-6 xl:col-end-12"} `}
              >
                <Image
                  src={project.img}
                  width={828}
                  height={469}
                  alt={project.name}
                  className={`${index % 2 === 1 ? "card-sombra-dir" : "card-sombra"}`}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
