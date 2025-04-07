import Image from "next/image";
import github from "@/app/assets/github.svg";
import linkedin from "@/app/assets/linkedin.svg";
import email from "@/app/assets/email.svg";
import cv from "@/app/assets/cv.svg";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-2.5">
      <a
        href="/curriculo-VITAE.pdf"
        target="_blank"
        title="Currículo Download"
        download
        className="bg-orange card-sombra-button hover: transitions-all mr-1.5 flex items-center gap-2.5 rounded-4xl border-2 border-zinc-800 px-4 py-2 transition duration-500 ease-in-out hover:bg-zinc-200"
      >
        Currículo <Image src={cv} width={30} height={30} alt="Download logo" />
      </a>
      <a
        href="https://github.com/GuilhermeJSales"
        target="_blank"
        title="GitHub"
      >
        <Image src={github} width={30} height={30} alt="GitHub Logo" />
      </a>

      <a
        href="https://www.linkedin.com/in/guilherme-jesus-sales/"
        target="_blank"
        title="LinkedIn"
      >
        <Image src={linkedin} width={30} height={30} alt="LinkedIn Logo" />
      </a>

      <a
        href="mailto:guilherme.jesus.sales@outlook.com"
        target="_blank"
        title="E-mail"
        className="flex items-center gap-2.5"
      >
        <Image src={email} width={30} height={30} alt="E-mail Logo" />
        guilherme.jesus.sales@outlook.com
      </a>
    </div>
  );
}
