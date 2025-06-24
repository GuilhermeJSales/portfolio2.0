import javascript from "@/app/assets/skills/javascript.svg";
import typescript from "@/app/assets/skills/typescript.svg";
import react from "@/app/assets/skills/react.svg";
import nextjs from "@/app/assets/skills/nextjs.svg";
import nodejs from "@/app/assets/skills/nodejs.svg";
import tailwindcss from "@/app/assets/skills/tailwindcss.svg";
import html5 from "@/app/assets/skills/html5.svg";
import css3 from "@/app/assets/skills/css3.svg";
import git from "@/app/assets/skills/git.svg";
import sql from "@/app/assets/skills/sql.svg";
import wordpress from "@/app/assets/skills/wordpress.svg";
import figma from "@/app/assets/skills/figma.svg";
import photoshop from "@/app/assets/skills/photoshop.svg";

interface SkillsProps {
  id: number;
  tech: string;
  src: string;
}

export const skillsData: SkillsProps[] = [
  {
    id: 0,
    tech: "JavaScript",
    src: javascript,
  },
  {
    id: 1,
    tech: "Typescript",
    src: typescript,
  },
  {
    id: 2,
    tech: "React",
    src: react,
  },
  {
    id: 3,
    tech: "Next.js",
    src: nextjs,
  },
  {
    id: 4,
    tech: "Node.js",
    src: nodejs,
  },
  {
    id: 5,
    tech: "HTML5",
    src: html5,
  },
  {
    id: 6,
    tech: "CSS3",
    src: css3,
  },
  {
    id: 7,
    tech: "Tailwindcss",
    src: tailwindcss,
  },

  {
    id: 8,
    tech: "Git/GitHub",
    src: git,
  },
  {
    id: 9,
    tech: "SQL Server",
    src: sql,
  },
  {
    id: 10,
    tech: "Wordpress",
    src: wordpress,
  },
  {
    id: 11,
    tech: "Figma",
    src: figma,
  },
  {
    id: 12,
    tech: "Photoshop",
    src: photoshop,
  },
];
