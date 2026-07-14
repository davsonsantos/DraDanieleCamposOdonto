"use client";

import { motion } from "framer-motion";
import { CalendarCheck, MessageSquareDot } from "lucide-react";

export default function CTA() {
  const whatsappUrl = "https://wa.me/5592984943657?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.";

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[3rem] bg-gradient-to-br from-brand-navy via-[#0c223f] to-brand-blue overflow-hidden shadow-2xl p-8 sm:p-12 md:p-16 text-center text-white">
          
          {/* Decorative floating balls */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-sky/15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            
            {/* Small icon badge */}
            <div className="bg-brand-teal/20 text-brand-teal p-3 rounded-full mb-6 border border-brand-teal/20">
              <CalendarCheck className="w-6 h-6 animate-pulse" />
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 font-heading leading-tight">
              Seu sorriso merece o melhor cuidado.
            </h2>
            
            {/* Subtitle */}
            <p className="text-sm sm:text-base text-brand-sky/90 leading-relaxed mb-8 max-w-lg">
              Agende hoje mesmo uma consulta de avaliação e dê o primeiro passo para conquistar um sorriso mais saudável, bonito e confiante.
            </p>

            {/* CTA Button */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 bg-brand-teal hover:bg-brand-teal/95 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-brand-teal/20 text-base sm:text-lg cursor-pointer transition-all-custom"
            >
              <MessageSquareDot className="w-5 h-5 fill-white text-brand-teal" />
              Agendar Minha Consulta
            </motion.a>

            {/* Additional info footer */}
            <p className="text-[10px] text-brand-sky/60 uppercase tracking-widest mt-6">
              Resposta rápida • Atendimento humanizado em Manaus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
