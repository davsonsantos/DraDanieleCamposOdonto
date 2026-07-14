"use client";

import { useState } from "react";
import { Instagram, MessageSquare, Phone, MapPin, Calendar, Clock, ShieldAlert, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<"privacidade" | "termos" | null>(null);

  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappUrl = "https://wa.me/5592984943657?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.";
  const instagramUrl = "https://www.instagram.com/dradanielecampos.odonto";

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 relative overflow-hidden">
      {/* Wave decoration on top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-blue to-brand-teal" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Narrative */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <svg className="w-9 h-9 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C9.5 2 7 3.5 7 6.5C7 9.5 9 12 12 13.5C15 12 17 9.5 17 6.5C17 3.5 14.5 2 12 2Z" />
                <path d="M7 6.5C7 8 8 10 9.5 11" />
                <path d="M17 6.5C17 8 16 10 14.5 11" />
                <path d="M12 13.5V22" />
              </svg>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight leading-none">Dra. Daniele Campos</span>
                <span className="text-[8px] tracking-[0.2em] uppercase font-semibold text-brand-teal mt-0.5">Odontologia Integrada</span>
              </div>
            </div>
            <p className="text-xs text-brand-sky/70 leading-relaxed max-w-xs">
              Atendimento humanizado, ético e moderno no coração de Manaus. Comprometidos em transformar sorrisos e devolver a autoconfiança de nossos pacientes com carinho e profissionalismo.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/15 rounded-xl border border-white/10 text-brand-sky hover:text-white transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/15 rounded-xl border border-white/10 text-brand-sky hover:text-white transition-all cursor-pointer"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 font-heading text-brand-teal">
              Navegação
            </h4>
            <ul className="space-y-3.5 text-xs text-brand-sky/80">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre Nós", href: "#sobre" },
                { label: "Tratamentos", href: "#tratamentos" },
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "Avaliações", href: "#avaliacoes" },
                { label: "Contato", href: "#contato" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="hover:text-brand-teal transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 font-heading text-brand-teal">
              Funcionamento
            </h4>
            <ul className="space-y-4 text-xs text-brand-sky/80">
              <li className="flex gap-2.5 items-start">
                <Clock className="w-4.5 h-4.5 text-brand-teal shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Segunda a Sexta-feira</p>
                  <p className="text-[10px] text-brand-sky/60">08:00 às 18:00</p>
                </div>
              </li>
              <li className="flex gap-2.5 items-start">
                <Clock className="w-4.5 h-4.5 text-brand-teal shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Sábado</p>
                  <p className="text-[10px] text-brand-sky/60">08:00 às 12:00</p>
                </div>
              </li>
              <li className="flex gap-2.5 items-start">
                <Calendar className="w-4.5 h-4.5 text-brand-teal shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Domingos e Feriados</p>
                  <p className="text-[10px] text-brand-sky/60">Fechado</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 font-heading text-brand-teal">
              Contato Principal
            </h4>
            <ul className="space-y-4.5 text-xs text-brand-sky/80">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-brand-teal shrink-0" />
                <span>
                  Av. Timbiras, 32C<br />
                  Nova Cidade, Manaus - AM<br />
                  CEP: 69090-010
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4.5 h-4.5 text-brand-teal shrink-0" />
                <a href="tel:+5592984943657" className="hover:text-brand-teal transition-colors">
                  (92) 98494-3657
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-brand-sky/50 text-center sm:text-left">
          <p>
            &copy; {currentYear} Consultório Odontológico Dra. Daniele Campos. Todos os direitos reservados. CRO-AM 4943.
          </p>
          <div className="flex gap-4 font-semibold uppercase tracking-wider">
            <button onClick={() => setActiveModal("privacidade")} className="hover:text-brand-teal cursor-pointer">
              Política de Privacidade
            </button>
            <span>•</span>
            <button onClick={() => setActiveModal("termos")} className="hover:text-brand-teal cursor-pointer">
              Termos de Uso
            </button>
          </div>
        </div>
      </div>

      {/* LGPD Modals */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm"
            />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden border border-brand-sky/20 z-10 text-brand-navy"
            >
              <div className="h-2 w-full bg-brand-teal" />
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 p-2 bg-brand-gray-light hover:bg-brand-sky/20 rounded-full text-brand-gray hover:text-brand-navy transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-8 max-h-[70vh] overflow-y-auto">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldAlert className="w-6 h-6 text-brand-teal" />
                  <h3 className="text-lg font-bold font-heading">
                    {activeModal === "privacidade" ? "Política de Privacidade (LGPD)" : "Termos e Condições de Uso"}
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-brand-gray leading-relaxed text-left">
                  {activeModal === "privacidade" ? (
                    <>
                      <p className="font-semibold text-brand-navy">1. Coleta e Uso de Informações</p>
                      <p>Coletamos seu nome, e-mail e telefone através do formulário de contato com a única finalidade de retornar seu contato para esclarecer dúvidas ou agendar consultas. Seus dados nunca serão repassados a terceiros sem sua autorização expressa.</p>
                      <p className="font-semibold text-brand-navy">2. Armazenamento e Segurança</p>
                      <p>Os dados enviados através do formulário de contato são transmitidos de forma segura via protocolos SSL criptografados e armazenados temporariamente para a realização do atendimento sob estrita confidencialidade.</p>
                      <p className="font-semibold text-brand-navy">3. Seus Direitos</p>
                      <p>Em conformidade com a LGPD (Lei Geral de Proteção de Dados), você tem o direito de solicitar a visualização, correção ou exclusão definitiva de seus dados cadastrais em nossos registros a qualquer momento através do e-mail de contato.</p>
                    </>
                  ) : (
                    <>
                      <p className="font-semibold text-brand-navy">1. Aceitação dos Termos</p>
                      <p>Ao navegar em nosso site institucional, você concorda com as políticas e diretrizes aqui descritas. Os conteúdos (textos, imagens, logos) são de propriedade intelectual exclusiva do Consultório Odontológico Dra. Daniele Campos.</p>
                      <p className="font-semibold text-brand-navy">2. Responsabilidade do Usuário</p>
                      <p>O usuário concorda em utilizar este site de boa-fé, não enviando spans ou mensagens falsas através do formulário de contato. É proibida qualquer ação que vise comprometer a segurança da infraestrutura do site.</p>
                      <p className="font-semibold text-brand-navy">3. Limitação de Responsabilidade</p>
                      <p>As informações aqui contidas têm caráter meramente informativo e de agendamento de serviços de saúde. Nenhuma informação substitui o diagnóstico clínico realizado presencialmente por profissional qualificado.</p>
                    </>
                  )}
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="px-6 py-2.5 bg-brand-teal hover:bg-brand-teal/90 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer shadow"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
