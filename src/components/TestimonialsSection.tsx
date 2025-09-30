import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Joana",
    therapy: "TRG",
    text: "Eu tinha fobia social, não queria sair de casa para nada. Após apenas uma sessão de TRG, voltei a ter alegria de viver. Ontem me deu uma enorme vontade de andar de bicicleta, lembrando da minha infância. Eu me sinto transbordando de alegria!",
    initials: "JO",
  },
  {
    name: "Maria",
    therapy: "TRG",
    text: "Depois da terapia TRG, venci medos que carregava desde a infância: o medo de boto e o medo de altura. Foi emocionante e transformador me sentir realizada e feliz nessa viagem.",
    initials: "MA",
  },
  {
    name: "Sara",
    therapy: "EFT",
    text: "Estava há mais de uma semana com muito enjoo e sem conseguir me alimentar. Descobri que tudo vinha da ansiedade com o casamento da minha irmã. Após uma sessão de EFT, o enjoo desapareceu e meu apetite voltou. Foi um alívio imenso!",
    initials: "SA",
  },
  {
    name: "Alexa",
    therapy: "EFT",
    text: "Carreguei por 6 anos uma dor emocional que virou gastrite nervosa. Em uma sessão de EFT, consegui liberar esse trauma, e junto com ele, as dores físicas desapareceram. Hoje vivo leve, saudável e até comecei um novo relacionamento.",
    initials: "AL",
  },
  {
    name: "Sandra",
    therapy: "TRG",
    text: "Por 62 anos tive pavor da cor branca por causa de um trauma de infância. Depois da TRG, consegui colocar cortinas e flores brancas no meu quarto e me senti em paz. Um trauma de décadas finalmente foi curado.",
    initials: "SD",
  },
  {
    name: "Larissa",
    therapy: "Terapia Sistêmica Familiar",
    text: "Eu carregava o peso de ser uma 'gêmea sobrevivente', sentia um vazio constante. Com a terapia sistêmica familiar, algo profundo foi transformado dentro de mim. Hoje me sinto livre de padrões antigos e mais conectada comigo mesma.",
    initials: "LA",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-subtle" id="depoimentos">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Histórias de Transformação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de pessoas que encontraram cura emocional e bem-estar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border shadow-soft hover:shadow-warm transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Avatar className="w-14 h-14 border-2 border-primary/20">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold text-lg">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl text-foreground mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {testimonial.therapy}
                    </p>
                  </div>
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>
                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
