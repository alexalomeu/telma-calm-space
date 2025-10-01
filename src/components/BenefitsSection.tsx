import { CheckCircle } from "lucide-react";
const benefits = ["Redução da ansiedade", "Equilíbrio emocional", "Autoconhecimento profundo", "Melhora da saúde e bem-estar", "Alívio de traumas e bloqueios", "Maior clareza mental", "Fortalecimento da autoestima", "Melhores relacionamentos"];
const BenefitsSection = () => {
  return <section id="beneficios" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Benefícios da Terapia
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Através do nosso trabalho conjunto, você poderá experimentar transformações profundas e duradouras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => <div key={benefit} className="flex items-center space-x-4 p-5 bg-warm-cream rounded-xl border border-warm-earth/20 hover:shadow-warm hover:scale-105 hover:border-accent/30 transition-all duration-300 animate-scale-in group cursor-pointer" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-accent group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              </div>
              <span className="font-inter text-lg text-warm-brown font-medium group-hover:text-primary transition-colors duration-300">
                {benefit}
              </span>
            </div>)}
        </div>

        <div className="mt-12 p-8 bg-gradient-primary rounded-2xl text-center animate-fade-in shadow-glow relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
          <p className="font-script text-2xl md:text-3xl text-primary-foreground relative z-10">"Terapia não é gasto é  investimento  no seu-bem 
emocional, mental e físico!"</p>
        </div>
      </div>
    </section>;
};
export default BenefitsSection;