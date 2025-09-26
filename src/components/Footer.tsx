const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-warm-brown text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h3 className="font-playfair text-2xl font-bold text-warm-cream mb-2">
            Telma Cavalcante
          </h3>
          <p className="font-inter text-warm-cream/80">
            Terapeuta Integrativa e Psicoterapeuta
          </p>
          <p className="font-inter text-sm text-warm-cream/60 mt-1">
            CRTH-BR 18256 / CITRG 02.449
          </p>
        </div>

        <div className="border-t border-warm-cream/20 pt-6">
          <p className="font-inter text-sm text-warm-cream/60">
            © 2024 Telma Cavalcante. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;