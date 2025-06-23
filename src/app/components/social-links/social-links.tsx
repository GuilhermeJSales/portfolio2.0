import Image from "next/image";
import github from "@/app/assets/github.svg";
import linkedin from "@/app/assets/linkedin.svg";
import whatsapp from "@/app/assets/whatsapp.svg";
import email from "@/app/assets/email.svg";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-2.5">
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
        href="https://api.whatsapp.com/send/?phone=5511961683295"
        target="_blank"
        title="WhatsApp"
      >
        <Image src={whatsapp} width={30} height={30} alt="WhatsApp Logo" />
      </a>

      <div className="flex gap-2">
        <a
          href="mailto:guilherme.jesus.sales@outlook.com"
          target="_blank"
          title="E-mail"
          className="flex items-center gap-2.5"
        >
          <Image src={email} width={30} height={30} alt="E-mail Logo" />
        </a>
        <span className="hidden select-all md:block">
          guilherme.jesus.sales@outlook.com
        </span>
      </div>
    </div>
  );
}
