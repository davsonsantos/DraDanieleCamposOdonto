"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Stethoscope,
  Smile,
  Activity,
  Heart,
  Baby,
  Clock,
  Shield,
  Gem,
  Grid,
  ChevronRight,
  X,
  MessageSquareDot
} from "lucide-react";

interface Servico {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ReactNode;
  iconColor: string;
  bgColor: string;
}

export default function Servicos() {
  const [selectedService, setSelectedService] = useState<Servico | null>(null);

  const servicos: Servico[] = [
    {
      id: "clinica-geral",
      title: "Clínica Geral",
      shortDesc: "Avaliações preventivas, diagnósticos completos e cuidados iniciais.",
      fullDesc: "A clínica geral é a porta de entrada para a sua saúde bucal. Realizamos exames detalhados, diagnósticos de cáries, gengivite e outros problemas em estágio inicial, garantindo um tratamento rápido e a prevenção de complicações futuras.",
      icon: <Stethoscope className="w-6 h-6" />,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: "limpeza",
      title: "Limpeza (Profilaxia)",
      shortDesc: "Remoção de placa bacteriana, tártaro e polimento dental.",
      fullDesc: "A profilaxia é a limpeza profissional realizada no consultório. Remove a placa bacteriana, tártaro acumulado e manchas superficiais. É essencial para manter as gengivas saudáveis, prevenir a periodontite e garantir um hálito fresco.",
      icon: <Sparkles className="w-6 h-6" />,
      iconColor: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      id: "restauracao",
      title: "Restauração Estética",
      shortDesc: "Reconstrução do dente com resinas na cor natural do seu sorriso.",
      fullDesc: "Recupere a estrutura e a beleza dos dentes afetados por cáries ou fraturas leves. Utilizamos resinas compostas de última geração, que imitam a cor, textura e brilho naturais do dente, proporcionando durabilidade e estética impecável.",
      icon: <Shield className="w-6 h-6" />,
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      id: "canal",
      title: "Tratamento de Canal",
      shortDesc: "Tratamento endodôntico seguro para aliviar a dor e salvar o dente.",
      fullDesc: "O tratamento endodôntico (canal) remove a polpa dental infeccionada ou inflamada. Com técnicas modernas e anestesia eficaz, realizamos o procedimento de forma rápida, confortável e totalmente focada em salvar o dente natural.",
      icon: <Heart className="w-6 h-6" />,
      iconColor: "text-rose-600",
      bgColor: "bg-rose-50"
    },
    {
      id: "extracao",
      title: "Extração Dental & Siso",
      shortDesc: "Procedimentos cirúrgicos seguros e confortáveis.",
      fullDesc: "Quando a extração é necessária — como nos casos de dentes do siso impactados ou dentes sem possibilidade de restauração —, realizamos a cirurgia de forma minimamente invasiva, com planejamento digital e total controle de dor.",
      icon: <Activity className="w-6 h-6" />,
      iconColor: "text-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      id: "protese",
      title: "Próteses Dentárias",
      shortDesc: "Substituição de dentes perdidos com próteses fixas ou removíveis.",
      fullDesc: "Devolva a mastigação correta, a fala nítida e a harmonia do seu rosto. Oferecemos próteses parciais, totais, coroas em porcelana e próteses sobre implantes, todas sob medida para o seu conforto e estética.",
      icon: <Smile className="w-6 h-6" />,
      iconColor: "text-sky-600",
      bgColor: "bg-sky-50"
    },
    {
      id: "implantes",
      title: "Implantes Dentários",
      shortDesc: "Reabilitação oral definitiva com pinos de titânio duradouros.",
      fullDesc: "A melhor solução para a perda dentária. O implante substitui a raiz do dente e oferece suporte fixo para a coroa. O resultado é extremamente seguro, permitindo comer, falar e sorrir com total liberdade e naturalidade.",
      icon: <Grid className="w-6 h-6" />,
      iconColor: "text-cyan-600",
      bgColor: "bg-cyan-50"
    },
    {
      id: "ortodontia",
      title: "Ortodontia",
      shortDesc: "Aparelhos dentários modernos para alinhar seu sorriso.",
      fullDesc: "Correção da posição dos dentes e dos ossos maxilares. Trabalhamos com aparelhos convencionais, estéticos e alinhadores transparentes de última geração, ideais para quem busca discrição, conforto e resultados previsíveis.",
      icon: <Smile className="w-6 h-6" />,
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      id: "clareamento",
      title: "Clareamento Dental",
      shortDesc: "Sorriso brilhante e renovado com técnicas seguras.",
      fullDesc: "Clareamento a laser em consultório ou moldeiras para uso caseiro supervisionado. Removemos manchas e amarelados de forma segura para o esmalte dos dentes, devolvendo o brilho e a cor jovem do seu sorriso.",
      icon: <Sparkles className="w-6 h-6" />,
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      id: "facetas",
      title: "Facetas & Lentes",
      shortDesc: "Lentes de contato em porcelana ou resina para transformar seu sorriso.",
      fullDesc: "As lentes de contato e facetas dentais corrigem pequenas imperfeições de formato, cor, espaçamento (diastemas) e alinhamento. É o tratamento ideal para construir um sorriso simétrico, harmonioso e deslumbrante.",
      icon: <Gem className="w-6 h-6" />,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: "odontopediatria",
      title: "Odontopediatria",
      shortDesc: "Cuidados preventivos com carinho e psicologia para crianças.",
      fullDesc: "Cuidamos dos sorrisos dos pequenos desde cedo. Em um ambiente lúdico e acolhedor, usamos a psicologia infantil para tornar a consulta divertida, ensinando bons hábitos e prevenindo medos futuros.",
      icon: <Baby className="w-6 h-6" />,
      iconColor: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      id: "emergencias",
      title: "Atendimento de Emergência",
      shortDesc: "Alívio imediato da dor e solução para urgências odontológicas.",
      fullDesc: "Dor de dente aguda, fraturas, traumas ou próteses quebradas? Oferecemos atendimento rápido e humanizado para aliviar a dor e resolver a sua emergência com a agilidade que você precisa.",
      icon: <Clock className="w-6 h-6" />,
      iconColor: "text-red-600",
      bgColor: "bg-red-50"
    }
  ];

  const getWhatsAppLink = (serviceTitle: string) => {
    const text = encodeURIComponent(`Olá! Gostaria de tirar dúvidas sobre o tratamento de *${serviceTitle}*.`);
    return `https://wa.me/5592984943657?text=${text}`;
  };

  return (
    <section id="tratamentos" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-teal font-heading">
            O que Fazemos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-3 tracking-tight font-heading">
            Tratamentos Odontológicos Completos
          </h2>
          <div className="h-1 w-20 bg-brand-teal rounded-full my-4" />
          <p className="text-sm text-brand-gray leading-relaxed max-w-xl">
            Unimos dedicação humanizada, materiais de alta qualidade e tecnologia moderna para oferecer tratamentos preventivos, corretivos e estéticos de alto nível.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicos.map((servico, index) => (
            <motion.div
              key={servico.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-brand-gray-light/35 hover:bg-white rounded-3xl p-6 border border-brand-sky/20 hover:border-brand-teal/30 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Service Icon */}
              <div className={`p-3 rounded-2xl ${servico.bgColor} ${servico.iconColor} w-fit mb-5 transition-transform group-hover:scale-110 duration-300`}>
                {servico.icon}
              </div>

              {/* Service Info */}
              <h3 className="text-lg font-bold text-brand-navy mb-2 font-heading leading-tight group-hover:text-brand-teal transition-colors">
                {servico.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-gray leading-relaxed flex-1">
                {servico.shortDesc}
              </p>

              {/* Action Button */}
              <button
                onClick={() => setSelectedService(servico)}
                className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-brand-teal group-hover:text-brand-blue transition-colors self-start cursor-pointer"
              >
                Saiba Mais
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-[2rem] w-full max-w-lg shadow-2xl overflow-hidden border border-brand-sky/30 z-10"
            >
              {/* Top Banner accent color */}
              <div className={`h-3 w-full bg-brand-teal`} />

              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 bg-brand-gray-light hover:bg-brand-sky/20 rounded-full text-brand-gray hover:text-brand-navy transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-8">
                {/* Modal Header */}
                <div className="flex gap-4 items-center mb-6">
                  <div className={`p-3.5 rounded-2xl ${selectedService.bgColor} ${selectedService.iconColor}`}>
                    {selectedService.icon}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-teal">Tratamento</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="text-brand-gray text-sm sm:text-base leading-relaxed mb-8">
                  <p>{selectedService.fullDesc}</p>
                </div>

                {/* Modal Footer / CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={getWhatsAppLink(selectedService.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-brand-teal hover:bg-brand-teal/90 text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:scale-[1.02] transition-all cursor-pointer text-sm"
                  >
                    <MessageSquareDot className="w-4 h-4" />
                    Agendar Avaliação
                  </a>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="py-3.5 px-6 border border-brand-sky hover:bg-brand-gray-light text-brand-navy font-bold rounded-xl transition-colors cursor-pointer text-sm"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
