import Image from "next/image";
import whatsapp from "@/app/assets/whatsapp.svg";

export default function Whatsapp() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5511961683295"
      target="_blank"
      title="WhatsApp"
    >
      <Image
        className="fixed right-8 bottom-8 drop-shadow-[3px_4px_2px_rgba(0,0,0,.3)]"
        width={60}
        height={60}
        src={whatsapp}
        alt="whatsapp"
      />
    </a>
  );
}
