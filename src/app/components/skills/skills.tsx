import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { skillsData } from "../../../../skills-data";

export default function Skills() {
  return (
    <section className="py-28" id="habilidades">
      <div className="container">
        <h2 className="mb-18 text-4xl font-extrabold text-zinc-800 uppercase md:text-5xl lg:text-4xl xl:text-5xl">
          Habilidades
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <Carousel
          className="w-full max-w-full hover:cursor-grab active:cursor-grabbing"
          opts={{
            loop: true,
            dragFree: true,
          }}
        >
          <CarouselContent className="-ml-1 flex gap-x-6">
            {skillsData.map((item) => (
              <CarouselItem
                key={item.id}
                className="flex flex-nowrap items-center justify-center gap-4 pl-1 md:basis-1/2 lg:basis-1/4"
              >
                <Image
                  src={item.src}
                  width={40}
                  height={40}
                  alt={item.tech}
                  className="opacity-50 grayscale select-none"
                />
                <span className="font-(family-name:--font-display) text-4xl font-bold text-nowrap text-gray-500 select-none">
                  {item.tech}
                </span>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-5 z-10 h-full cursor-pointer" />
          <CarouselNext className="absolute right-5 z-10 h-full cursor-pointer" />
        </Carousel>
      </div>
    </section>
  );
}
