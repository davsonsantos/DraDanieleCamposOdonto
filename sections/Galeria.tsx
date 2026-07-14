"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
}

export default function Galeria() {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  const items: GalleryItem[] = [
    {
      src: "/images/clinic_reception.jpg",
      alt: "Recepção moderna, confortável, climatizada e acolhedora.",
      title: "Recepção",
    },
    {
      src: "/images/clinic_office.jpg",
      alt: "Consultório equipado com tecnologia moderna e ferramentas estéreis.",
      title: "Consultório",
    },
    {
      src: "/images/hero_dentist.jpg",
      alt: "Atendimento humanizado priorizando a segurança e o conforto do paciente.",
      title: "Atendimento",
    },
    {
      src: "/images/dra_daniele.jpg",
      alt: "Dra. Daniele Campos em seu consultório odontológico em Manaus.",
      title: "Profissional",
    },
  ];

  const handlePrev = () => {
    if (photoIndex !== null) {
      setPhotoIndex((photoIndex - 1 + items.length) % items.length);
    }
  };

  const handleNext = () => {
    if (photoIndex !== null) {
      setPhotoIndex((photoIndex + 1) % items.length);
    }
  };

  return (
    <section id="galeria" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-teal font-heading">
            Espaço Clínico
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-3 tracking-tight font-heading">
            Nosso Consultório
          </h2>
          <div className="h-1 w-20 bg-brand-teal rounded-full my-4" />
          <p className="text-sm text-brand-gray leading-relaxed max-w-xl">
            Conheça nossa estrutura planejada com carinho para oferecer biossegurança, conforto e aconchego durante todo o seu tratamento.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setPhotoIndex(idx)}
              className="group relative aspect-[3/2] sm:aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-brand-sky/20 border border-brand-sky/15"
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-navy/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="bg-white/20 p-2 rounded-full self-center mb-auto text-white backdrop-blur-sm border border-white/20">
                  <Maximize2 className="w-5 h-5" />
                </div>
                <h3 className="text-white font-bold text-base font-heading mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-brand-sky text-xs truncate translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {photoIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPhotoIndex(null)}
              className="absolute inset-0 bg-brand-navy/95 backdrop-blur-md"
            />

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 text-white cursor-pointer transition-colors z-10"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 text-white cursor-pointer transition-colors z-10"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Close Button */}
            <button
              onClick={() => setPhotoIndex(null)}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 text-white cursor-pointer transition-colors z-10"
              aria-label="Fechar galeria"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Photo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl aspect-[3/2] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl z-10 flex items-center justify-center bg-black/40"
            >
              <Image
                src={items[photoIndex].src}
                alt={items[photoIndex].alt}
                fill
                className="object-contain"
                sizes="80vw"
                priority
              />

              {/* Photo Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="font-bold text-lg font-heading mb-1">
                  {items[photoIndex].title}
                </h3>
                <p className="text-brand-sky/80 text-xs sm:text-sm">
                  {items[photoIndex].alt}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
