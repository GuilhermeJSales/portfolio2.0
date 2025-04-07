import Image from "next/image";
import minhaFoto from "/public/minhafoto.webp";
import github from "/public/github.svg";
import linkedin from "/public/linkedin.svg";
import email from "/public/email.svg";
import cv from "/public/cv.svg";

export default function About() {
  return (
    <section className="grid grid-cols-2 items-center justify-items-end gap-14">
      <div>
        <h1 className="relative mb-2 text-3xl font-bold text-zinc-800 before:absolute before:-bottom-5 before:left-5 before:-z-10 before:h-25 before:w-5 before:rotate-45 before:bg-orange-300 after:absolute after:-bottom-5 after:-left-1 after:-z-10 after:h-25 after:w-5 after:rotate-45 after:bg-orange-400 lg:text-5xl dark:text-zinc-100">
          Guilherme Jesus Sales
        </h1>
        <h2 className="text-xl font-bold text-zinc-500 sm:text-3xl lg:text-3xl dark:text-zinc-400">
          Desenvolvedor Front-End
        </h2>

        <div className="mt-8 flex flex-col gap-5 text-gray-700 dark:text-gray-50">
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

          <div className="flex items-center gap-2.5">
            <a
              href="/curriculo-VITAE.pdf"
              target="_blank"
              title="Currículo Download"
              download
              className="bg-orange card-sombra-button mr-1.5 flex items-center gap-2.5 rounded-4xl border-1 border-zinc-800 px-4 py-2"
            >
              Currículo{" "}
              <Image src={cv} width={30} height={30} alt="Download logo" />
            </a>
            <a
              href="https://github.com/GuilhermeJSales"
              target="_blank"
              title="GitHub"
            >
              <Image src={github} width={30} height={30} alt="GitHub Logo" />
            </a>

            <a
              href="https://www.linkedin.com/in/guilherme-jesus-sales/"
              target="_blank"
              title="LinkedIn"
            >
              <Image
                src={linkedin}
                width={30}
                height={30}
                alt="LinkedIn Logo"
              />
            </a>

            <a
              href="mailto:guilherme.jesus.sales@outlook.com"
              target="_blank"
              title="E-mail"
              className="flex items-center gap-2.5"
            >
              <Image src={email} width={30} height={30} alt="E-mail Logo" />
              guilherme.jesus.sales@outlook.com
            </a>
          </div>
        </div>
      </div>

      <Image
        className="card-sombra rounded-br-2xl"
        src={minhaFoto}
        width={500}
        height={500}
        alt="minha foto"
      />
    </section>
  );
}
