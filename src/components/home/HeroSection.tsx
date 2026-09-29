import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070"
          alt="Carro de luxo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/80 to-zinc-950/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <span className="inline-block bg-red-600/20 text-red-400 border border-red-600/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Credenciada pelo DETRAN-PE
            </span> */}
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A Vistoria que{' '}
            <span className="text-red-500">você pode confiar</span>
          </motion.h1>

          <motion.p
            className="text-gray-400 text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Realizamos vistorias veiculares com tecnologia de ponta, garantindo segurança 
            e transparência em todo o processo. Atendemos todo o estado de Pernambuco.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="/agendamento" data-track-event="agendar_vistoria_click">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 text-base">
                AGENDAR VISTORIA
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="/servicos">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base"
              >
                NOSSOS SERVIÇOS
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}