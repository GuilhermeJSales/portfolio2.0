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
    data: "ABRIL 2025 - ATUAL",
    empresa: "Freelancer",
    cargo: "Desenvolvedor Front-End",
    info2: {
      data2: "",
      cargo2: "",
    },
    promocao: false,
    description:
      "Atuo no desenvolvimento de sites institucionais e landing pages responsivas e performáticas, cuidando de todo o processo, desde o layout e identidade visual até a criação de imagens, textos (copy) e implementação do front-end.",
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
      "Responsável pelo suporte a sistemas ERP na Protege, líder no setor de segurança no Brasil, atuando na resolução de bugs, elaboração de documentação técnica detalhada e implementação de melhorias contínuas. Desenvolvi um sistema web de armazenamento e atualização de KCS para melhoria de performance da equipe, utilizando React, Firebase e CSS Modules.",
    competencias: ["SQL Server", "CherWell", "JavaScript", "ReactJS", "NodeJS"],
  },
  {
    id: 2,
    data: "MARÇO 2023 - NOVEMBRO 2023",
    empresa: "Integração Digital",
    cargo: "Desenvolvedor Front-End",
    info2: {
      data2: "",
      cargo2: "",
    },
    promocao: false,
    description:
      "Iniciei na empresa como Desenvolvedor Front-End JR 1, sendo responsável pelo desenvolvimento e manutenção de landing pages responsivas, alterações de layout, edição de imagens, configuração de hospedagens e resolução de demandas da equipe de tráfego pago. Após demonstrar proatividade e domínio técnico, fui promovido a Desenvolvedor Front-End JR 2, assumindo projetos mais complexos, como sites institucionais completos, com foco em performance, acessibilidade, SEO e boas práticas de desenvolvimento. Além disso, passei a atuar na refatoração de códigos legados e na implementação de sites com arquitetura mobile first.",
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
    data: "NOVEMBRO 2019 - MARÇO 2023",
    empresa: "Freelancer",
    cargo: "Web Designer",
    info2: {
      data2: "",
      cargo2: "",
    },
    promocao: false,
    description:
      "Atuei como freelancer atendendo clientes e agências de marketing durante o período da pandemia, oferecendo soluções completas em web design. Fui responsável pelo desenvolvimento de sites responsivos e personalizados, criação de logotipos, peças para redes sociais e edição de vídeos.",
    competencias: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "JQuery",
      "PHP",
      "WordPress",
      "Elementor",
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe Premier",
    ],
  },
];
