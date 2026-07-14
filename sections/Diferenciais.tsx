"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Heart,
  Sparkles,
  CalendarDays,
  MapPin,
  CreditCard,
  ShieldCheck,
  Award
} from "lucide-react";

interface Diferencial {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function Diferenciais() {
  const diferenciais: Diferencial[] = [
    {
      title: "Tecnologia Moderna",
      desc: "Equipamentos modernos para diagnósticos rápidos, precisos e procedimentos mais confortáveis.",
      icon: <Cpu className="w-5 h-5 text-brand-teal" />,
    },
    {
      title: "Atendimento Humanizado",
      desc: "Ouvimos você com atenção, respeitando suas particularidades e eliminando o medo de ir ao dentista.",
      icon: <Heart className="w-5 h-5 text-brand-teal" />,
    },
    {
      title: "Consultório Confortável",
      desc: "Ambiente climatizado, aconchegante, higienizado e projetado para que você se sinta em casa.",
      icon: <Sparkles className="w-5 h-5 text-brand-teal" />,
    },
    {
      title: "Agendamento Rápido",
      desc: "Confirmação rápida e flexível pelo WhatsApp, com lembretes automáticos para sua conveniência.",
      icon: <CalendarDays className="w-5 h-5 text-brand-teal" />,
    },
    {
      title: "Localização Privilegiada",
      desc: "Fácil acesso no bairro Nova Cidade em Manaus, com estacionamento e proximidade de vias principais.",
      icon: <MapPin className="w-5 h-5 text-brand-teal" />,
    },
    {
      title: "Pagamento Facilitado",
      desc: "Aceitamos os principais cartões de crédito e débito, com opções de parcelamento sob medida.",
      icon: <CreditCard className="w-5 h-5 text-brand-teal" />,
    },
    {
      title: "Materiais de Alta Qualidade",
      desc: "Trabalhamos exclusivamente com insumos importados e marcas de referência internacional.",
      icon: <ShieldCheck className="w-5 h-5 text-brand-teal" />,
    },
    {
      title: "Profissionais Qualificados",
      desc: "Doutores especialistas em constante atualização acadêmica para oferecer as técnicas mais recentes.",
      icon: <Award className="w-5 h-5 text-brand-teal" />,
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-brand-gray-light/40 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-sky/20 rounded-full blur-3xl -z-10 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-teal font-heading">
            Diferenciais
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-3 tracking-tight font-heading">
            Por que Escolher o Nosso Consultório?
          </h2>
          <div className="h-1 w-20 bg-brand-teal rounded-full my-4" />
          <p className="text-sm text-brand-gray leading-relaxed max-w-xl">
            Cuidamos de cada detalhe da sua experiência para oferecer o máximo de conforto, segurança e resultados excelentes em saúde bucal.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white rounded-3xl p-6 border border-brand-sky/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start"
            >
              {/* Icon Container */}
              <div className="bg-brand-teal-light p-3 rounded-2xl mb-4">
                {item.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-base font-bold text-brand-navy mb-2 font-heading leading-tight">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-xs sm:text-sm text-brand-gray leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
