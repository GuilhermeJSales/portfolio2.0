import mcodes from "@/app/assets/projects/mcodes.webp";
import personal from "@/app/assets/projects/personal.webp";
import cripto from "@/app/assets/projects/cripto.webp";
import devlink from "@/app/assets/projects/devlink.webp";
import huaming from "@/app/assets/projects/huaming.webp";
import portfolio from "@/app/assets/projects/portfolio.webp";
import coffee from "@/app/assets/projects/coffee.webp";
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
      "Sistema web desenvolvido para uma agência de automóveis, com autenticação de usuários e painel administrativo completo. Usuários logados podem cadastrar, editar e excluir veículos. A listagem conta com filtros reativos combináveis, permitindo busca por modelo, marca, ano, quilometragem e faixa de preço. Visitantes podem solicitar simulações por meio de um formulário, com os dados enviados diretamente para o dashboard do vendedor.",
    tech: "React.js - TypeScript - TailwindCSS - Firebase - React Hook Form - Zod - React Icons - Browser Image Compression - Swiper.js",
  },
  {
    id: 1,
    name: "Personal Trainer Landing Page",
    deploy: "https://personal-trainer.guijsweb.com.br/",
    github: "https://github.com/GuilhermeJSales/personal-landingpage",
    img: personal,
    description:
      "Landing Page desenvolvida para um profissional de educação física com foco em geração de leads e vendas de planilhas de treino via Hotmart. A página apresenta vídeos demonstrativos, depoimentos de alunos, slides com evoluções e uma tabela de planos com os valores. Todo o layout e a copy foram criados por mim, com base nas necessidades do cliente e boas práticas de conversão.",
    tech: "TypeScript - CSS - HTML5 - Vite - EmailJS - GlideJS - Adobe XD",
  },
  {
    id: 2,
    name: "Meu Portfólio V1.0",
    deploy: "https://guijsalesdev.vercel.app/",
    github: "https://github.com/GuilhermeJSales/meu-portfolio",
    img: portfolio,
    description:
      "Meu primeiro portfólio foi desenvolvido com o objetivo de demonstrar meus conhecimentos e habilidades em desenvolvimento front-end. O site conta com rotas para a página inicial, projetos e certificados, sendo totalmente responsivo e otimizado para desempenho. O layout e o logotipo foram criados por mim utilizando Adobe XD e Photoshop. Para gerenciar as meta tags do projeto, utilizei o componente NFL React Helmet, garantindo melhor SEO e controle dinâmico dos dados no head da aplicação. A codificação foi realizada com React e Styled Components.",
    tech: "React.js - Styled-Components - NFL React Helmet - React CSS Transitions - Adobe XD - Adobe Photoshop - Vite",
  },
  {
    id: 3,
    name: "Huaming",
    deploy: "https://huaming.com.br/",
    img: huaming,
    description:
      "Site desenvolvido durante minha atuação como prestador de serviços para a agência Integração Digital. Utilizei WordPress com Elementor para a estrutura principal e implementei funcionalidades adicionais com JavaScript e CSS3, devido a limitações do próprio construtor. O layout segue um padrão corporativo da empresa, que é uma multinacional, e foi desenvolvido fielmente conforme as diretrizes fornecidas pela equipe de design.",
    tech: "WordPress - Elementor - PHP - JavaScript - CSS3",
  },
  {
    id: 4,
    name: "Cripto Currency",
    deploy: "https://personal-trainer.guijsweb.com.br/",
    github: "https://github.com/GuilhermeJSales/cripto",
    img: cripto,
    description:
      "Aplicação web que consome uma API externa para exibir informações atualizadas sobre diversas criptomoedas. O sistema apresenta dados como nome, símbolo, valor em dólar e outras métricas relevantes de forma clara e organizada. A interface é leve, responsiva e otimizada para proporcionar uma navegação rápida e intuitiva em qualquer dispositivo.",
    tech: "React.js - TypeScript - CSS Modules - Vite - React Router - Fetch API",
  },
  {
    id: 5,
    name: "Coffee Delivery",
    deploy: "https://coffee-delivery-seven-tau.vercel.app/",
    github: "https://github.com/GuilhermeJSales/coffee-delivery",
    img: coffee,
    description:
      "Projeto desenvolvido como parte do desafio do Módulo 2 de React da Rocketseat. O layout foi fornecido pela própria plataforma por meio do Figma. Trata-se de um e-commerce de cafés, onde o usuário pode visualizar os produtos, selecionar sabores e quantidades, adicionar ou remover itens do carrinho e finalizar o pedido informando endereço de entrega e forma de pagamento.",
    tech: "React - TypeScript - Styled-Components - React Hook Form - Zod - Phosphor Icons - Vite",
  },
  {
    id: 6,
    name: "Dev LinkTree",
    deploy: "https://devlinks-five-mu.vercel.app/",
    github: "https://github.com/GuilhermeJSales/devlinks",
    img: devlink,
    description:
      "O DevLinks é uma aplicação web onde usuários podem se cadastrar, fazer login e personalizar seus próprios links de redes sociais. É possível adicionar URLs de plataformas como Facebook, YouTube e Instagram, além de personalizar as cores de fundo da página e dos botões. A aplicação também permite visualizar as mudanças em tempo real com base nas atualizações feitas pelo usuário. O cadastro e o login de usuários é realizado com Firebase Authentication e a interface é responsiva e intuitiva.",
    tech: "React.js - TypeScript - React Router - Firebase - TailwindCSS - React Icons - Vite",
  },
];
