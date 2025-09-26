import { CheckCircle } from "lucide-react";

const benefits = [
  "Redução da ansiedade",
  "Equilíbrio emocional",
  "Autoconhecimento profundo",
  "Melhora da saúde e bem-estar",
  "Alívio de traumas e bloqueios",
  "Maior clareza mental",
  "Fortalecimento da autoestima",
  "Melhores relacionamentos"
];

const BenefitsSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Benefícios da Terapia
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Através do nosso trabalho conjunto, você poderá experimentar transformações profundas e duradouras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit}
              className="flex items-center space-x-4 p-4 bg-warm-cream rounded-lg border border-warm-earth/20 hover:shadow-soft transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <span className="font-inter text-lg text-warm-brown font-medium">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-primary rounded-xl text-center animate-fade-in">
          <p className="font-playfair text-xl text-primary-foreground italic">
            "A terapia é um investimento em você mesmo, no seu bem-estar e na sua felicidade."
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;