import { Button } from "@/components/ui/button";
import { Phone, Sparkles } from "lucide-react";
import telmaPortrait from "@/assets/telma-portrait.jpg";
import decorativeElements from "@/assets/decorative-elements.png";
const HeroSection = () => {
  const handleWhatsAppClick = () => {
     const message = encodeURIComponent("Olá, eu vi seu site, gostaria de saber mais.");
     window.open(`https://wa.me/5595984198978?text=${message}`, "_blank");
  };
  return <section className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center justify-center px-4 py-32">
      {/* Decorative background elements */}
      
      <img 
        src={decorativeElements} 
        alt="" 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none" 
      />      
      <div className="max-w-7xl mx-auto grid gap-12 items-center relative z-10">
        {/* Text Column */}
        <div className="text-left animate-fade-in space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full border border-accent/20 animate-gentle-float">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="font-inter text-sm text-accent font-medium">Transformação e Bem-estar</span>
            </div>

            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Telma Cavalcante
            </h1>

            <p className="font-script text-3xl md:text-4xl text-primary/90 font-medium">
              "Cuidando da sua mente, corpo e bem-estar"
            </p>

            <div className="space-y-2">
              <p className="font-inter text-lg text-muted-foreground">
                Terapeuta Integrativa e Psicoterapeuta
              </p>
              <p className="font-inter text-sm text-muted-foreground/80">
                CRTH-BR 18256 / CITRG 02.449
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="therapy" size="xl" onClick={handleWhatsAppClick} className="font-inter shadow-glow group">
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Agende sua sessão
            </Button>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative animate-scale-in w-full">
          <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-gentle-float"></div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-gentle-float"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-gentle-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

    </section>;
};
export default HeroSection;