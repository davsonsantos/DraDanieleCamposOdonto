"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Compass, Eye, HeartHandshake, ShieldCheck } from "lucide-react";

export default function Sobre() {
  const [activeTab, setActiveTab] = useState<"missao" | "visao" | "valores">("missao");

  const tabContent = {
    missao: {
      title: "Nossa Missão",
      description: "Oferecer tratamentos odontológicos de excelência através de um atendimento humanizado, seguro e com o uso de tecnologias modernas, devolvendo a autoestima, a saúde e o prazer de sorrir a cada paciente.",
      icon: <Compass className="w-6 h-6 text-brand-teal" />,
    },
    visao: {
      title: "Nossa Visão",
      description: "Ser referência em odontologia humanizada e reabilitação oral em Manaus, reconhecida pela excelência clínica, ética profissional e pelo acolhimento diferenciado que oferecemos a todos que confiam em nosso trabalho.",
      icon: <Eye className="w-6 h-6 text-brand-teal" />,
    },
    valores: {
      title: "Nossos Valores",
      description: "Nossos pilares fundamentais são a ética inegociável, o respeito e a empatia no atendimento personalizado, a busca constante por atualização técnica, a biossegurança rigorosa e o compromisso com a saúde e satisfação dos pacientes.",
      icon: <HeartHandshake className="w-6 h-6 text-brand-teal" />,
    },
  };

  const experienceItems = [
    {
      icon: <Award className="w-5 h-5 text-brand-teal" />,
      title: "Atualização Profissional",
      desc: "Participação constante em congressos e especializações para trazer o melhor da odontologia moderna.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-teal" />,
      title: "Ética e Compromisso",
      desc: "Tratamentos planejados de forma individualizada, priorizando o bem-estar e as reais necessidades de cada pessoa.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-brand-gray-light/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Portrait & Stats */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-10 bg-brand-sky/20">
              <Image
                src="/images/dra_daniele.jpg"
                alt="Dra. Daniele Campos - Cirurgiã Dentista"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Doctor Name Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <p className="text-xs font-semibold text-brand-teal uppercase tracking-widest font-heading mb-0.5">Cirurgiã-Dentista</p>
                <h3 className="text-base font-bold text-brand-navy">Dra. Daniele Campos</h3>
                <p className="text-[10px] text-brand-gray">CRO-AM 4943</p>
              </div>
            </div>

            {/* Back decorations */}
            <div className="absolute -bottom-8 -left-8 w-44 h-44 bg-brand-teal/5 rounded-full -z-10" />
            <div className="absolute -top-8 -right-8 w-44 h-44 bg-brand-sky/30 rounded-3xl rotate-45 -z-10" />
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-teal font-heading">
                Quem Somos
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight font-heading">
                Dedicação, cuidado e saúde integrada para o seu sorriso
              </h2>
              <div className="h-1 w-20 bg-brand-teal rounded-full my-1" />
              
              <div className="space-y-4 text-brand-gray text-sm leading-relaxed mt-2">
                <p>
                  O <strong>Consultório Odontológico Dra. Daniele Campos</strong> nasceu do compromisso em proporcionar tratamentos de excelência técnica aliados a um acolhimento caloroso e personalizado. Acreditamos que a saúde bucal está intimamente ligada ao bem-estar integral e à autoconfiança de cada indivíduo.
                </p>
                <p>
                  Sob a direção da <strong>Dra. Daniele Campos</strong>, nossa equipe atua com foco na ética profissional e no atendimento humanizado. Cada tratamento é planejado sob medida, garantindo que o paciente compreenda cada etapa do processo e sinta-se seguro e confortável do início ao fim.
                </p>
              </div>

              {/* Specific features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {experienceItems.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="bg-brand-teal-light p-2.5 rounded-xl self-start">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-navy mb-1 font-heading">
                        {item.title}
                      </h4>
                      <p className="text-xs text-brand-gray leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tabs for Mission, Vision, Values */}
              <div className="mt-8 border border-brand-sky/30 rounded-2xl bg-white shadow-sm p-6">
                <div className="flex border-b border-brand-gray-light">
                  {(["missao", "visao", "valores"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition-all font-heading cursor-pointer ${
                        activeTab === tab
                          ? "border-brand-teal text-brand-teal"
                          : "border-transparent text-brand-gray hover:text-brand-navy"
                      }`}
                    >
                      {tab === "missao" ? "Missão" : tab === "visao" ? "Visão" : "Valores"}
                    </button>
                  ))}
                </div>

                <div className="pt-6 flex gap-4 items-start">
                  <div className="bg-brand-teal-light p-3 rounded-xl shrink-0">
                    {tabContent[activeTab].icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-brand-navy mb-1.5 font-heading">
                      {tabContent[activeTab].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-gray leading-relaxed">
                      {tabContent[activeTab].description}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
