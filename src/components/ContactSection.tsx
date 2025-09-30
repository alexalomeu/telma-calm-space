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
  return <section id="contato" className="py-20 px-4 bg-gradient-warm relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vamos conversar?
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estou aqui para acolher suas dúvidas e ajudar você a dar o primeiro passo em direção ao seu bem-estar.
          </p>
        </div>

        <div className="mb-12">
          <Button variant="whatsapp" size="xl" onClick={handleWhatsAppClick} className="font-inter text-lg px-12 py-4 animate-gentle-float shadow-glow group">
            <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            Agendar no WhatsApp
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card/90 backdrop-blur-sm border-warm-earth/20 hover:shadow-warm hover:scale-105 hover:border-accent/30 transition-all duration-300 animate-scale-in group cursor-pointer" onClick={handleWhatsAppClick}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
              <p className="font-inter text-sm text-muted-foreground">(95) 98419-8978</p>
            </CardContent>
          </Card>

          <Card className="bg-card/90 backdrop-blur-sm border-warm-earth/20 hover:shadow-warm hover:scale-105 hover:border-accent/30 transition-all duration-300 animate-scale-in cursor-pointer group" onClick={handleEmailClick}>
            
          </Card>

          <Card className="bg-card/90 backdrop-blur-sm border-warm-earth/20 hover:shadow-warm hover:scale-105 hover:border-accent/30 transition-all duration-300 animate-scale-in cursor-pointer group" onClick={handleInstagramClick}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
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
          <p className="font-inter text-muted-foreground">Presencial em Pacaraima/RR e Online para todo o Brasil</p>
        </div>
      </div>
    </section>;
};
export default ContactSection;