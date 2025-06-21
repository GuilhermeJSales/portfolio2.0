interface CertificationsProps {
  id: number;
  name: string;
  school: string;
  time: string;
  url: string;
}

const certifications: CertificationsProps[] = [
  {
    id: 0,
    name: "NextJS",
    school: "Origamid",
    time: "22hr",
    url: "https://www.origamid.com/certificate/8a4ec39d",
  },
  {
    id: 1,
    name: "ReactJS",
    school: "Rocketseat",
    time: "50hr",
    url: "https://app.rocketseat.com.br/certificates/17247462-85ef-406f-a6a7-cbea9ee1fefa",
  },
  {
    id: 2,
    name: "TypeScript",
    school: "Origamid",
    time: "22hr",
    url: "https://www.origamid.com/certificate/dcb98247",
  },
  {
    id: 3,
    name: "React com TypeScript",
    school: "Origamid",
    time: "10hr",
    url: "https://www.origamid.com/certificate/dcb98247",
  },
  {
    id: 4,
    name: "React Completo",
    school: "Origamid",
    time: "36hr",
    url: "https://www.origamid.com/certificate/e069e5dd",
  },
  {
    id: 5,
    name: "Redux com React",
    school: "Origamid",
    time: "16hr",
    url: "https://www.origamid.com/certificate/466c7246",
  },
  {
    id: 6,
    name: "JavaScript ES6+",
    school: "Origamid",
    time: "74hr",
    url: "https://www.origamid.com/certificate/6f09fca4",
  },
  {
    id: 7,
    name: "Web Design Completo",
    school: "Origamid",
    time: "44hr",
    url: "https://www.origamid.com/certificate/00bebe4a",
  },
  {
    id: 8,
    name: "TailwindCSS",
    school: "Origamid",
    time: "16hr",
    url: "https://www.origamid.com/certificate/2aa4637f",
  },
  {
    id: 9,
    name: "CSS Flexbox",
    school: "Origamid",
    time: "6hr",
    url: "http://origamid.com/certificate/49476f43",
  },
  {
    id: 10,
    name: "CSS Grid Layout",
    school: "Origamid",
    time: "10hr",
    url: "https://www.origamid.com/certificate/d0de92af",
  },
  {
    id: 11,
    name: "CSS Avançado",
    school: "Origamid",
    time: "18hr",
    url: "https://www.origamid.com/certificate/5f530d9f",
  },
  {
    id: 12,
    name: "Git e GitHub",
    school: "Udemy",
    time: "1hr",
    url: "https://www.udemy.com/certificate/UC-be5224c6-fd7e-425e-bea6-b1af83e9d930/",
  },
  {
    id: 13,
    name: "Design System",
    school: "Rocketseat",
    time: "5hr",
    url: "https://app.rocketseat.com.br/certificates/a99ec08d-4e13-40bf-a433-9bbf555ec70f",
  },
  {
    id: 14,
    name: "Adobe XD",
    school: "Origamid",
    time: "6hr",
    url: "https://www.origamid.com/certificate/fceee710",
  },
];

export default function Certification() {
  return (
    <article>
      <h2 className="mb-18 text-4xl font-extrabold text-zinc-800 uppercase md:text-5xl lg:text-4xl xl:text-5xl">
        Certificados:
      </h2>
      <ul className="flex gap-6 p-4 max-lg:snap-x max-lg:snap-mandatory max-lg:overflow-x-auto lg:flex-wrap">
        {certifications.map((item) => (
          <li key={item.id}>
            <a
              href={item.url}
              target="_blank"
              referrerPolicy="no-referrer"
              title={`${item.name} - ${item.school} - ${item.time}`}
              className="rounded-2xl border border-zinc-950 p-2 text-center whitespace-nowrap transition-all hover:border-amber-600 hover:text-amber-600"
            >
              {item.name} - {item.school}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
