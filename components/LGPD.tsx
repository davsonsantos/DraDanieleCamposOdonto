"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, X } from "lucide-react";

export default function LGPD() {
  const [accepted, setAccepted] = useState<boolean>(true); // default to true to prevent flash during SSR

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setAccepted(true);
  };

  return (
    <AnimatePresence>
      {!accepted && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-50"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-brand-sky p-6 glass-effect flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-brand-teal-light text-brand-teal p-2 rounded-xl shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-brand-navy mb-1 font-heading">
                  Aviso de Cookies & Privacidade
                </h4>
                <p className="text-xs text-brand-gray leading-relaxed">
                  Para melhorar a sua experiência no nosso site institucional, utilizamos cookies. Ao continuar navegando, você concorda com a nossa política de privacidade de acordo com a LGPD.
                </p>
              </div>
              <button
                onClick={() => setAccepted(true)}
                className="text-brand-gray hover:text-brand-navy transition-colors cursor-pointer"
                aria-label="Fechar aviso"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex gap-3 justify-end text-xs">
              <a
                href="#politica-privacidade"
                className="px-3 py-2 text-brand-teal hover:underline font-medium cursor-pointer"
              >
                Políticas de Privacidade
              </a>
              <button
                onClick={handleAccept}
                className="px-5 py-2 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-xl font-semibold shadow-sm hover:shadow transition-all cursor-pointer"
              >
                Aceitar e Continuar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
