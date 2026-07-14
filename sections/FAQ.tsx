"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "O consultório aceita cartão de crédito e débito?",
      answer: "Sim, aceitamos as principais bandeiras de cartão de crédito e débito (Visa, Mastercard, Elo, Amex, Hipercard, entre outros) e também pagamentos via PIX ou dinheiro.",
    },
    {
      question: "Vocês fazem parcelamento de tratamentos?",
      answer: "Sim! Facilitamos o pagamento e oferecemos parcelamento em até 10x sem juros no cartão de crédito, dependendo do valor e do tipo de tratamento odontológico planejado.",
    },
    {
      question: "Vocês atendem crianças (Odontopediatria)?",
      answer: "Com certeza! Oferecemos atendimento odontológico infantil especializado. Nosso espaço e abordagem são totalmente lúdicos e humanizados, garantindo que as crianças sintam-se calmas, confortáveis e sem medos.",
    },
    {
      question: "Quanto custa uma consulta de avaliação?",
      answer: "O valor da consulta inicial inclui o exame clínico completo, diagnóstico e elaboração do plano de tratamento detalhado. Para saber o valor atualizado e condições vigentes, clique no botão do WhatsApp e fale com nosso atendimento.",
    },
    {
      question: "Como funciona para marcar uma consulta?",
      answer: "É muito simples! Basta clicar em qualquer botão 'Agendar Consulta' ou no ícone flutuante do WhatsApp. Você será direcionado para o nosso chat e nossa equipe agendará o melhor dia e horário para você.",
    },
    {
      question: "O local possui estacionamento?",
      answer: "Sim! Dispomos de estacionamento fácil, acessível e seguro no local, garantindo total conforto e comodidade para você estacionar seu carro ou moto durante a consulta.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-brand-gray-light/40 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-teal font-heading">
            Dúvidas Frequentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-3 tracking-tight font-heading">
            Perguntas Frequentes (FAQ)
          </h2>
          <div className="h-1 w-20 bg-brand-teal rounded-full my-4" />
          <p className="text-sm text-brand-gray leading-relaxed max-w-sm">
            Tem alguma dúvida sobre o consultório? Confira as respostas rápidas para as perguntas mais comuns dos nossos pacientes.
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-brand-sky/20 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-brand-navy hover:text-brand-teal transition-colors font-heading text-sm sm:text-base cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex gap-3 items-center">
                    <HelpCircle className="w-5 h-5 text-brand-teal shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-brand-gray shrink-0 ml-4"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-brand-gray leading-relaxed border-t border-brand-sky/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
