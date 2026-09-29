import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronRight, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/85" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para realizar sua vistoria?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Agende agora mesmo sua vistoria veicular e garanta a documentação do seu veículo em dia. 
            Atendimento rápido e profissional em todo o estado de Pernambuco.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5581988791365?text=Olá!%20Gostaria%20de%20agendar%20uma%20vistoria."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 text-base">
                AGENDAR VISTORIA
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="tel:+5581988791365">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-500 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base"
              >
                <Phone className="w-5 h-5 mr-2" />
                LIGAR AGORA
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}