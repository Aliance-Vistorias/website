import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Vistoria Veicular",
    description:
      "Inspeção completa para regularização junto ao DETRAN, verificando todos os itens obrigatórios.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2032",
    type: "vistoria_veicular",
  },
  {
    title: "Vistoria de Transferência",
    description:
      "Necessária para transferência de propriedade do veículo, garantindo segurança na compra e venda.",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070",
    type: "vistoria_transferencia",
  },
  {
    title: "Vistoria Cautelar",
    description:
      "Análise detalhada do histórico e condições do veículo, ideal para quem está comprando um usado.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1983",
    type: "vistoria_cautelar",
  },
  {
    title: "Segunda Via de Laudo",
    description:
      "Emissão de segunda via do laudo de vistoria de forma rápida e prática.",
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071",
    type: "segunda_via_laudo",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-red-500 font-medium text-sm tracking-wider uppercase">
            O QUE FAZEMOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Nossos Serviços
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de vistoria veicular com a
            máxima qualidade e agilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <a
                href={`/agendamento?servico=${service.type}`}
                data-track-event="agendar_servico_click"
              >
                <Card className="bg-zinc-800 border-zinc-700 overflow-hidden h-full gap-0 py-0 group hover:border-red-600/50 transition-all duration-300 cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="inline-flex items-center text-red-400 font-medium text-sm group-hover:text-red-300 transition-colors">
                        Agendar agora
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="/servicos">
            <Button
              variant="outline"
              className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
            >
              Ver todos os serviços
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
