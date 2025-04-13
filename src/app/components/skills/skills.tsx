"use client";
import React from "@/app/assets/skills/react.svg";
import Next from "@/app/assets/skills/nextjs.svg";
import Typescript from "@/app/assets/skills/typescript.svg";
import Javascript from "@/app/assets/skills/javascript.svg";
import Node from "@/app/assets/skills/nodejs.svg";
import SQL from "@/app/assets/skills/sqldeveloper.svg";
import Redux from "@/app/assets/skills/redux.svg";
import Git from "@/app/assets/skills/git.svg";
import HTML5 from "@/app/assets/skills/html5.svg";
import CSS3 from "@/app/assets/skills/css3.svg";
import Tailwind from "@/app/assets/skills/tailwindcss.svg";
import Wordpress from "@/app/assets/skills/wordpress.svg";
import Photoshop from "@/app/assets/skills/photoshop.svg";
import Figma from "@/app/assets/skills/figma.svg";
import Image from "next/image";
import { useMedia } from "@/app/hooks/useMedia";

export default function Skills() {
  const media = useMedia("(max-width: 570px)");
  const skillsTec = [
    {
      id: "ReactJS",
      icon: React,
    },
    {
      id: "NextJS",
      icon: Next,
    },
    {
      id: "TypeScript",
      icon: Typescript,
    },
    {
      id: "JavaScript",
      icon: Javascript,
    },
    {
      id: "NodeJS",
      icon: Node,
    },
    {
      id: "SQL Server",
      icon: SQL,
    },
    {
      id: "Redux",
      icon: Redux,
    },
    {
      id: "Git",
      icon: Git,
    },
    {
      id: "HTML5",
      icon: HTML5,
    },
    {
      id: "CSS3",
      icon: CSS3,
    },
    {
      id: "TailwindCSS",
      icon: Tailwind,
    },
    {
      id: "WordPress",
      icon: Wordpress,
    },
    {
      id: "Photoshop",
      icon: Photoshop,
    },
    {
      id: "Figma",
      icon: Figma,
    },
  ];

  return (
    <section className="container pt-28" id="formacao">
      <h2 className="mb-18 text-4xl font-extrabold text-zinc-800 uppercase md:text-5xl lg:text-4xl xl:text-5xl">
        Habilidades
      </h2>

      <ul className="flex flex-wrap items-center gap-10 max-md:justify-center">
        {skillsTec.map((skill) => (
          <li
            className={`${media ? "w-30" : "w-52"} ${media && "flex-col"} flex items-center gap-3 rounded-xs border-1 border-zinc-700 p-4 text-zinc-600 shadow-[0_5px_0_rgba(0,0,0,0.25)] transition-all ease-in-out hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.25)]`}
            key={skill.id}
            title={skill.id}
          >
            <Image
              src={skill.icon}
              width={40}
              height={40}
              alt={skill.id}
              className="drop-shadow-blue-50"
            />{" "}
            <span className={`${media ? "text-sm" : "text-base"}`}>
              {skill.id}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
