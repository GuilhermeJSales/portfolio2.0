import { FormationProps } from "./formation";

export default function FormationItem({
  data,
  curso,
  escola,
  local,
}: FormationProps) {
  return (
    <li className="relative flex w-80 max-w-full items-start gap-5 before:absolute before:inset-0 before:block before:h-6 before:w-2 before:rounded-tr-md before:bg-amber-400 max-lg:flex-col max-lg:pb-8">
      <div className="z-40 pl-5 lg:mb-32">
        <p className="font-bold uppercase lg:text-base">{curso}</p>
        <time className="text-base text-zinc-950 uppercase">{data}</time>
        <p className="text-sm text-zinc-800">{escola}</p>
        <p className="text-sm text-zinc-800">{local}</p>
      </div>
    </li>
  );
}
