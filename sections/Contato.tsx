"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageSquare,
  Instagram,
  Compass,
  Send,
  Loader2,
  CheckCircle,
  Mail
} from "lucide-react";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  honeypot: string; // anti-spam
}

export default function Contato() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // If the honeypot field is filled, treat it as spam and silently ignore
    if (data.honeypot) {
      console.warn("Spam detected!");
      setSubmitSuccess(true);
      return;
    }

    setIsSubmitting(true);

    // Simulate API request to server action / backend endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();

    // Auto close success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  const whatsappUrl = "https://wa.me/5592984943657?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.";
  const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Av.+Timbiras,+32C,+Nova+Cidade,+Manaus+-+AM";
  const instagramUrl = "https://www.instagram.com/dradanielecampos.odonto";
  const embedMapsUrl = "https://maps.google.com/maps?q=Av.%20Timbiras,%2032C,%20Nova%20Cidade,%20Manaus%20-%20AM&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contato" className="py-20 bg-brand-gray-light/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-teal font-heading">
            Fale Conosco
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-3 tracking-tight font-heading">
            Agende Sua Visita
          </h2>
          <div className="h-1 w-20 bg-brand-teal rounded-full my-4" />
          <p className="text-sm text-brand-gray leading-relaxed max-w-xl">
            Entre em contato pelo formulário, ligue para nós, ou agende diretamente seu horário através do WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Cards */}
            <div className="bg-white rounded-3xl p-6 border border-brand-sky/20 shadow-sm space-y-5">
              
              {/* Address */}
              <div className="flex gap-4">
                <div className="bg-brand-teal-light p-3 rounded-2xl text-brand-teal self-start">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-brand-gray tracking-wider font-heading mb-0.5">Endereço</h4>
                  <p className="text-sm font-semibold text-brand-navy leading-relaxed">
                    Av. Timbiras, 32C<br />
                    Nova Cidade, Manaus - AM<br />
                    CEP: 69090-010
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex gap-4">
                <div className="bg-brand-teal-light p-3 rounded-2xl text-brand-teal self-start">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-brand-gray tracking-wider font-heading mb-0.5">Telefone</h4>
                  <a href="tel:+5592984943657" className="text-sm font-semibold text-brand-navy hover:text-brand-teal transition-colors">
                    (92) 98494-3657
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="bg-brand-teal-light p-3 rounded-2xl text-brand-teal self-start">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-brand-gray tracking-wider font-heading mb-0.5">E-mail</h4>
                  <a href="mailto:contato@dradanielecampos.com.br" className="text-sm font-semibold text-brand-navy hover:text-brand-teal transition-colors">
                    contato@dradanielecampos.com.br
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-green-500 hover:bg-green-600 rounded-2xl text-white shadow-sm hover:scale-[1.02] transition-all cursor-pointer text-center"
              >
                <MessageSquare className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-brand-blue hover:bg-brand-blue/95 rounded-2xl text-white shadow-sm hover:scale-[1.02] transition-all cursor-pointer text-center"
              >
                <Compass className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Como Chegar</span>
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 hover:opacity-90 rounded-2xl text-white shadow-sm hover:scale-[1.02] transition-all cursor-pointer text-center"
              >
                <Instagram className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Instagram</span>
              </a>
            </div>

            {/* Embedded Google Maps Map */}
            <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-brand-sky/20 z-10 bg-brand-sky/10">
              <iframe
                title="Localização do Consultório Dra. Daniele Campos"
                src={embedMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2rem] p-8 border border-brand-sky/20 shadow-sm relative">
              <h3 className="text-xl font-bold text-brand-navy mb-6 font-heading">
                Envie Uma Mensagem
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Honeypot Anti-Spam Field */}
                <div className="hidden">
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    placeholder="Se você é humano, ignore este campo"
                    {...register("honeypot")}
                  />
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="nome" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2 font-heading">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    placeholder="Digite seu nome completo"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.nome
                        ? "border-red-300 focus:ring-red-200"
                        : "border-brand-sky focus:border-brand-teal focus:ring-brand-teal/20"
                    }`}
                    {...register("nome", { required: "Seu nome é obrigatório" })}
                  />
                  {errors.nome && (
                    <span className="text-xs text-red-500 mt-1 block">{errors.nome.message}</span>
                  )}
                </div>

                {/* Email & Phone grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2 font-heading">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="seu.email@exemplo.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.email
                          ? "border-red-300 focus:ring-red-200"
                          : "border-brand-sky focus:border-brand-teal focus:ring-brand-teal/20"
                      }`}
                      {...register("email", {
                        required: "E-mail é obrigatório",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "E-mail inválido",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="telefone" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2 font-heading">
                      Celular / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      placeholder="(92) 99999-9999"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.telefone
                          ? "border-red-300 focus:ring-red-200"
                          : "border-brand-sky focus:border-brand-teal focus:ring-brand-teal/20"
                      }`}
                      {...register("telefone", {
                        required: "Telefone é obrigatório",
                        minLength: {
                          value: 10,
                          message: "Telefone inválido (insira o DDD)",
                        },
                      })}
                    />
                    {errors.telefone && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.telefone.message}</span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="mensagem" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2 font-heading">
                    Mensagem / Dúvida
                  </label>
                  <textarea
                    id="mensagem"
                    rows={4}
                    placeholder="Escreva sua mensagem ou dúvida aqui..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.mensagem
                        ? "border-red-300 focus:ring-red-200"
                        : "border-brand-sky focus:border-brand-teal focus:ring-brand-teal/20"
                    }`}
                    {...register("mensagem", { required: "A mensagem é obrigatória" })}
                  />
                  {errors.mensagem && (
                    <span className="text-xs text-red-500 mt-1 block">{errors.mensagem.message}</span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-brand-teal hover:bg-brand-teal/90 text-white font-bold py-3.5 rounded-xl shadow-md cursor-pointer transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando Mensagem...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>

              {/* Form Success Popup */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center text-center z-10"
                  >
                    <CheckCircle className="w-16 h-16 text-brand-teal mb-4 animate-bounce" />
                    <h3 className="text-xl font-bold text-brand-navy mb-2 font-heading">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-brand-gray text-sm leading-relaxed max-w-sm mb-6">
                      Agradecemos o seu contato. Em breve nossa equipe retornará sua mensagem pelo e-mail ou número de telefone fornecido.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2.5 bg-brand-navy hover:bg-brand-navy/95 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Ok, entendi
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
