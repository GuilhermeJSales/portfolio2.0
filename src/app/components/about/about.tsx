import Image from "next/image";
import minhaFoto from "@/app/assets/minhafoto.webp";
import SocialLinks from "../social-links/social-links";

export default function About() {
  return (
    <section
      className="container grid items-center gap-14 lg:grid-cols-[minmax(0,_800px)_auto] lg:justify-items-end"
      id="sobre"
    >
      <div>
        <h1 className="relative mb-2 text-4xl font-extrabold text-zinc-800 uppercase before:absolute before:-bottom-5 before:left-6 before:-z-10 before:h-25 before:w-5 before:rotate-45 before:bg-orange-300 after:absolute after:-bottom-5 after:left-1 after:-z-10 after:h-25 after:w-5 after:rotate-45 after:bg-orange-400 md:text-5xl lg:text-4xl xl:text-5xl">
          Guilherme J. Sales
        </h1>
        <h2 className="text-xl font-bold text-zinc-500 md:text-3xl lg:text-2xl xl:text-3xl">
          Desenvolvedor Front-End
        </h2>

        <div className="mt-8 flex flex-col gap-5 text-gray-700">
          <p>
            Olá, sou Guilherme Jesus Sales, desenvolvedor front-end com
            experiência desde 2020 na criação de interfaces modernas,
            performáticas e bem estruturadas. Tenho domínio de tecnologias como{" "}
            <strong>React</strong>, <strong>Next.js</strong>,{" "}
            <strong>TypeScript</strong>, <strong>HTML5</strong>,{" "}
            <strong>CSS3</strong> e foco em boas práticas de desenvolvimento,
            como acessibilidade, semântica e código limpo.
          </p>

          <p>
            Meu objetivo é entregar soluções escaláveis e de alto impacto em
            cada projeto do qual participo.
          </p>
          <SocialLinks />
        </div>
      </div>

      <Image
        className="card-sombra rounded-br-2xl"
        src={minhaFoto}
        width={500}
        height={468}
        alt="minha foto"
      />
    </section>
  );
}
