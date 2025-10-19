import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Gamepad2, Puzzle, Users } from 'lucide-react';

const featuresData = [
  {
    icon: <Gamepad2 className="h-8 w-8 mb-4 text-primary" />,
    title: 'Jogos de Cartas',
    points: [
      'Estimule a memória com nosso Jogo da Memória dos Discípulos.',
      'Aprenda sobre os livros da Bíblia com o divertido Super Trunfo dos Profetas.',
      'Desvende parábolas com o nosso exclusivo baralho de histórias.',
    ],
    imageId: 'card-game'
  },
  {
    icon: <Puzzle className="h-8 w-8 mb-4 text-primary" />,
    title: 'Quizzes e Desafios',
    points: [
      'Teste seus conhecimentos com quizzes de múltiplo escolha.',
      'Encare desafios de "Quem disse isso?" e surpreenda-se.',
      'Organize gincanas com nossas perguntas prontas para usar.',
    ],
    imageId: 'quiz-challenge'
  },
  {
    icon: <Users className="h-8 w-8 mb-4 text-primary" />,
    title: 'Clássicos da Família',
    points: [
      'Jogue um Bingo dos Milagres de Jesus em seu próximo encontro.',
      'Divirta-se com o nosso "Detetive" para descobrir personagens bíblicos.',
      'Reúna todos para uma partida de "Imagem & Ação" com temas da Bíblia.',
    ],
    imageId: 'family-classics'
  }
];

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Uma Aventura para Toda a Família</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
            Nossos jogos são criados para serem divertidos, educativos e, acima de tudo, uma ponte para conversas profundas sobre a fé.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {featuresData.map((feature) => {
            const image = PlaceHolderImages.find((img) => img.id === feature.imageId);
            return (
              <Card key={feature.title} className="flex flex-col transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
                {image && (
                   <div className="relative h-48 w-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover rounded-t-lg"
                      data-ai-hint={image.imageHint}
                    />
                   </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {feature.icon}
                    <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3 text-muted-foreground">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="text-primary mt-1">◆</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
