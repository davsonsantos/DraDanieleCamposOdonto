import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Sobre from "@/sections/Sobre";
import Servicos from "@/sections/Servicos";
import Diferenciais from "@/sections/Diferenciais";
import ComoFunciona from "@/sections/ComoFunciona";
import Depoimentos from "@/sections/Depoimentos";
import Galeria from "@/sections/Galeria";
import FAQ from "@/sections/FAQ";
import CTA from "@/sections/CTA";
import Contato from "@/sections/Contato";
import Footer from "@/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import LGPD from "@/components/LGPD";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Sobre />
        <Servicos />
        <Diferenciais />
        <ComoFunciona />
        <Depoimentos />
        <Galeria />
        <FAQ />
        <CTA />
        <Contato />
      </main>
      <Footer />
      
      {/* Floating Elements & LGPD Compliance */}
      <WhatsAppButton />
      <ScrollToTop />
      <LGPD />
    </>
  );
}
