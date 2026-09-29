/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Car,
  User,
  CalendarIcon,
  Check,
  Phone,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";
import type { LucideIcon } from "lucide-react";

const WHATSAPP_NUMBER = "5581988791365" as const;

const services = {
  vistoria_veicular: "Vistoria Veicular",
  vistoria_transferencia: "Vistoria de Transferência",
  vistoria_cautelar: "Vistoria Cautelar",
  segunda_via_laudo: "Segunda Via de Laudo",
} as const;

type ServiceKey = keyof typeof services;
type Step = 1 | 2 | 3 | 4;

type FormData = {
  tipo_servico: "" | ServiceKey;
  placa_veiculo: string;
  modelo_veiculo: string;
  nome: string;
  telefone: string;
  email: string;
  data_preferida: Date | null;
  horario_preferido: "" | "manha" | "tarde";
  observacoes: string;
};

const initialFormData: FormData = {
  tipo_servico: "",
  placa_veiculo: "",
  modelo_veiculo: "",
  nome: "",
  telefone: "",
  email: "",
  data_preferida: null,
  horario_preferido: "",
  observacoes: "",
};

const steps: { id: Step; title: string; icon: LucideIcon }[] = [
  { id: 1, title: "Serviço", icon: FileText },
  { id: 2, title: "Veículo", icon: Car },
  { id: 3, title: "Dados Pessoais", icon: User },
  { id: 4, title: "Agendamento", icon: CalendarIcon },
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isServiceKey(value: string): value is ServiceKey {
  return value in services;
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function formatPlate(value: string) {
  const cleaned = value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 7);

  if (cleaned.length <= 3) return cleaned;

  return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
}

function normalizeText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length === 10 || digits.length === 11;
}

function isValidPlate(value: string) {
  const normalized = value.replace(/-/g, "");
  return /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/.test(normalized);
}

function getStepFields(step: Step): (keyof FormData)[] {
  switch (step) {
    case 1:
      return ["tipo_servico"];
    case 2:
      return ["placa_veiculo", "modelo_veiculo"];
    case 3:
      return ["nome", "telefone", "email"];
    case 4:
      return ["data_preferida", "horario_preferido"];
    default:
      return [];
  }
}

function getFieldError<K extends keyof FormData>(name: K, data: FormData) {
  switch (name) {
    case "tipo_servico":
      return data.tipo_servico ? "" : "Selecione um serviço para continuar.";
    case "placa_veiculo":
      if (!data.placa_veiculo.trim()) return "Informe a placa do veículo.";
      return isValidPlate(data.placa_veiculo)
        ? ""
        : "Use uma placa válida, como ABC-1234 ou ABC-1D23.";
    case "modelo_veiculo":
      if (!data.modelo_veiculo.trim()) return "";
      return normalizeText(data.modelo_veiculo).length >= 3
        ? ""
        : "Informe um modelo mais completo.";
    case "nome":
      if (!data.nome.trim()) return "Informe seu nome completo.";
      return normalizeText(data.nome).length >= 6
        ? ""
        : "Digite nome e sobrenome.";
    case "telefone":
      if (!data.telefone.trim()) return "Informe um telefone para contato.";
      return isValidPhone(data.telefone)
        ? ""
        : "Use um telefone com DDD válido.";
    case "email":
      if (!data.email.trim()) return "";
      return emailRegex.test(data.email.trim())
        ? ""
        : "Digite um e-mail válido.";
    case "data_preferida":
      return data.data_preferida ? "" : "Selecione uma data preferida.";
    case "horario_preferido":
      return data.horario_preferido ? "" : "Selecione o período desejado.";
    case "observacoes":
      return "";
    default:
      return "";
  }
}

export default function Agendamento() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [touchedFields, setTouchedFields] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});

  const fieldErrors = {
    tipo_servico: getFieldError("tipo_servico", formData),
    placa_veiculo: getFieldError("placa_veiculo", formData),
    modelo_veiculo: getFieldError("modelo_veiculo", formData),
    nome: getFieldError("nome", formData),
    telefone: getFieldError("telefone", formData),
    email: getFieldError("email", formData),
    data_preferida: getFieldError("data_preferida", formData),
    horario_preferido: getFieldError("horario_preferido", formData),
    observacoes: getFieldError("observacoes", formData),
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const servico = urlParams.get("servico");
    if (servico && isServiceKey(servico)) {
      setFormData((prev) => ({ ...prev, tipo_servico: servico }));
    }
  }, []);

  const handleChange = <K extends keyof FormData>(
    name: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const markTouched = (...fields: (keyof FormData)[]) => {
    setTouchedFields((prev) => ({
      ...prev,
      ...Object.fromEntries(fields.map((field) => [field, true])),
    }));
  };

  const isStepValid = (step: Step): boolean => {
    return getStepFields(step).every((field) => !fieldErrors[field]);
  };

  const nextStep = () => {
    if (isStepValid(currentStep) && currentStep < 4) {
      setCurrentStep((currentStep + 1) as Step);
      return;
    }

    markTouched(...getStepFields(currentStep));
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as Step);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
    setIsSubmitting(false);
    setIsSuccess(false);
    setTouchedFields({});
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!isStepValid(4) || !formData.tipo_servico) {
      markTouched(...getStepFields(4));
      return;
    }

    setIsSubmitting(true);

    const serviceName = services[formData.tipo_servico];
    const dataFormatada = formData.data_preferida
      ? format(formData.data_preferida, "dd/MM/yyyy", { locale: ptBR })
      : "";
    const horario = formData.horario_preferido === "manha" ? "Manhã" : "Tarde";

    const message =
      `Olá! Gostaria de agendar uma vistoria.\n\n` +
      `*Serviço:* ${serviceName}\n` +
      `*Veículo:* ${formData.modelo_veiculo || "Não informado"} - ${
        formData.placa_veiculo
      }\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Telefone:* ${formData.telefone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Data preferida:* ${dataFormatada}\n` +
      `*Horário:* ${horario}\n` +
      (formData.observacoes ? `*Observações:* ${formData.observacoes}` : "");

    toast.success("Agendamento registrado! Redirecionando...");
    setIsSuccess(true);
    window.gtag?.("event", "whatsapp_schedule_submit", {
      event_category: "contact",
      event_label: serviceName,
    });

    setTimeout(() => {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
      setIsSubmitting(false);

      setTimeout(() => {
        resetForm();
      }, 4000);
    }, 1000);
  };

  return (
    <div>
      <section className="relative py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-red-500 font-medium text-sm tracking-wider uppercase">
              AGENDAMENTO
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Agende sua <span className="text-red-500">Vistoria</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Preencha o formulário abaixo e agende sua vistoria de forma rápida
              e prática
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-8 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-2 md:gap-4">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors ${
                      currentStep >= step.id
                        ? "bg-red-600 text-white"
                        : "bg-zinc-800 text-gray-500"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                  </div>
                  <span
                    className={`text-xs mt-2 hidden md:block ${
                      currentStep >= step.id ? "text-red-400" : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-8 md:w-16 h-0.5 ${
                      currentStep > step.id ? "bg-red-600" : "bg-zinc-800"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {steps[currentStep - 1].title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4 text-center py-8"
                  >
                    <div className="mx-auto w-16 h-16 rounded-full bg-green-600 flex items-center justify-center">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white font-medium text-lg">
                      Agendamento registrado com sucesso!
                    </p>
                    <p className="text-gray-400 text-sm">
                      Em instantes você será redirecionado para o WhatsApp. Você
                      pode fazer um novo agendamento a qualquer momento.
                    </p>
                    <Button
                      type="button"
                      onClick={resetForm}
                      className="bg-red-600 hover:bg-red-700 text-white w-full mt-6"
                    >
                      Novo agendamento
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {currentStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                      >
                        <Label className="text-gray-300">
                          Selecione o serviço desejado *
                        </Label>
                        <div className="grid gap-3">
                          {Object.entries(services).map(([value, label]) => (
                            <div
                              key={value}
                              onClick={() =>
                                {
                                  handleChange(
                                    "tipo_servico",
                                    value as ServiceKey
                                  );
                                  markTouched("tipo_servico");
                                }
                              }
                              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                                formData.tipo_servico === value
                                  ? "border-red-600 bg-red-600/10"
                                  : "border-zinc-700 hover:border-zinc-600 bg-zinc-800"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-white font-medium">
                                  {label}
                                </span>
                                {formData.tipo_servico === value && (
                                  <div className="bg-red-600 rounded-full p-1">
                                    <Check className="w-4 h-4 text-white" />
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                        {touchedFields.tipo_servico && fieldErrors.tipo_servico && (
                          <p className="text-sm text-red-400">
                            {fieldErrors.tipo_servico}
                          </p>
                        )}
                      </motion.div>
                    )}

                    {currentStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                      >
                        <div className="space-y-2">
                          <Label htmlFor="placa_veiculo" className="text-gray-300">
                            Placa do veículo *
                          </Label>
                          <Input
                            id="placa_veiculo"
                            value={formData.placa_veiculo}
                            onChange={(e) =>
                              handleChange(
                                "placa_veiculo",
                                formatPlate(e.target.value)
                              )
                            }
                            onBlur={() => markTouched("placa_veiculo")}
                            className="bg-zinc-800 border-zinc-700 text-white"
                            placeholder="ABC-1D23"
                            inputMode="text"
                            autoCapitalize="characters"
                            autoComplete="off"
                            maxLength={8}
                          />
                          {touchedFields.placa_veiculo &&
                            fieldErrors.placa_veiculo && (
                              <p className="text-sm text-red-400">
                                {fieldErrors.placa_veiculo}
                              </p>
                            )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="modelo_veiculo" className="text-gray-300">
                            Modelo do veículo
                          </Label>
                          <Input
                            id="modelo_veiculo"
                            value={formData.modelo_veiculo}
                            onChange={(e) =>
                              handleChange("modelo_veiculo", e.target.value)
                            }
                            onBlur={() => {
                              handleChange(
                                "modelo_veiculo",
                                normalizeText(formData.modelo_veiculo)
                              );
                              markTouched("modelo_veiculo");
                            }}
                            className="bg-zinc-800 border-zinc-700 text-white"
                            placeholder="Ex: Honda Civic 2020"
                          />
                          {touchedFields.modelo_veiculo &&
                            fieldErrors.modelo_veiculo && (
                              <p className="text-sm text-red-400">
                                {fieldErrors.modelo_veiculo}
                              </p>
                            )}
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                      >
                        <div className="space-y-2">
                          <Label htmlFor="nome" className="text-gray-300">
                            Nome completo *
                          </Label>
                          <Input
                            id="nome"
                            value={formData.nome}
                            onChange={(e) => handleChange("nome", e.target.value)}
                            onBlur={() => {
                              handleChange("nome", normalizeText(formData.nome));
                              markTouched("nome");
                            }}
                            className="bg-zinc-800 border-zinc-700 text-white"
                            placeholder="Seu nome completo"
                            autoComplete="name"
                          />
                          {touchedFields.nome && fieldErrors.nome && (
                            <p className="text-sm text-red-400">
                              {fieldErrors.nome}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="telefone" className="text-gray-300">
                            Telefone *
                          </Label>
                          <Input
                            id="telefone"
                            value={formData.telefone}
                            onChange={(e) =>
                              handleChange("telefone", formatPhone(e.target.value))
                            }
                            onBlur={() => markTouched("telefone")}
                            className="bg-zinc-800 border-zinc-700 text-white"
                            placeholder="(00) 00000-0000"
                            inputMode="tel"
                            autoComplete="tel"
                            maxLength={15}
                          />
                          {touchedFields.telefone && fieldErrors.telefone && (
                            <p className="text-sm text-red-400">
                              {fieldErrors.telefone}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-300">
                            E-mail
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              handleChange("email", e.target.value.trimStart())
                            }
                            onBlur={() => {
                              handleChange("email", formData.email.trim());
                              markTouched("email");
                            }}
                            className="bg-zinc-800 border-zinc-700 text-white"
                            placeholder="seu@email.com"
                            inputMode="email"
                            autoComplete="email"
                          />
                          {touchedFields.email && fieldErrors.email && (
                            <p className="text-sm text-red-400">
                              {fieldErrors.email}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 4 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                      >
                        <div className="space-y-2">
                          <Label className="text-gray-300">Data preferida *</Label>
                          <Popover
                            open={isCalendarOpen}
                            onOpenChange={setIsCalendarOpen}
                          >
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="w-full justify-start text-left font-normal bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700"
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {formData.data_preferida ? (
                                  format(
                                    formData.data_preferida,
                                    "dd 'de' MMMM 'de' yyyy",
                                    { locale: ptBR }
                                  )
                                ) : (
                                  <span className="text-gray-400">
                                    Selecione uma data
                                  </span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent
                              align="start"
                              className="w-[min(22rem,calc(100vw-2rem))] p-2 bg-zinc-900 border-zinc-700"
                            >
                              <Calendar
                                mode="single"
                                buttonVariant="outline"
                                classNames={{
                                  month_caption: "text-zinc-100",
                                  weekday: "text-zinc-400 font-medium",
                                  day_button:
                                    "text-zinc-100 hover:bg-zinc-700 hover:text-white",
                                  outside: "text-zinc-600 opacity-60",
                                  disabled: "text-zinc-600 opacity-50",
                                  today: "bg-zinc-700 text-white rounded-md",
                                }}
                                selected={formData.data_preferida ?? undefined}
                                onSelect={(date) => {
                                  handleChange("data_preferida", date ?? null);
                                  markTouched("data_preferida");
                                  if (date) setIsCalendarOpen(false);
                                }}
                                disabled={(date) =>
                                  date < new Date() || date.getDay() === 0
                                }
                                locale={ptBR}
                              />
                            </PopoverContent>
                          </Popover>
                          {touchedFields.data_preferida &&
                            fieldErrors.data_preferida && (
                              <p className="text-sm text-red-400">
                                {fieldErrors.data_preferida}
                              </p>
                            )}
                        </div>

                        <div className="space-y-2">
                          <Label className="text-gray-300">
                            Horário preferido *
                          </Label>
                          <Select
                            value={formData.horario_preferido}
                            onValueChange={(value) =>
                              {
                                handleChange(
                                  "horario_preferido",
                                  value as "manha" | "tarde"
                                );
                                markTouched("horario_preferido");
                              }
                            }
                          >
                            <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white data-[placeholder]:text-zinc-400">
                              <SelectValue placeholder="Selecione o período" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-800 border-zinc-700 text-zinc-100">
                              <SelectItem
                                className="text-zinc-100 focus:bg-zinc-700 focus:text-white"
                                value="manha"
                              >
                                Manhã (08:00 - 12:00)
                              </SelectItem>
                              <SelectItem
                                className="text-zinc-100 focus:bg-zinc-700 focus:text-white"
                                value="tarde"
                              >
                                Tarde (13:00 - 18:00)
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          {touchedFields.horario_preferido &&
                            fieldErrors.horario_preferido && (
                              <p className="text-sm text-red-400">
                                {fieldErrors.horario_preferido}
                              </p>
                            )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="observacoes" className="text-gray-300">
                            Observações
                          </Label>
                          <Textarea
                            id="observacoes"
                            value={formData.observacoes}
                            onChange={(e) =>
                              handleChange("observacoes", e.target.value)
                            }
                            className="bg-zinc-800 border-zinc-700 text-white resize-none"
                            placeholder="Alguma informação adicional?"
                            rows={3}
                          />
                        </div>
                      </motion.div>
                    )}

                    <div className="flex justify-between mt-8">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className="border-zinc-700 text-gray-300 hover:bg-zinc-800"
                      >
                        Voltar
                      </Button>

                      {currentStep < 4 ? (
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="bg-red-600 hover:bg-red-700 text-white"
                        >
                          Próximo
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          {isSubmitting ? "Enviando..." : "Confirmar Agendamento"}
                        </Button>
                      )}
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>

            <div className="mt-6 p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <p className="text-white font-medium">Precisa de ajuda?</p>
                  <p className="text-gray-400 text-sm">
                    Ligue para{" "}
                    <a
                      href="tel:+5581988791365"
                      className="text-red-400 hover:text-red-300"
                    >
                      (81) 98879-1365
                    </a>{" "}
                    ou fale pelo{" "}
                    <a
                      href="https://wa.me/5581988791365"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300"
                    >
                      WhatsApp
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
