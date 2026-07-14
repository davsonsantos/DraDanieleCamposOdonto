"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { MessageSquarePlus, Check, ChevronDown } from "lucide-react";

export default function Hero() {
  const whatsappUrl = "https://wa.me/5592984943657?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const checkmarks = [
    "Atendimento Humanizado",
    "Equipamentos Modernos",
    "Ambiente Seguro",
    "Localização Fácil",
  ];

  const handleScrollToTreatments = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const treatmentsSection = document.getElementById("tratamentos");
    if (treatmentsSection) {
      treatmentsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen pt-24 pb-16 flex items-center bg-gradient-to-br from-brand-sky/20 via-white to-brand-teal-light/10 overflow-hidden">
      {/* Background soft gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-sky/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-teal-light/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tag */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 self-start px-3 py-1 bg-brand-teal-light text-brand-teal text-xs font-semibold rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-pulse" />
              Sorrisos Saudáveis & Tecnologia
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy leading-[1.1] mb-6 font-heading"
            >
              Cuidando do seu sorriso com{" "}
              <span className="bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                carinho e excelência
              </span>
              .
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-brand-gray max-w-xl leading-relaxed mb-8"
            >
              Atendimento humanizado, tecnologia moderna e tratamentos odontológicos completos em Manaus. Sinta o acolhimento e a segurança de um consultório feito para você.
            </motion.p>

            {/* Indicators / Checkmarks */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-y-3.5 gap-x-4 mb-8 sm:max-w-md"
            >
              {checkmarks.map((label, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-medium text-brand-navy">
                  <div className="bg-brand-teal/10 p-0.5 rounded-full">
                    <Check className="w-4 h-4 text-brand-teal stroke-[3]" />
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-brand-teal hover:bg-brand-teal/90 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-brand-teal/20 hover:shadow-xl hover:scale-[1.02] transition-all-custom text-base cursor-pointer"
              >
                <MessageSquarePlus className="w-5 h-5" />
                Agendar pelo WhatsApp
              </a>
              <button
                onClick={handleScrollToTreatments}
                className="flex items-center justify-center gap-2 bg-white hover:bg-brand-gray-light text-brand-navy border border-brand-navy/10 font-bold px-8 py-4 rounded-full shadow-sm hover:shadow transition-all-custom text-base cursor-pointer"
              >
                Ver Tratamentos
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Image Card */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            {/* Main Image Container */}
            <div className="relative w-full max-w-md lg:max-w-none aspect-[3/2] lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white z-10 bg-brand-sky/20">
              <Image
                src="/images/hero_dentist.jpg"
                alt="Dra. Daniele Campos em atendimento odontológico"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent pointer-events-none" />
            </div>

            {/* Decorative Floating Card 1 */}
            <motion.div
              className="absolute -left-6 bottom-10 bg-white rounded-2xl p-4 shadow-xl border border-brand-sky/20 z-20 hidden sm:flex items-center gap-3.5 max-w-[200px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="bg-brand-teal/10 p-2.5 rounded-xl">
                <svg className="w-6 h-6 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-brand-gray font-semibold uppercase tracking-wider">Acolhimento</p>
                <p className="text-xs font-bold text-brand-navy">Sorriso Renovado</p>
              </div>
            </motion.div>

            {/* Decorative Floating Card 2 */}
            <motion.div
              className="absolute -right-6 top-12 bg-white rounded-2xl p-4 shadow-xl border border-brand-sky/20 z-20 hidden sm:flex items-center gap-3.5 max-w-[220px]"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="bg-brand-sky p-2.5 rounded-xl text-brand-blue">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-brand-gray font-semibold uppercase tracking-wider">Segurança</p>
                <p className="text-xs font-bold text-brand-navy">Ambiente 100% Estéril</p>
              </div>
            </motion.div>

            {/* Decorative background shapes */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-teal/5 rounded-full -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-brand-sky -z-10 rounded-3xl rotate-12" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex justify-center items-center mt-12">
          <motion.button
            onClick={() => {
              const sobre = document.getElementById("sobre");
              if (sobre) sobre.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center text-brand-gray hover:text-brand-teal transition-colors cursor-pointer"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase mb-1.5 font-heading">Saiba mais</span>
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
