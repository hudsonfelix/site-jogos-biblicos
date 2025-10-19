import { Lightbulb, Users, Heart } from 'lucide-react';

const reasons = [
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: 'Metodologia Lúdica',
    description: 'Transformamos a memorização em um jogo, facilitando o aprendizado sem esforço.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Para Todas as Idades',
    description: 'Nossas atividades são pensadas para integrar crianças, jovens e adultos na mesma brincadeira.',
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: 'Foco na Conexão',
    description: 'Mais que um produto, uma ferramenta para criar memórias e fortalecer os laços familiares através da fé.',
  },
];

export function WhyDifferent() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Por Que o Clube é Diferente?</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
            Vamos além do ensino tradicional. Nossa missão é criar experiências que marcam.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3 max-w-5xl mx-auto">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center flex flex-col items-center">
              <div className="flex items-center justify-center bg-primary/10 rounded-full p-4 mb-4">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold font-headline">{reason.title}</h3>
              <p className="mt-2 text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
