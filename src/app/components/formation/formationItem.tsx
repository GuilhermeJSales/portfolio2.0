import Certification from "./certifications/certification";
import { FormationProps } from "./formation";

export interface CertificationsProps {
  id: number;
  school: string;
  name: string;
  time: string;
  url: string;
}

const origamid: CertificationsProps[] = [
  {
    id: 0,
    name: "NextJS",
    school: "origamid",
    time: "22hr",
    url: "https://www.origamid.com/certificate/8a4ec39d",
  },
  {
    id: 1,
    name: "TypeScript",
    school: "origamid",
    time: "22hr",
    url: "https://www.origamid.com/certificate/261d3d8c",
  },
  {
    id: 2,
    name: "React com TypeScript",
    school: "origamid",
    time: "10hr",
    url: "https://www.origamid.com/certificate/dcb98247",
  },
  {
    id: 3,
    name: "React Completo",
    school: "origamid",
    time: "36hr",
    url: "https://www.origamid.com/certificate/e069e5dd",
  },
  {
    id: 4,
    name: "Redux com React",
    school: "origamid",
    time: "16hr",
    url: "https://www.origamid.com/certificate/466c7246",
  },
  {
    id: 5,
    name: "JavaScript ES6+",
    school: "origamid",
    time: "74hr",
    url: "https://www.origamid.com/certificate/6f09fca4",
  },
  {
    id: 6,
    name: "Web Design Completo",
    school: "origamid",
    time: "44hr",
    url: "https://www.origamid.com/certificate/00bebe4a",
  },
  {
    id: 7,
    name: "TailwindCSS",
    school: "origamid",
    time: "16hr",
    url: "https://www.origamid.com/certificate/2aa4637f",
  },
  {
    id: 8,
    name: "CSS Flexbox",
    school: "origamid",
    time: "6hr",
    url: "http://origamid.com/certificate/49476f43",
  },
  {
    id: 9,
    name: "CSS Grid Layout",
    school: "origamid",
    time: "10hr",
    url: "https://www.origamid.com/certificate/d0de92af",
  },
  {
    id: 10,
    name: "CSS Avançado",
    school: "origamid",
    time: "18hr",
    url: "https://www.origamid.com/certificate/5f530d9f",
  },
  {
    id: 12,
    name: "Adobe XD",
    school: "origamid",
    time: "6hr",
    url: "https://www.origamid.com/certificate/fceee710",
  },
];

const rocketseat: CertificationsProps[] = [
  {
    id: 0,
    name: "ReactJS",
    school: "Rocketseat",
    time: "50hr",
    url: "https://app.rocketseat.com.br/certificates/17247462-85ef-406f-a6a7-cbea9ee1fefa",
  },
  {
    id: 1,
    name: "NLW IA",
    school: "Rocketseat",
    time: "10hr",
    url: "https://app.rocketseat.com.br/certificates/f445e194-5aed-4219-9294-b82f91918bad",
  },
];

export default function FormationItem({
  data,
  curso,
  escola,
  local,
}: FormationProps) {
  return (
    <li className="relative flex h-36 w-full max-w-full items-start gap-5 rounded-md bg-zinc-50 p-2 shadow-md before:absolute before:-left-1 before:block before:h-6 before:w-1.5 before:bg-amber-400 max-lg:flex-col max-lg:pb-8">
      <div className="z-40 pl-5 lg:mb-32">
        <p className="font-bold uppercase lg:text-base">{curso}</p>
        <time className="text-base text-zinc-950 uppercase">{data}</time>
        <p className="text-sm text-zinc-800">{escola}</p>
        <p className="text-sm text-zinc-800">{local}</p>
        {escola === "Origamid" && <Certification certificados={origamid} />}
        {escola === "Rocketseat" && <Certification certificados={rocketseat} />}
      </div>
    </li>
  );
}
