import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Check,
  Shield,
  FileText,
  Clock,
  Car,
  RefreshCw,
  Search,
  Copy,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Car,
    title: "Vistoria Veicular",
    description:
      "Inspeção completa para regularização junto ao DETRAN, verificando todos os itens obrigatórios do veículo.",
    features: [
      "Verificação de chassi e motor",
      "Análise da documentação",
      "Inspeção de equipamentos obrigatórios",
      "Laudo válido em todo Brasil",
    ],
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2032",
    type: "vistoria_veicular",
  },
  {
    icon: RefreshCw,
    title: "Vistoria de Transferência",
    description:
      "Necessária para transferência de propriedade do veículo, garantindo segurança na compra e venda.",
    features: [
      "Verificação de procedência",
      "Conferência de dados do veículo",
      "Análise de adulterações",
      "Emissão rápida do laudo",
    ],
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070",
    type: "vistoria_transferencia",
  },
  {
    icon: Search,
    title: "Vistoria Cautelar",
    description:
      "Análise detalhada do histórico e condições do veículo, ideal para quem está comprando um usado.",
    features: [
      "Histórico completo do veículo",
      "Verificação de sinistros",
      "Análise de leilão e roubo",
      "Relatório detalhado",
    ],
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1983",
    type: "vistoria_cautelar",
  },
  {
    icon: Copy,
    title: "Segunda Via de Laudo",
    description:
      "Emissão de segunda via do laudo de vistoria de forma rápida e prática.",
    features: [
      "Processo simplificado",
      "Entrega imediata",
      "Validade legal mantida",
      "Preço acessível",
    ],
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071",
    type: "segunda_via_laudo",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Credenciamento",
    description: "Empresa credenciada e autorizada",
  },
  {
    icon: FileText,
    title: "Laudos Válidos",
    description:
      "Laudos técnicos com validade legal em todo o território nacional",
  },
  {
    icon: Clock,
    title: "Agilidade",
    description: "Processo rápido com entrega do laudo no mesmo dia",
  },
];

export default function Servicos() {
  return (
    <div>
      <section className="relative py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-red-500 font-medium text-sm tracking-wider uppercase">
              NOSSOS SERVIÇOS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Soluções completas em{" "}
              <span className="text-red-500">Vistoria Veicular</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Oferecemos uma gama completa de serviços de vistoria veicular com
              a máxima qualidade, agilidade e preço justo. Todos os nossos
              serviços são realizados por profissionais qualificados.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-zinc-900 border-zinc-800 text-center">
                  <CardContent className="p-6">
                    <div className="bg-red-600/20 p-4 rounded-xl inline-block mb-4">
                      <benefit.icon className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent" />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-red-600/20 p-3 rounded-xl inline-block mb-4">
                    <service.icon className="w-8 h-8 text-red-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="bg-green-600/20 p-1 rounded-full">
                          <Check className="w-4 h-4 text-green-500" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`/agendamento?servico=${service.type}`}
                    data-track-event="agendar_servico_click"
                  >
                    <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8">
                      Agendar este serviço
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Não encontrou o que procura?
              </h2>
              <p className="text-red-100">
                Entre em contato conosco e tire suas dúvidas com nossa equipe
              </p>
            </div>
            <a href="tel:+5581988791365">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600"
              >
                Falar com um especialista
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
