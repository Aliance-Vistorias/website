import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-300 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="px-3 py-1.5 inline-block mb-4">
              <img src={"logo.jpeg"} alt="Logo" className="h-12" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              A Aliance Vistorias é referência em serviços de vistoria veicular
              em Pernambuco. Oferecemos laudos técnicos com total transparência.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:vistoriasaliance@gmail.com"
                data-track-event="email_click"
                className="bg-zinc-800 p-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/aliancevistorias"
                target="_blank"
                rel="noopener noreferrer"
                data-track-event="redirect_instagram"
                className="bg-zinc-800 p-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={"/"}
                  className="text-gray-400 hover:text-red-400 transition-colors text-sm"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="/servicos"
                  className="text-gray-400 hover:text-red-400 transition-colors text-sm"
                >
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a
                  href="/sobre"
                  className="text-gray-400 hover:text-red-400 transition-colors text-sm"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="/contato"
                  className="text-gray-400 hover:text-red-400 transition-colors text-sm"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href={"/agendamento"}
                  data-track-event="agendar_vistoria_click"
                  className="text-gray-400 hover:text-red-400 transition-colors text-sm"
                >
                  Agendar Vistoria
                </a>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Vistoria Veicular</li>
              <li className="text-gray-400 text-sm">
                Vistoria de Transferência
              </li>
              <li className="text-gray-400 text-sm">Vistoria Cautelar</li>
              <li className="text-gray-400 text-sm">Segunda Via de Laudo</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-gray-400">(81) 98879-1365</p>
                  <p className="text-gray-400">(81) 99822-5763</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  vistoriasaliance@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Atendemos todo o estado de Pernambuco
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-gray-400">Seg - Sex: 08:00 - 18:00</p>
                  <p className="text-gray-400">Sábado: 08:00 - 12:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-zinc-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Aliance Vistorias. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
