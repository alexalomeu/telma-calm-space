import telmaPortrait from "@/assets/telma-portrait.jpg";
const AboutSection = () => {
  return <section id="sobre" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="order-2 lg:order-1 animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3 opacity-20"></div>
              <img src={telmaPortrait} alt="Telma Cavalcante - Terapeuta Integrativa" className="relative w-full max-w-md mx-auto rounded-2xl shadow-elegant object-cover aspect-[4/5]" />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8">
              Sobre mim
            </h2>
            
            <div className="space-y-6 font-inter text-lg text-muted-foreground leading-relaxed">
              <p>Meu objetivo é ajudar você a alcançar bem-estar físico, mental e emocional.
Acredito profundamente que cada pessoa possui em si a capacidade de equilíbrio e transformação.
Minha abordagem combina técnicas da psicoterapia e da neurociência com práticas integrativas naturais, criando um espaço acolhedor em que mente e corpo são cuidados de forma harmoniosa.</p>
              
              <p>Minha abordagem combina técnicas da psicoterapia e da neurociência com práticas integrativas naturais, criando um espaço acolhedor em que mente e corpo são cuidados de forma harmoniosa.</p>
              
              <p>
                Através de um olhar humanizado e respeitoso, acompanho pessoas em sua jornada de 
                autoconhecimento, oferecendo ferramentas práticas para que possam viver com mais 
                leveza, equilíbrio e autenticidade.
              </p>
            </div>

            <div className="mt-8 p-6 bg-warm-cream rounded-xl border border-warm-earth/20">
              <blockquote className="font-playfair text-xl italic text-warm-brown text-center">
                "Cada ser humano é único, e merece um cuidado tão especial quanto sua essência."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;