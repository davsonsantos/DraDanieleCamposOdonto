"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, CalendarRange } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Contato", href: "#contato" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappUrl = "https://wa.me/5592984943657?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-brand-sky/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group cursor-pointer">
            <svg
              className="w-10 h-10 text-brand-teal group-hover:scale-105 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Modern elegant geometric tooth/sparkle shape */}
              <path d="M12 2C9.5 2 7 3.5 7 6.5C7 9.5 9 12 12 13.5C15 12 17 9.5 17 6.5C17 3.5 14.5 2 12 2Z" />
              <path d="M7 6.5C7 8 8 10 9.5 11" />
              <path d="M17 6.5C17 8 16 10 14.5 11" />
              <path d="M12 13.5V22" />
              <path d="M9 18.5C9 19.5 10 21 12 21C14 21 15 19.5 15 18.5" />
              <path d="M4.5 9.5C3.5 9 3 8 3 7C3 5 5 4.5 6 5.5" />
              <path d="M19.5 9.5C20.5 9 21 8 21 7C21 5 19 4.5 18 5.5" />
            </svg>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-brand-navy leading-none">
                Dra. Daniele Campos
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-brand-teal mt-0.5">
                Odontologia Integrada
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-sm font-medium text-brand-navy/85 hover:text-brand-teal transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-teal group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+5592984943657"
              className="flex items-center gap-1.5 text-xs font-semibold text-brand-navy hover:text-brand-teal transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-teal" />
              (92) 98494-3657
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-teal hover:bg-brand-teal/90 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all-custom cursor-pointer"
            >
              <CalendarRange className="w-4 h-4" />
              Agende sua Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-brand-navy hover:bg-brand-sky/20 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-brand-sky/20 shadow-xl overflow-hidden z-30"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="block px-3 py-2.5 rounded-xl text-base font-semibold text-brand-navy hover:text-brand-teal hover:bg-brand-sky/10 transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-brand-sky/20 flex flex-col gap-3">
                <a
                  href="tel:+5592984943657"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-brand-sky text-sm font-semibold text-brand-navy hover:bg-brand-sky/10 transition-all"
                >
                  <Phone className="w-4 h-4 text-brand-teal" />
                  Ligar: (92) 98494-3657
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <CalendarRange className="w-4 h-4" />
                  Agendar pelo WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
