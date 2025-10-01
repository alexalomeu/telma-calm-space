import telmaPortrait from "@/assets/telma-portrait.jpg";
const AboutSection = () => {
  return <section id="sobre" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="order-2 lg:order-1 animate-scale-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute -inset-2 bg-accent/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img src={telmaPortrait} alt="Telma Cavalcante - Terapeuta Integrativa" className="relative w-full max-w-md mx-auto rounded-3xl shadow-elegant object-cover aspect-[4/5] transform group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8">
              Sobre mim
            </h2>
            
            <div className="space-y-6 font-inter text-lg text-muted-foreground leading-relaxed">
              <p>Meu objetivo é ajudar você a alcançar bem-estar físico, mental e emocional. Acredito profundamente que cada pessoa possui em si a capacidade de equilíbrio e transformação.  </p>
              
              <p>Minha abordagem combina técnicas da psicoterapia e da neurociência com práticas integrativas naturais, criando um espaço acolhedor em que mente e corpo são cuidados de forma harmoniosa. Através de um olhar humanizado, respeitoso e acolhedor, acompanho você em sua jornada de autoconhecimento, equilíbrio e bem-estar, oferecendo ferramentas práticas para que possa viver com mais leveza e se libertar do que tem limitado a sua vida.</p>
              
              <p>Além disso, ajudo você a identificar a verdadeira origem dos problemas emocionais — como ansiedade, depressão, pânico, compulsão, entre outros — trabalhando na causa e não apenas nos sintomas, para que a transformação seja profunda e completa.</p>
            </div>

            <div className="mt-8 p-8 bg-gradient-primary rounded-2xl shadow-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
              <blockquote className="font-script text-2xl text-primary-foreground text-center relative z-10">
                "Cada ser humano é único, e merece um cuidado tão especial quanto sua essência."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;