import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  Check,
  Eye,
  MapPin,
  Shield,
  Target,
  Users,
} from "lucide-react";

const stats = [
  { value: "5.000+", label: "Clientes Atendidos", icon: Users },
  { value: "5+", label: "Anos de Experiência", icon: Calendar },
  { value: "99%", label: "Taxa de Satisfação", icon: Award },
  { value: "PE", label: "Todo o Estado", icon: MapPin },
];

const values = [
  {
    icon: Shield,
    title: "Confiança",
    description:
      "Construímos relacionamentos baseados na transparência e honestidade com nossos clientes.",
  },
  {
    icon: Target,
    title: "Excelência",
    description:
      "Buscamos sempre a perfeição em cada detalhe do nosso trabalho, superando expectativas.",
  },
  {
    icon: Eye,
    title: "Transparência",
    description:
      "Processo 100% transparente, onde o cliente acompanha cada etapa da vistoria.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Fundação",
    description:
      "Início das atividades com foco em qualidade e atendimento diferenciado.",
  },
  {
    year: "2025",
    title: "Expansão",
    description: "Ampliação do atendimento para todo o estado de Pernambuco.",
  },
  {
    year: "2026",
    title: "Modernização",
    description: "Investimento em tecnologia de ponta e equipamentos modernos.",
  },
];

export default function Sobre() {
  return (
    <div>
      <section className="relative py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-red-500 font-medium text-sm tracking-wider uppercase">
                SOBRE NÓS
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
                Tradição e Confiança em{" "}
                <span className="text-red-500">Vistorias Veiculares</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                A Aliance Vistorias é referência em serviços de vistoria
                veicular em Pernambuco. Com mais de 5 anos de experiência no
                mercado, oferecemos laudos técnicos com total transparência e
                segurança para nossos clientes.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Nossa equipe é formada por profissionais altamente qualificados,
                comprometidos em oferecer o melhor atendimento e garantir a
                satisfação de cada cliente que confia em nosso trabalho.
              </p>
              <a
                href="https://wa.me/5581988791365?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Aliance%20Vistorias."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8">
                  Fale Conosco
                </Button>
              </a>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974"
                  alt="Nossa equipe"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-red-600 rounded-2xl p-6 shadow-xl">
                <p className="text-4xl font-bold text-white">5+</p>
                <p className="text-red-100">Anos de Experiência</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900 border-zinc-800 text-center">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-red-500 font-medium text-sm tracking-wider uppercase">
              NOSSOS VALORES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              O que nos move
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-800 border-zinc-700 h-full hover:border-red-600/50 transition-colors">
                  <CardContent className="p-8 text-center">
                    <div className="bg-red-600/20 p-4 rounded-xl inline-block mb-4">
                      <value.icon className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-400">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-red-500 font-medium text-sm tracking-wider uppercase">
              NOSSA HISTÓRIA
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Trajetória de Sucesso
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="flex gap-6 mb-8 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center">
                  <div className="bg-red-600 text-white font-bold px-4 py-2 rounded-lg">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-zinc-800 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-red-500 font-medium text-sm tracking-wider uppercase">
                DIFERENCIAIS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-8">
                Por que escolher a{" "}
                <span className="text-red-500">Aliance Vistorias?</span>
              </h2>

              <div className="space-y-4">
                {[
                  "Equipe técnica qualificada e certificada",
                  "Equipamentos de última geração",
                  "Atendimento personalizado e humanizado",
                  "Laudos com validade em todo o Brasil",
                  "Processo rápido e sem burocracia",
                  "Preços justos e competitivos",
                  "Localização estratégica",
                  "Ambiente confortável para espera",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="bg-green-600/20 p-1 rounded-full flex-shrink-0">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070"
                  alt="Equipamentos modernos"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
