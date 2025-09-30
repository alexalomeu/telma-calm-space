import logoIcon from "@/assets/logo-icon.png";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 bg-gradient-primary text-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-8 flex flex-col items-center animate-fade-in">
          <img 
            src={logoIcon} 
            alt="Telma Cavalcante Logo" 
            className="w-16 h-16 mb-4 opacity-90 hover:scale-110 transition-transform duration-300"
          />
          <h3 className="font-playfair text-2xl font-bold text-primary-foreground mb-2">
            Telma Cavalcante
          </h3>
          <p className="font-inter text-primary-foreground/90">
            Terapeuta Integrativa e Psicoterapeuta
          </p>
          <p className="font-inter text-sm text-primary-foreground/70 mt-2">
            CRTH-BR 18256 / CITRG 02.449
          </p>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6">
          <p className="font-inter text-sm text-primary-foreground/80 flex items-center justify-center gap-2">
            © {currentYear} Telma Cavalcante. Feito com <Heart className="w-4 h-4 text-red-400 animate-pulse" /> e dedicação.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;