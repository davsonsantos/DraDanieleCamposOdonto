"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  date: string;
  initials: string;
}

export default function Depoimentos() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const reviews: Testimonial[] = [
    {
      name: "Aline Lima",
      role: "Paciente de Restauração Estética",
      content: "Atendimento sensacional! A Dra. Daniele é extremamente paciente e cuidadosa. Eu tinha muito pavor de ir ao dentista, mas ela me acalmou e fez o procedimento totalmente sem dor. Super recomendo!",
      rating: 5,
      date: "Há 2 semanas",
      initials: "AL",
    },
    {
      name: "Marcos Souza",
      role: "Paciente de Clareamento & Lentes",
      content: "Consultório super moderno e limpo. A localização no Nova Cidade facilitou muito pra mim. Fiz clareamento dental e o resultado ficou incrível, dentes brancos e sem sensibilidade. Nota 10!",
      rating: 5,
      date: "Há 1 mês",
      initials: "MS",
    },
    {
      name: "Juliana Vieira",
      role: "Mãe do Pedro (Odontopediatria)",
      content: "Levei meu filho de 6 anos e fiquei encantada com o carinho. O consultório tem um clima super acolhedor e a Dra. Daniele usou brincadeiras que tiraram todo o medo dele. Excelente atendimento infantil!",
      rating: 5,
      date: "Há 3 semanas",
      initials: "JV",
    },
    {
      name: "Roberto Costa",
      role: "Paciente de Implante & Prótese",
      content: "Fiz a colocação de um implante e de uma prótese. O planejamento foi todo digital, transparente e o resultado foi maravilhoso. Voltei a mastigar e a sorrir sem nenhuma vergonha. Só tenho a agradecer!",
      rating: 5,
      date: "Há 2 meses",
      initials: "RC",
    },
  ];

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="avaliacoes" className="py-20 bg-brand-gray-light/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-teal font-heading">
            Depoimentos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-3 tracking-tight font-heading">
            O que Nossos Pacientes Dizem
          </h2>
          <div className="h-1 w-20 bg-brand-teal rounded-full my-4" />
          <p className="text-sm text-brand-gray leading-relaxed max-w-xl">
            Preparado para integrar com o Google Reviews. Confira a experiência real de quem já cuida do sorriso em nosso consultório.
          </p>
        </div>

        {/* Carousel View */}
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-brand-sky/20 shadow-sm relative flex flex-col items-center text-center">
                    
                    {/* Floating Quote icon */}
                    <div className="absolute top-6 left-8 text-brand-teal/10">
                      <Quote className="w-12 h-12 rotate-180" />
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-1.5 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-brand-navy text-sm md:text-base leading-relaxed italic mb-8 max-w-2xl font-medium">
                      "{review.content}"
                    </p>

                    {/* Profile */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-brand-teal-light text-brand-teal flex items-center justify-center font-bold text-sm mb-3 border border-brand-teal/20">
                        {review.initials}
                      </div>
                      <h4 className="text-sm font-bold text-brand-navy font-heading">
                        {review.name}
                      </h4>
                      <p className="text-[11px] text-brand-gray">
                        {review.role} • {review.date}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-2 md:-translate-x-6 p-2 bg-white rounded-full border border-brand-sky/30 shadow-md text-brand-navy hover:text-brand-teal transition-colors cursor-pointer z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2 md:translate-x-6 p-2 bg-white rounded-full border border-brand-sky/30 shadow-md text-brand-navy hover:text-brand-teal transition-colors cursor-pointer z-10"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                selectedIndex === index ? "w-8 bg-brand-teal" : "bg-brand-gray-medium"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Google Reviews Integration Badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-brand-sky/20 rounded-full shadow-sm text-xs font-semibold text-brand-navy">
            <svg className="w-4 h-4 text-brand-gold fill-current" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5zm0-4.5a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0z"/>
            </svg>
            <span>Preparado para integração via Google Reviews API</span>
          </div>
        </div>

      </div>
    </section>
  );
}
