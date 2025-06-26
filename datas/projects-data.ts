import mcodes from "@/app/assets/projects/mcodes.webp";
import personal from "@/app/assets/projects/personal.webp";
import cripto from "@/app/assets/projects/cripto.webp";
import devlink from "@/app/assets/projects/devlink.webp";
import huaming from "@/app/assets/projects/huaming.webp";
import portfolio from "@/app/assets/projects/portfolio.webp";
import coffee from "@/app/assets/projects/coffee.webp";
import blog from "@/app/assets/projects/blog.webp";
import forest from "@/app/assets/projects/forest.webp";
import { StaticImageData } from "next/image";

interface ProjectsProps {
  id: number;
  name: string;
  deploy: string;
  github?: string;
  img: StaticImageData;
  description: string;
  tech: string;
}

export const projectsData: ProjectsProps[] = [
  {
    id: 0,
    name: "MCodes Multimarcas",
    deploy: "https://mcodes.guijsweb.com.br/",
    img: mcodes,
    description:
      "Sistema web para agência de automóveis, com autenticação, painel administrativo e CRUD de veículos. A listagem possui filtros combináveis por modelo, marca, ano, km e preço. Visitantes podem solicitar simulações via formulário e o envio é feito direto para o dashboard do vendedor.",
    tech: "React.js - TypeScript - TailwindCSS - Firebase - React Hook Form - Zod - React Icons - Browser Image Compression - Swiper.js",
  },
  {
    id: 1,
    name: "Trainer Landing Page",
    deploy: "https://personal-trainer.guijsweb.com.br/",
    github: "https://github.com/GuilhermeJSales/personal-landingpage",
    img: personal,
    description:
      "Modelo de landing page voltada para geração de leads e vendas de planilhas de treino via Hotmart, com vídeos demonstrativos, depoimentos de alunos, slides de evolução e tabela de planos com preços. Layout e copy foram desenvolvidos por mim seguindo as necessidades do cliente e as melhores práticas de conversão.",
    tech: "JavaScript - TypeScript - CSS - HTML5 - EmailJS - GlideJS - Adobe XD",
  },
  {
    id: 2,
    name: "Meu Portfólio V1",
    deploy: "https://guijsalesdev.vercel.app/",
    github: "https://github.com/GuilhermeJSales/meu-portfolio",
    img: portfolio,
    description:
      "Desenvolvido com o objetivo de demonstrar meus conhecimentos e habilidades em desenvolvimento front-end. O site conta com rotas para a página inicial, projetos e certificados, sendo totalmente responsivo e otimizado para desempenho.",
    tech: "React.js - Styled-Components - NFL React Helmet - React CSS Transitions - Adobe XD - Adobe Photoshop",
  },
  {
    id: 3,
    name: "Huaming",
    deploy: "https://huaming.com.br/",
    img: huaming,
    description:
      "Site desenvolvido em WordPress com Elementor durante minha atuação na agência Integração Digital. Implementei recursos extras com JavaScript e CSS3 para contornar limitações do CMS. O layout segue um padrão corporativo da multinacional, e foi desenvolvido conforme as diretrizes fornecidas pela equipe de design.",
    tech: "WordPress - Elementor - PHP - JavaScript - CSS3",
  },
  {
    id: 2154,
    name: "GitHub Blog",
    deploy: "https://github-blog-flax.vercel.app/",
    github: "https://github.com/GuilhermeJSales/github-blog",
    img: blog,
    description:
      "O GitHub Blog é uma aplicação que consome a API pública do GitHub para transformar issues em postagens de blog. O sistema permite busca dinâmica por palavras-chave e exibe detalhes do perfil do usuário, como nome, avatar, bio e número de seguidores. A interface é responsiva e otimizada, com rotas dinâmicas para visualização dos posts.",
    tech: "TypeScript - TypeScript - Styled-Components - Fortawesome - React Hook Form - Zod - Axios - React Markdown",
  },
  {
    id: 4,
    name: "Cripto Currency",
    deploy: "https://personal-trainer.guijsweb.com.br/",
    github: "https://github.com/GuilhermeJSales/cripto",
    img: cripto,
    description:
      "Aplicação web desenvolvida para exibir informações atualizadas sobre diversas criptomoedas, consumindo dados de uma API externa. Apresenta nome, símbolo, cotação em dólar e métricas relevantes de forma clara e organizada. A interface é leve, responsiva e otimizada para oferecer uma experiência fluida em qualquer dispositivo.",
    tech: "React.js - TypeScript - CSS Modules - React Router - Fetch API",
  },
  {
    id: 5,
    name: "Coffee Delivery",
    deploy: "https://coffee-delivery-seven-tau.vercel.app/",
    github: "https://github.com/GuilhermeJSales/coffee-delivery",
    img: coffee,
    description:
      "Projeto desenvolvido como parte do desafio do Módulo 2 de React da Rocketseat, com layout fornecido via Figma. É um e-commerce de cafés onde o usuário pode visualizar produtos, selecionar sabores e quantidades, gerenciar o carrinho e finalizar o pedido com endereço e forma de pagamento.",
    tech: "React.js - TypeScript - Styled-Components - React Hook Form - Zod - Phosphor Icons",
  },
  {
    id: 61547,
    name: "Forest",
    deploy: "https://forest-tailwind.vercel.app/",
    github: "https://github.com/GuilhermeJSales/forest",
    img: forest,
    description:
      "O Forest é uma landing page responsiva e acessível desenvolvida com HTML5, CSS3, JavaScript e Tailwind CSS. O projeto simula a página de apresentação de uma hospedagem integrada à natureza, com foco em performance, layout dinâmico e experiência do usuário otimizada para dispositivos móveis e desktop.",
    tech: "JavaScript - TailwindCSS - HTML5",
  },
  {
    id: 6,
    name: "Dev LinkTree",
    deploy: "https://devlinks-five-mu.vercel.app/",
    github: "https://github.com/GuilhermeJSales/devlinks",
    img: devlink,
    description:
      "DevLinks é uma aplicação web que permite cadastro, login (via Firebase Authentication) e personalização de links sociais. Usuários adicionam URLs de suas redes, personalizam cores de fundo e botões, com atualizações refletidas em tempo real. A interface é responsiva e intuitiva.",
    tech: "React.js - TypeScript - Firebase - TailwindCSS - React Icons",
  },
];
