"use client";

import Image from "next/image";
import logotipo from "../../../public/logo.webp";
import cv from "@/app/assets/cv.svg";
import { useEffect, useRef, useState } from "react";
import { useMedia } from "../hooks/useMedia";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const isMobile = useMedia("(max-width: 1024px)");

  useEffect(() => {
    const links = navRef.current?.querySelectorAll("a");

    function closeMenu() {
      setOpen(false);
    }

    if (isMobile && open && links) {
      links.forEach((link) => link.addEventListener("click", closeMenu));
    }

    return () => {
      links?.forEach((link) => link.removeEventListener("click", closeMenu));
    };
  }, [open, isMobile]);

  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#experiencias", label: "Experiências" },
    { href: "#formacao", label: "Formação" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#projetos", label: "Projetos" },
  ];

  return (
    <header className="container grid grid-cols-[1fr_auto] items-center pt-8 pb-8">
      <Image
        src={logotipo}
        width={80}
        height={100}
        alt="logo Guilherme Jesus Sales"
      />

      <nav
        ref={navRef}
        className={`z-40 items-center max-lg:fixed max-lg:inset-0 max-lg:w-full lg:block ${open ? "flex" : "hidden"} animate-fadeIn`}
      >
        <div className="animate-fadeInOpacity fixed inset-0 bg-zinc-950/50 backdrop-blur-md lg:hidden"></div>
        <ul className="items-center text-2xl text-gray-700 max-lg:absolute max-lg:z-50 max-lg:w-full max-lg:divide-y-2 max-lg:divide-white/10 max-lg:p-8 max-lg:text-white lg:flex lg:gap-2.5 lg:text-base">
          {links.map((link) => (
            <li
              key={link.href}
              className={`${open && "animate-slideIn opacity-0"}`}
            >
              {" "}
              <a
                href={link.href}
                className="block p-4 max-lg:hover:bg-white/10 lg:rounded-2xl lg:p-3 lg:transition lg:duration-500 lg:ease-in-out lg:hover:bg-gray-100"
              >
                {link.label}
              </a>{" "}
            </li>
          ))}
          <li className={`${open && "animate-slideIn opacity-0"}`}>
            <a
              href="/curriculo-VITAE.pdf"
              className="block gap-1.5 p-4 max-lg:hover:bg-white/10 lg:flex lg:items-center lg:rounded-2xl lg:p-3 lg:transition lg:duration-500 lg:ease-in-out lg:hover:bg-gray-100"
            >
              Meu Currículo{" "}
              <Image
                src={cv}
                width={20}
                height={20}
                alt="download curriculo"
                className="max-lg:!hidden"
              />
            </a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`hidden ${open ? "menu-active" : ""} z-50 block cursor-pointer bg-transparent p-5 after:block after:h-0.5 after:w-5 after:rounded-sm after:bg-[currentColor] after:shadow-[currentcolor_0px_8px,_currentcolor_0px_-8px] after:transition after:duration-500 after:ease-in-out hover:text-amber-500 focus:text-amber-400 active:text-amber-400 max-lg:block`}
      />
    </header>
  );
}
