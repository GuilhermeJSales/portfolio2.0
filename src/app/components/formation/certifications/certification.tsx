import { CertificationsProps } from "../formationItem";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

export default function Certification({
  certificados,
}: {
  certificados: CertificationsProps[];
}) {
  return (
    <Dialog>
      <DialogTrigger className="animate-pulse cursor-pointer text-sm text-amber-800 transition-all hover:bg-transparent hover:text-blue-600">
        Ver Certificados
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="capitalize">Certificados</DialogTitle>
          <DialogDescription>
            Clique no nome do curso para verificar as credenciais:
          </DialogDescription>
          {certificados.map((item) => (
            <div
              key={item.id}
              className="grid w-full grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)] items-center gap-2"
            >
              <span className="text-sm font-bold whitespace-nowrap capitalize">
                Curso:
              </span>

              <a
                href={item.url}
                className="truncate text-sm text-gray-600 capitalize hover:text-amber-600"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                {item.name}
              </a>

              <span className="truncate text-sm font-bold text-gray-800 capitalize">
                Carga Horária: <span className="font-normal">{item.time}</span>
              </span>
            </div>
          ))}
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              className="cursor-pointer bg-zinc-900/5 hover:bg-transparent"
              variant="outline"
            >
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
