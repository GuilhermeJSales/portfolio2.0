import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { font_body, font_display } from "./fonts";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Desenvolvedor Front-End | Guilherme Jesus Sales",
  description:
    "Portfólio de Guilherme Jesus Sales, desenvolvedor Front-end com expertise em React, Next.js, TypeScript e práticas de Clean Code. Projetos focados em performance, SEO, acessibilidade e desenvolvimento de interfaces modernas e escaláveis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${font_body.className} ${font_body.variable} ${font_display.variable} bg-white text-lg antialiased dark:bg-zinc-900`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
