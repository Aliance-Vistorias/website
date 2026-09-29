import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Clock, FileText, Phone, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Laudo Técnico',
    description: 'Assinado por engenheiro mecânico com validade legal'
  },
  {
    icon: Zap,
    title: 'Atendimento Rápido',
    description: 'Agilidade no processo e prazo reduzido'
  },
  {
    icon: Shield,
    title: 'Total Transparência',
    description: 'Processo 100% seguro e confiável'
  }
];

export default function ContactSection() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Fale Conosco</h3>
            
            <div className="space-y-4">
              <a
                href="tel:+5581988791365"
                className="flex items-center gap-4 bg-zinc-900 p-4 rounded-xl border border-zinc-800 hover:border-red-600/50 transition-colors"
              >
                <div className="bg-red-600/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Ligue agora</p>
                  <p className="text-white font-semibold">(81) 98879-1365</p>
                  <p className="text-white font-semibold">(81) 99822-5763</p>
                </div>
              </a>

              <a
                href="https://wa.me/5581988791365"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-zinc-900 p-4 rounded-xl border border-zinc-800 hover:border-green-600/50 transition-colors"
              >
                <div className="bg-green-600/20 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                  <p className="text-white font-semibold">(81) 98879-1365</p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Horário de Atendimento</p>
                  <p className="text-white font-semibold">Segunda a Sexta: 08:00 - 18:00</p>
                  <p className="text-white font-semibold">Sábado: 08:00 - 12:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-4">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="bg-zinc-900 border-zinc-800 hover:border-red-600/50 transition-colors"
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-red-600/20 p-3 rounded-lg">
                      <feature.icon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{feature.title}</h4>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}