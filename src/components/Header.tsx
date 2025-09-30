import logoIcon from "@/assets/logo-icon.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 animate-fade-in">
          <img 
            src={logoIcon} 
            alt="Telma Cavalcante Logo" 
            className="w-12 h-12 object-contain"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="#sobre" 
            className="font-inter text-sm text-foreground hover:text-primary transition-colors duration-300"
          >
            Sobre
          </a>
          <a 
            href="#abordagens" 
            className="font-inter text-sm text-foreground hover:text-primary transition-colors duration-300"
          >
            Abordagens
          </a>
          <a 
            href="#beneficios" 
            className="font-inter text-sm text-foreground hover:text-primary transition-colors duration-300"
          >
            Benefícios
          </a>
          <a 
            href="#depoimentos" 
            className="font-inter text-sm text-foreground hover:text-primary transition-colors duration-300"
          >
            Depoimentos
          </a>
          <a 
            href="#contato" 
            className="font-inter text-sm text-foreground hover:text-primary transition-colors duration-300"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
