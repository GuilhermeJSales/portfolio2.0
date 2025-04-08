import Image from "next/image";
import minhaFoto from "@/app/assets/minhafoto.webp";
import SocialLinks from "../social-links/social-links";

export default function About() {
  return (
    <section
      className="grid grid-cols-2 items-center justify-items-end gap-14"
      id="sobre"
    >
      <div>
        <h1 className="relative mb-2 text-3xl font-bold text-zinc-800 before:absolute before:-bottom-5 before:left-5 before:-z-10 before:h-25 before:w-5 before:rotate-45 before:bg-orange-300 after:absolute after:-bottom-5 after:-left-1 after:-z-10 after:h-25 after:w-5 after:rotate-45 after:bg-orange-400 lg:text-5xl">
          Guilherme Jesus Sales
        </h1>
        <h2 className="text-xl font-bold text-zinc-500 sm:text-3xl lg:text-3xl">
          Desenvolvedor Front-End
        </h2>

        <div className="mt-8 flex flex-col gap-5 text-gray-700">
          <p>
            Atualmente, moro na cidade de São Paulo, curso Ciência da Computação
            e atuo como desenvolvedor desde 2020, construindo uma carreira
            sólida em desenvolvimento web. Tenho experiência com tecnologias de
            front-end, como{" "}
            <strong>JavaScript, TypeScript, React, Next.js</strong> e o
            ecossistema <strong>Node.js</strong>. Domino{" "}
            <strong>HTML5 e CSS3</strong>, aplicando as melhores práticas de
            semântica e estruturação.
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
