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
      <Certification />
      <section className="relative mt-2 bg-gray-200 py-20">
        <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-4">
          <div className="flex gap-6 max-sm:flex-col">
            <nav>
              <h2 className="mb-2 font-bold">Links Rápidos:</h2>
              <ul className="flex flex-col gap-2 transition-all *:text-base *:hover:text-amber-600">
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
            <Separator
              className="h-full w-[1px] bg-zinc-400"
              orientation="vertical"
            />

            <div className="flex flex-col gap-2">
              <h2 className="mb-2 font-bold">Redes Sociais:</h2>
              <a
                href="https://github.com/GuilhermeJSales"
                target="_blank"
                title="GitHub"
                className="flex items-center gap-3 text-sm hover:text-amber-500"
              >
                <Image src={github} width={28} height={28} alt="GitHub Logo" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/guilherme-jesus-sales/"
                target="_blank"
                title="LinkedIn"
                className="flex items-center gap-3 text-sm hover:text-amber-500"
              >
                <Image
                  src={linkedin}
                  width={28}
                  height={28}
                  alt="LinkedIn Logo"
                />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=5511961683295"
                target="_blank"
                title="WhatsApp"
                className="flex items-center gap-3 text-sm hover:text-amber-500"
              >
                <Image
                  src={whatsapp}
                  width={28}
                  height={28}
                  alt="WhatsApp Logo"
                />
                <span>WhatsApp</span>
              </a>

              <a
                href="mailto:guilherme.jesus.sales@outlook.com"
                target="_blank"
                title="E-mail"
                className="flex items-center gap-3 text-sm hover:text-amber-500"
              >
                <Image src={email} width={28} height={28} alt="E-mail Logo" />
                <span>E-mail</span>
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 md:justify-self-end">
            <div>
              <h3 className="text-xl font-extrabold text-zinc-800 uppercase">
                Guilherme J. Sales
              </h3>
              <h4 className="text-md font-bold text-zinc-500">
                Desenvolvedor Front-End
              </h4>
            </div>
            <Separator
              className="h-16 w-[1px] bg-zinc-400"
              orientation="vertical"
            />
            <Image
              src={logotipo}
              width={60}
              height={90}
              alt="logo Guilherme Jesus Sales"
              className="mb-2"
            />
          </div>
        </div>
      </section>
    </footer>
  );
}
