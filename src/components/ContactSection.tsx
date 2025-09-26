import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá, gostaria de agendar uma sessão terapêutica.");
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:telma@terapiaintegrativa.com", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/telmacavalcante_terapia", "_blank");
  };

  return (
    <section className="py-20 px-4 bg-gradient-warm">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vamos conversar?
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estou aqui para acolher suas dúvidas e ajudar você a dar o primeiro passo em direção ao seu bem-estar.
          </p>
        </div>

        <div className="mb-12">
          <Button 
            variant="whatsapp" 
            size="xl"
            onClick={handleWhatsAppClick}
            className="font-inter text-lg px-12 py-4 animate-gentle-float"
          >
            <Phone className="w-6 h-6" />
            Agendar no WhatsApp
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card/80 backdrop-blur-sm border-warm-earth/20 hover:shadow-soft transition-all duration-300 animate-scale-in">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
              <p className="font-inter text-sm text-muted-foreground">(11) 99999-9999</p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-warm-earth/20 hover:shadow-soft transition-all duration-300 animate-scale-in cursor-pointer" onClick={handleEmailClick}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">E-mail</h3>
              <p className="font-inter text-sm text-muted-foreground">telma@terapiaintegrativa.com</p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-warm-earth/20 hover:shadow-soft transition-all duration-300 animate-scale-in cursor-pointer" onClick={handleInstagramClick}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">Instagram</h3>
              <p className="font-inter text-sm text-muted-foreground">@telmacavalcante_terapia</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-warm-cream rounded-xl p-8 border border-warm-earth/20 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <MapPin className="w-5 h-5 text-accent" />
            <h3 className="font-playfair text-xl font-semibold text-foreground">Atendimento</h3>
          </div>
          <p className="font-inter text-muted-foreground">
            Presencial em São Paulo/SP e Online para todo o Brasil
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;