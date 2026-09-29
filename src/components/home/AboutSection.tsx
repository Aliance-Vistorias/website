import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Check, MapPin, Star, Users } from "lucide-react";

const features = [
  "Equipe técnica qualificada e certificada",
  "Equipamentos de última geração",
  "Atendimento personalizado",
  "Laudos com validade em todo o Brasil",
  "Processo rápido e sem burocracia",
];

const stats = [
  { icon: Users, value: "5.000+", label: "Clientes Atendidos" },
  { icon: Calendar, value: "10+", label: "Anos de Experiência" },
  { icon: Star, value: "99%", label: "Satisfação" },
  { icon: MapPin, value: "PE", label: "Todo o Estado" },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974"
                alt="Profissional realizando vistoria"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
            </div>

            {/* Stats Cards */}
            <div className="absolute bottom-6 left-6 right-6 flex gap-4">
              <div className="bg-zinc-900/95 backdrop-blur-sm rounded-xl p-4 flex-1 border border-zinc-700">
                <p className="text-2xl md:text-3xl font-bold text-red-500">
                  5.000+
                </p>
                <p className="text-gray-400 text-sm">Clientes Atendidos</p>
              </div>
              <div className="bg-zinc-900/95 backdrop-blur-sm rounded-xl p-4 flex-1 border border-zinc-700">
                <p className="text-2xl md:text-3xl font-bold text-red-500">
                  10+
                </p>
                <p className="text-gray-400 text-sm">Anos de Experiência</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-red-500 font-medium text-sm tracking-wider uppercase">
              SOBRE NÓS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Tradição e Confiança em{" "}
              <span className="text-red-500">Vistorias Veiculares</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              A Aliance Vistorias é referência em serviços de vistoria veicular
              em Pernambuco. Com mais de 10 anos de experiência no mercado,
              oferecemos laudos técnicos com total transparência e segurança
              para nossos clientes.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              Nossa missão é proporcionar um serviço de excelência, com
              agilidade e precisão, garantindo que cada veículo seja avaliado
              com os mais altos padrões de qualidade.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="bg-red-600/20 p-1 rounded-full">
                    <Check className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <a href="/sobre">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8">
                Conheça Nossa História
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <p className="text-2xl md:text-3xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
