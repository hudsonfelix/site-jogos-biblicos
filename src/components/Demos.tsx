import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from './ui/button';

const demos = [
  {
    id: 'demo-card-heroes',
    title: 'Jogo de Cartas "Heróis da Fé"',
    description: 'Veja como nosso design colorido e cativante torna o aprendizado sobre os personagens da Bíblia uma experiência visualmente rica e divertida.',
  },
  {
    id: 'demo-family-quiz',
    title: 'Quiz Interativo em Família',
    description: 'Imagine a cena: todos reunidos, rindo e competindo de forma saudável para ver quem sabe mais sobre as histórias sagradas. É isso que nossos quizzes proporcionam.',
  },
  {
    id: 'demo-print-kit',
    title: 'Kit "Imprima e Brinque"',
    description: 'Nossos jogos são desenhados para serem fáceis de imprimir e montar. Em poucos minutos, a diversão está pronta para começar na sua casa.',
  }
];

export function Demos() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" style={{ backgroundColor: '#EFF7FF' }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Por que o Clube dos Jogos Bíblicos é diferente?</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {demos.map((demo) => {
            const image = PlaceHolderImages.find(img => img.id === demo.id);
            return (
              <Card key={demo.id} className="overflow-hidden shadow-lg border-none rounded-xl">
                {image && (
                  <div className="relative aspect-video">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-center">{demo.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{demo.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
            <Button variant="secondary" size="lg">Quero garantir o meu agora!</Button>
        </div>
      </div>
    </section>
  );
}
