export type ExperienceProps = {
  id: number;
  data: string;
  empresa: string;
  cargo: string;
  description: string;
  competencias: string[];
};

export const experiences: ExperienceProps[] = [
  {
    id: 0,
    data: "11/23 a atual",
    empresa: "Freelancer",
    cargo: "Desenvolvedor Front-End",
    description:
      "Responsável por todas as etapas do trabalho, desde reuniões com clientes, desenvolvimento do layout e desenvolvimento dos web sites estáticos e landing pages/paginas de capturas.",
    competencias: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ReactJS",
      "NextJS",
      "TypeScript",
      "NodeJS",
      "WordPress",
      "Elementor",
      "Figma",
      "Adobe Photoshop",
    ],
  },
  {
    id: 1,
    data: "07/24 a 04/2025",
    empresa: "Quality Digital",
    cargo: "Analista de sistemas JR",
    description:
      "Responsável pelo suporte a sistemas ERP na Protege, líder no setor de segurança no Brasil, atuando na resolução de bugs, elaboração de documentação técnica detalhada e implementação de melhorias contínuas.",
    competencias: ["SQL Server", "CherWell", "JavaScript", "ReactJS", "NodeJS"],
  },
  {
    id: 2,
    data: "03/23 a 11/23",
    empresa: "Integração Digital",
    cargo: "Desenvolvedor Front-End",
    description:
      "Responsável pelo desenvolvimento e manutenção de sites institucionais, com ênfase em performance, acessibilidade, SEO e boas práticas de desenvolvimento, assegurando uma experiência de navegação fluida, inclusiva e de fácil manutenção.",
    competencias: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ReactJS",
      "NextJS",
      "TypeScript",
      "JQuery",
      "NodeJS",
      "PHP",
      "WordPress",
      "Elementor",
      "Figma",
      "Adobe Photoshop",
    ],
  },
  {
    id: 3,
    data: "02/21 a 03/23",
    empresa: "Agência R3",
    cargo: "Desenvolvedor Front-End",
    description:
      "Responsável pelo desenvolvimento e manutenção de sites institucionais, com ênfase em performance, acessibilidade, SEO e boas práticas de desenvolvimento, assegurando uma experiência de navegação fluida, inclusiva e de fácil manutenção.",
    competencias: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "WordPress",
      "Elementor",
      "Figma",
      "Adobe Photoshop",
    ],
  },
];
