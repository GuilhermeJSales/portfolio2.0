import { ExperienceProps } from "../../../../datas/experience-data";
import { Separator } from "@/components/ui/separator";

export default function ExperienceItem({
  cargo,
  data,
  empresa,
  description,
  competencias,
  promocao,
  info2,
}: ExperienceProps) {
  return (
    <li className="relative flex items-start gap-5 after:absolute after:-left-3 after:block after:h-full after:w-1 after:rounded-2xl after:bg-zinc-200 max-lg:flex-col max-lg:pb-8">
      <div className="relative z-40 before:absolute before:top-0 before:-left-4.5 before:z-10 before:block before:h-4 before:w-4 before:rounded-full before:border-2 before:border-white before:bg-amber-600 after:absolute after:top-0 after:-left-4.5 after:h-4 after:w-4 after:animate-ping after:rounded-full after:bg-amber-400 after:opacity-75 md:pl-5 lg:mb-32 lg:w-[500px] xl:w-[600px] 2xl:w-[700px]">
        {promocao && (
          <>
            <time className="mb-2.5 font-bold uppercase lg:text-lg">
              {info2.data2}
            </time>
            <p className="text-base text-zinc-950 uppercase">{empresa}</p>
            <p className="text-base text-zinc-800">{info2.cargo2}</p>
          </>
        )}
        <time className="mb-2.5 font-bold uppercase lg:text-lg">{data}</time>
        {!promocao && (
          <p className="text-base text-zinc-950 uppercase">{empresa}</p>
        )}
        <p className="text-base text-zinc-800">{cargo}</p>
        <p className="text-sm text-zinc-800">São Paulo - SP</p>
      </div>
      <div className="md:pl-6 lg:max-w-[500px] xl:max-w-[700px] 2xl:max-w-[850px]">
        <p className="pb-4 text-base text-zinc-700">{description}</p>
        <Separator className="mb-4 h-2 bg-zinc-200" />
        <p className="text-base font-bold text-zinc-800">
          Tecnologias utilizadas:
        </p>
        <ul className="flex flex-wrap gap-1">
          {competencias.map((comp, i) => (
            <li key={i} className="mr-1 flex items-center gap-2 text-sm">
              {comp}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
