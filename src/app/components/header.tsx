import Image from "next/image";
import logotipo from "../../../public/logo.webp";
import cv from "@/app/assets/cv.svg";

export default function Header() {
  return (
    <header className="container grid grid-cols-[1fr_auto] items-center pt-8 pb-8">
      <Image
        src={logotipo}
        width={80}
        height={100}
        alt="logo Guilherme Jesus Sales"
      />

      <nav>
        <ul className="flex items-center gap-2.5 *:*:rounded-2xl *:*:p-3 *:*:text-gray-700 *:*:transition *:*:duration-500 *:*:ease-in-out *:*:hover:bg-gray-100">
          <li>
            <a href="#sobre">Sobre</a>
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
            <a href="#habilidades">Projetos</a>
          </li>
          <li>
            <a
              href="/curriculo-VITAE.pdf"
              className="flex items-center gap-1.5"
            >
              Meu Currículo{" "}
              <Image src={cv} width={20} height={20} alt="download curriculo" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
