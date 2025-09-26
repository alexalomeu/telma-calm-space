import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <section className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
            Telma Cavalcante
          </h1>
          <p className="font-inter text-lg md:text-xl text-muted-foreground mb-2">
            Terapeuta Integrativa e Psicoterapeuta
          </p>
          <p className="font-inter text-sm text-muted-foreground/80">
            CRTH-BR 18256 / CITRG 02.449
          </p>
        </div>

        <div className="mb-12">
          <p className="font-playfair text-2xl md:text-3xl text-warm-brown/90 font-medium italic mb-8">
            "Cuidando da sua mente, corpo e bem-estar"
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="therapy" 
            size="xl"
            onClick={handleWhatsAppClick}
            className="font-inter animate-gentle-float"
          >
            <Phone className="w-5 h-5" />
            Agende sua sessão
          </Button>
          
          <Button 
            variant="gentle" 
            size="xl"
            onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-inter"
          >
            Conheça meu trabalho
          </Button>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-muted-foreground/60">
            <div className="w-8 h-px bg-warm-earth/30"></div>
            <span className="font-inter text-sm">Role para saber mais</span>
            <div className="w-8 h-px bg-warm-earth/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;