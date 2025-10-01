import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  Eye, 
  Brain, 
  Users, 
  Flower2, 
  Leaf, 
  Sparkles,
  CircleDot,
  Zap
} from "lucide-react";

const approaches = [
  {
    title: "Terapia TRG",
    description: "Ajuda a liberar bloqueios emocionais e traumas, promovendo alívio e equilíbrio interior.",
    icon: Heart,
  },
  {
    title: "Leitura Corporal",
    description: "O corpo fala. Essa abordagem identifica sinais físicos que revelam estados emocionais e padrões inconscientes.",
    icon: CircleDot,
  },
  {
    title: "Psicoterapia",
    description: "Um espaço seguro para acolher suas emoções, compreender seus desafios e encontrar novas formas de viver com mais leveza.",
    icon: Brain,
  },
  {
    title: "Psicanálise",
    description: "Permite mergulhar no inconsciente para compreender as raízes dos seus sentimentos e comportamentos.",
    icon: Sparkles,
  },
  {
    title: "Terapia Sistêmica",
    description: "Olha para você dentro do contexto das suas relações, ajudando a transformar vínculos e ciclos familiares.",
    icon: Users,
  },
  {
    title: "Aromaterapia",
    description: "O poder dos óleos essenciais para trazer relaxamento, equilíbrio e bem-estar ao corpo e à mente.",
    icon: Flower2,
  },
  {
    title: "Naturopatia",
    description: "Promove saúde e vitalidade de forma natural, fortalecendo o organismo e prevenindo desequilíbrios.",
    icon: Leaf,
  },
  {
    title: "Iridologia",
    description: "Através da análise da íris dos olhos, identifica tendências e necessidades do corpo, favorecendo a autoconsciência e cuidados personalizados.",
    icon: Eye,
  },
  {
    title: "EFT",
    description: "Técnica de Liberação Emocional que combina Acupuntura sem agulhas e psicoterapia, para liberar bloqueios emocionais e reduzir o estresse e a ansiedade de forma rápida e eficaz.",
    icon: Zap,
  },
];

const TherapyApproaches = () => {
  return (
    <section id="abordagens" className="py-20 px-4 bg-gradient-warm relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-gentle-float"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-gentle-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Abordagens Terapêuticas
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada pessoa é única, por isso ofereço diferentes caminhos para sua jornada de cura e autoconhecimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {approaches.map((approach, index) => {
            const Icon = approach.icon;
            return (
              <Card 
                key={approach.title}
                className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-105 bg-card/90 backdrop-blur-sm border-warm-earth/20 hover:border-accent/40 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-soft group-hover:shadow-glow">
                    <Icon className="w-8 h-8 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="font-playfair text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {approach.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-inter text-sm text-muted-foreground leading-relaxed text-center">
                    {approach.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TherapyApproaches;