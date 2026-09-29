import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-10 border-b border-zinc-800 bg-zinc-900 text-gray-300">
      <div className="container mx-auto h-full px-4">
        <div className="flex h-full items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <Clock className="h-4 w-4 shrink-0 text-red-500" />
            <span className="truncate text-xs sm:hidden">
              Seg-Sex 08-18 | Sab 08-12
            </span>
            <span className="hidden text-sm sm:inline">
              Seg-Sex: 08:00 - 18:00 | Sab: 08:00 - 12:00
            </span>
            <a
              href="tel:+5581988791365"
              className="inline-flex items-center justify-center rounded-md p-1.5 transition-colors hover:bg-zinc-800 sm:hidden"
              aria-label="Ligar para Aliance Vistorias"
            >
              <Phone className="h-4 w-4 text-red-500" />
            </a>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-red-500" />
              <span className="text-sm">Atendemos todo o estado de Pernambuco</span>
            </div>
            <a
              href="tel:+5581988791365"
              className="flex items-center gap-2 text-sm transition-colors hover:text-red-400"
            >
              <Phone className="h-4 w-4 text-red-500" />
              <span>(81) 98879-1365</span>
            </a>
            <a
              href="mailto:vistoriasaliance@gmail.com"
              className="hidden items-center gap-2 text-sm transition-colors hover:text-red-400 lg:flex"
            >
              <Mail className="h-4 w-4 text-red-500" />
              <span>vistoriasaliance@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}