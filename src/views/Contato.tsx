/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    details: ["(81) 98879-1365", "(81) 99822-5763"],
    action: "tel:+5581988791365",
    color: "bg-red-600/20 text-red-500",
  },
  {
    icon: Mail,
    title: "E-mail",
    details: ["vistoriasaliance@gmail.com"],
    action: "mailto:vistoriasaliance@gmail.com",
    color: "bg-blue-600/20 text-blue-500",
  },
  {
    icon: MapPin,
    title: "Localização",
    details: ["Atendemos todo o estado", "de Pernambuco"],
    color: "bg-green-600/20 text-green-500",
  },
  {
    icon: Clock,
    title: "Horário",
    details: ["Seg - Sex: 08:00 - 18:00", "Sábado: 08:00 - 12:00"],
    color: "bg-yellow-600/20 text-yellow-500",
  },
];

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const message = `Olá! Meu nome é ${formData.nome}.%0A%0AAssunto: ${formData.assunto}%0A%0A${formData.mensagem}%0A%0AContato: ${formData.telefone}%0AE-mail: ${formData.email}`;
    window.gtag?.("event", "whatsapp_contact_form_submit", {
      event_category: "contact",
      event_label: "contato_form",
    });
    window.open(`https://wa.me/5581988791365?text=${message}`, "_blank");

    toast.success("Redirecionando para o WhatsApp...");
    setIsSubmitting(false);
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: "",
    });
  };

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
              CONTATO
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Entre em <span className="text-red-500">Contato</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Estamos prontos para atender você. Entre em contato por telefone,
              WhatsApp ou preencha o formulário abaixo.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-12 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {info.action ? (
                  <a href={info.action}>
                    <Card className="bg-zinc-900 border-zinc-800 hover:border-red-600/50 transition-colors h-full">
                      <CardContent className="p-6 text-center">
                        <div
                          className={`${info.color} p-4 rounded-xl inline-block mb-4`}
                        >
                          <info.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-semibold mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-400 text-sm">
                            {detail}
                          </p>
                        ))}
                      </CardContent>
                    </Card>
                  </a>
                ) : (
                  <Card className="bg-zinc-900 border-zinc-800 h-full">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`${info.color} p-4 rounded-xl inline-block mb-4`}
                      >
                        <info.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-400 text-sm">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white text-center">
                    Envie sua mensagem
                  </CardTitle>
                  <p className="text-gray-400 text-center text-sm">
                    Preencha o formulário e entraremos em contato o mais breve
                    possível
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome" className="text-gray-300">
                          Nome completo *
                        </Label>
                        <Input
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          required
                          className="bg-zinc-900 border-zinc-700 text-white"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone" className="text-gray-300">
                          Telefone *
                        </Label>
                        <Input
                          id="telefone"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleChange}
                          required
                          className="bg-zinc-900 border-zinc-700 text-white"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">
                        E-mail
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-zinc-900 border-zinc-700 text-white"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="assunto" className="text-gray-300">
                        Assunto *
                      </Label>
                      <Input
                        id="assunto"
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleChange}
                        required
                        className="bg-zinc-900 border-zinc-700 text-white"
                        placeholder="Ex: Dúvida sobre vistoria"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem" className="text-gray-300">
                        Mensagem *
                      </Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-zinc-900 border-zinc-700 text-white resize-none"
                        placeholder="Escreva sua mensagem aqui..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-6"
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prefere falar pelo WhatsApp?
          </h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">
            Clique no botão abaixo e fale diretamente com nossa equipe pelo
            WhatsApp
          </p>
          <a
            href="https://wa.me/5581988791365?text=Olá!%20Gostaria%20de%20mais%20informações."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar pelo WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
