export type ExperienceProps = {
  id: number;
  data: string;
  empresa: string;
  cargo: string;
  info2: {
    data2: string;
    cargo2: string;
  };
  promocao: boolean;
  description: string;
  competencias: string[];
};

export const experiences: ExperienceProps[] = [
  {
    id: 0,
    data: "NOVEMBRO 2023 - ATUAL",
    empresa: "Freelancer",
    cargo: "Desenvolvedor Front-End",
    info2: {
      data2: "",
      cargo2: "",
    },
    promocao: false,
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
    data: "JULHO 2024 - ABRIL 2025",
    empresa: "Quality Digital",
    cargo: "Analista de sistemas JR",
    info2: {
      data2: "",
      cargo2: "",
    },
    promocao: false,
    description:
      "Responsável pelo suporte a sistemas ERP na Protege, líder no setor de segurança no Brasil, atuando na resolução de bugs, elaboração de documentação técnica detalhada e implementação de melhorias contínuas.",
    competencias: ["SQL Server", "CherWell", "JavaScript", "ReactJS", "NodeJS"],
  },
  {
    id: 2,
    data: "MARÇO 2023 - JUNHO 2023",
    empresa: "Integração Digital",
    cargo: "Desenvolvedor Front-End - Junior",
    info2: {
      data2: "JUNHO 2023 - NOVEMBRO 2023",
      cargo2: "Desenvolvedor Front-End - Pleno",
    },
    promocao: true,
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
    data: "FEVEREIRO 2021 - MARÇO 2023",
    empresa: "Agência R3",
    cargo: "Desenvolvedor Front-End",
    info2: {
      data2: "",
      cargo2: "",
    },
    promocao: false,
    description:
      "Responsável pelo desenvolvimento e manutenção de sites institucionais, além de desenvolvimento de imagens, textos e manutenção de temas premium do wordpress.",
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
