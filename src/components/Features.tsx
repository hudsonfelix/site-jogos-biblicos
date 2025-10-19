import { Check } from 'lucide-react';

const featuresData = [
  {
    title: 'Jogos de Cartas',
    points: [
      'Jogo da Memória Bíblico',
      'Super Trunfo da Fé',
      'Jogo do Mico +',
      'Encontre o par! +',
      'O baralho da Oração',
    ],
  },
  {
    title: 'Quizzes e Desafios',
    points: [
      'Trilha Bíblica',
      'Caça ao Tesouro',
      'Verdadeiro ou Falso? +',
      'Quem sou eu?',
      'Jogo dos 7 erros +',
    ],
  },
  {
    title: 'Clássicos da Família',
    points: [
      'Argolas e Acertos',
      'Painel de Dados',
      'Jogo das Palavras',
      'Agenda Kids',
      'E muito mais!',
    ],
  }
];

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {featuresData.map((feature) => (
              <div key={feature.title} className="p-6 bg-card rounded-lg shadow-md border">
                <h3 className="text-xl font-bold text-center mb-4">{feature.title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
