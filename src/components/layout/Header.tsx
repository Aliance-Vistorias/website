import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header({ currentPage }: { currentPage: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Início", page: "home" },
    { name: "Serviços", page: "servicos" },
    { name: "Sobre Nós", page: "sobre" },
    { name: "Contato", page: "contato" },
  ];

  return (
    <header className="bg-zinc-950/95 backdrop-blur-sm fixed top-10 left-0 right-0 z-50 border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="px-3 py-1.5">
              <img src={"logo.jpeg"} alt="Logo" className="h-12" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.page}
                href={item.page === "home" ? "/" : `/${item.page}`}
                className={`text-sm font-medium transition-colors hover:text-red-400 ${
                  currentPage === item.page
                    ? "text-red-500 border-b-2 border-red-500 pb-1"
                    : "text-gray-300"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="/agendamento" data-track-event="agendar_vistoria_click">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6">
                AGENDAR VISTORIA
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-2 pb-4">
                {navItems.map((item) => (
                  <a
                    key={item.page}
                    href={item.page === "home" ? "/" : `/${item.page}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 px-4 rounded-lg transition-colors ${
                      currentPage === item.page
                        ? "bg-red-600/20 text-red-400"
                        : "text-gray-300 hover:bg-zinc-800"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="/agendamento"
                  className="mt-2"
                  data-track-event="agendar_vistoria_click"
                >
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold">
                    AGENDAR VISTORIA
                  </Button>
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
