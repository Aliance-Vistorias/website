import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Carlos Eduardo Silva",
    service: "Vistoria Veicular",
    text: "Excelente atendimento! A vistoria foi rápida e o laudo ficou pronto no mesmo dia. Equipe muito profissional e atenciosa. Recomendo para todos que precisam de uma vistoria confiável e transparente.",
    initial: "C",
    color: "bg-red-600",
  },
  {
    name: "Maria Fernanda Costa",
    service: "Vistoria de Transferência",
    text: "Precisava fazer a vistoria de transferência do meu carro e fui muito bem atendida. Tudo muito organizado, limpo e com equipamentos modernos. O resultado saiu super rápido. Voltarei com certeza!",
    initial: "M",
    color: "bg-blue-600",
  },
  {
    name: "João Pedro Santos",
    service: "Vistoria Cautelar",
    text: "Melhor experiência que já tive com vistoria veicular. Processo totalmente transparente, me mostraram tudo que estava sendo verificado. Preço justo e atendimento impecável. Empresa séria e confiável!",
    initial: "J",
    color: "bg-green-600",
  },
  {
    name: "Ana Paula Oliveira",
    service: "Segunda Via de Laudo",
    text: "Precisava urgente da segunda via do laudo e fui super bem atendida. Processo rápido e sem complicação. Equipe muito prestativa e eficiente. Recomendo!",
    initial: "A",
    color: "bg-purple-600",
  },
  {
    name: "Ricardo Mendes",
    service: "Vistoria Veicular",
    text: "Profissionalismo do início ao fim. Equipamentos modernos, ambiente limpo e organizado. O laudo saiu no prazo e com todas as informações necessárias. Voltarei sempre que precisar!",
    initial: "R",
    color: "bg-orange-600",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Determine how many cards to show based on screen size
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, cardsToShow]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-red-500 font-medium text-sm tracking-wider uppercase">
            DEPOIMENTOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-400 mt-4">
            A satisfação de nossos clientes é nossa maior conquista
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-10 flex justify-between pointer-events-none">
            <Button
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="pointer-events-auto -ml-4 md:-ml-12 bg-zinc-800 border-zinc-700 hover:bg-red-600 hover:border-red-600 text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="pointer-events-auto -mr-4 md:-mr-12 bg-zinc-800 border-zinc-700 hover:bg-red-600 hover:border-red-600 text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className={`grid gap-6 ${
                  cardsToShow === 1
                    ? "grid-cols-1"
                    : cardsToShow === 2
                    ? "md:grid-cols-2"
                    : "md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {getVisibleTestimonials().map((testimonial, index) => (
                  <Card
                    key={`${currentIndex}-${index}`}
                    className="bg-zinc-800 border-zinc-700 h-full"
                  >
                    <CardContent className="p-6">
                      <Quote className="w-10 h-10 text-red-600/30 mb-4" />

                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-500 text-yellow-500"
                          />
                        ))}
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-6 text-sm min-h-[120px]">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center gap-3 pt-4 border-t border-zinc-700">
                        <div
                          className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <span className="text-white font-bold text-lg">
                            {testimonial.initial}
                          </span>
                        </div>
                        <div>
                          <p className="text-white font-semibold">
                            {testimonial.name}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {testimonial.service}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-red-600"
                    : "w-2 bg-zinc-700 hover:bg-zinc-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
