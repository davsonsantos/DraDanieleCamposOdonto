"use client";

import { motion } from "framer-motion";
import { MessageSquare, CalendarDays, ClipboardCheck, Smile } from "lucide-react";

interface Step {
  step: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
}

export default function ComoFunciona() {
  const steps: Step[] = [
    {
      step: "01",
      title: "Agende pelo WhatsApp",
      desc: "Clique no botão de agendamento e fale diretamente com nosso atendimento para tirar suas dúvidas.",
      icon: <MessageSquare className="w-6 h-6" />,
      bgColor: "bg-teal-50",
      textColor: "text-brand-teal",
    },
    {
      step: "02",
      title: "Escolha o Horário",
      desc: "Encontraremos a melhor data e horário para a sua consulta, encaixando na sua rotina com flexibilidade.",
      icon: <CalendarDays className="w-6 h-6" />,
      bgColor: "bg-blue-50",
      textColor: "text-brand-blue",
    },
    {
      step: "03",
      title: "Realize sua Avaliação",
      desc: "Venha até o nosso consultório para um exame detalhado, diagnóstico preciso e plano de tratamento.",
      icon: <ClipboardCheck className="w-6 h-6" />,
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
    },
    {
      step: "04",
      title: "Inicie seu Tratamento",
      desc: "Daremos início aos procedimentos com carinho, eficiência e o uso das melhores tecnologias bucais.",
      icon: <Smile className="w-6 h-6" />,
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-teal font-heading">
            Passo a Passo
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-3 tracking-tight font-heading">
            Como Funciona o Seu Atendimento?
          </h2>
          <div className="h-1 w-20 bg-brand-teal rounded-full my-4" />
          <p className="text-sm text-brand-gray leading-relaxed max-w-xl">
            Preparamos um fluxo simples e ágil para que você possa iniciar sua jornada de cuidados com o sorriso sem burocracias.
          </p>
        </div>

        {/* Steps Grid / Timeline */}
        <div className="relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[56px] left-[10%] right-[10%] h-0.5 bg-brand-sky/35 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group relative bg-brand-gray-light/30 lg:bg-transparent rounded-3xl p-6 lg:p-0 border border-brand-sky/10 lg:border-transparent"
              >
                {/* Step Icon with Number Circle */}
                <div className="relative mb-6">
                  {/* Step Number Badge */}
                  <span className="absolute -top-2 -right-2 bg-brand-navy text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10 font-heading">
                    {item.step}
                  </span>
                  
                  {/* Icon Box */}
                  <div className={`w-16 h-16 rounded-2xl ${item.bgColor} ${item.textColor} flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-brand-navy mb-2 font-heading">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs sm:text-sm text-brand-gray leading-relaxed max-w-[220px]">
                  {item.desc}
                </p>

                {/* Connector Arrow for Mobile/Tablet */}
                {idx < 3 && (
                  <div className="block lg:hidden mt-6 text-brand-teal/40">
                    <svg className="w-5 h-5 mx-auto animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
