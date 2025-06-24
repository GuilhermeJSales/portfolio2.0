import Image from "next/image";
import logotipo from "../../../public/logo.webp";
import Certification from "./formation/certifications/certification";
import cv from "@/app/assets/cv.svg";
import { Separator } from "@radix-ui/react-separator";
import github from "@/app/assets/github.svg";
import linkedin from "@/app/assets/linkedin.svg";
import whatsapp from "@/app/assets/whatsapp.svg";
import email from "@/app/assets/email.svg";

export default function Footer() {
  return (
    <footer>
      <section className="relative mt-2 bg-gray-200 pt-20 pb-10">
        <div className="container mb-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-10">
          <nav>
            <h2 className="mb-2 font-bold">Links Rápidos:</h2>
            <ul className="inline-flex flex-col gap-2 *:text-base *:transition-transform *:hover:-translate-x-1 *:hover:text-amber-600">
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#experiencias">Experiências</a>
              </li>
              <li>
                <a href="#formacao">Formação</a>
              </li>
              <li>
                <a href="#habilidades">Habilidades</a>
              </li>
              <li>
                <a href="#projetos">Projetos</a>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-2 md:justify-self-center">
            <h2 className="mb-2 font-bold">Redes Sociais:</h2>
            <ul>
              <li>
                <a
                  href="https://github.com/GuilhermeJSales"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="inline-flex items-center gap-3 text-sm transition-transform hover:-translate-x-1 hover:text-amber-500"
                >
                  <Image
                    src={github}
                    width={28}
                    height={28}
                    alt="GitHub Logo"
                  />
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/guilherme-jesus-sales/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="inline-flex items-center gap-3 text-sm transition-transform hover:-translate-x-1 hover:text-amber-500"
                >
                  <Image
                    src={linkedin}
                    width={28}
                    height={28}
                    alt="LinkedIn Logo"
                  />
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=5511961683295"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  className="inline-flex items-center gap-3 text-sm transition-transform hover:-translate-x-1 hover:text-amber-500"
                >
                  <Image
                    src={whatsapp}
                    width={28}
                    height={28}
                    alt="WhatsApp Logo"
                  />
                  WhatsApp
                </a>
              </li>

              <li>
                <a
                  href="mailto:guilherme.jesus.sales@outlook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="E-mail"
                  className="inline-flex items-center gap-3 text-sm transition-transform hover:-translate-x-1 hover:text-amber-500"
                >
                  <Image src={email} width={28} height={28} alt="E-mail Logo" />
                  E-mail
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-start gap-4 md:justify-self-end">
            <div>
              <h3 className="font-extrabold text-zinc-800 uppercase md:text-base lg:text-xl">
                Guilherme J. Sales
              </h3>
              <h4 className="text-md font-bold text-zinc-500 md:text-base">
                Desenvolvedor Front-End
              </h4>
            </div>
            <Separator
              className="block! h-16 w-[1px] bg-zinc-400 md:hidden! lg:block!"
              orientation="vertical"
            />
            <Image
              src={logotipo}
              width={60}
              height={90}
              alt="logo Guilherme Jesus Sales "
              className="mb-2 block! md:hidden! lg:block!"
            />
          </div>
        </div>

        <a
          href="#"
          className="container block animate-pulse text-sm hover:text-amber-600 md:text-center"
        >
          Voltar ao topo
        </a>
      </section>

      <section className="bg-zinc-800">
        <p className="py-6 text-center text-sm text-zinc-100 dark:text-zinc-400">
          © {new Date().getFullYear()} Guilherme J. Sales. Todos os direitos
          reservados.
        </p>
      </section>
    </footer>
  );
}
