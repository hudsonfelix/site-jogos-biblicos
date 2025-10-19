import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';

const testimonials = [
  {
    imageId: 'testimonial-1',
    name: 'Ana P.',
    location: 'São Paulo/SP',
    quote: "Meus filhos agora pedem para 'brincar de Bíblia'. Nunca imaginei que seria tão fácil e divertido ensiná-los. Recomendo demais!",
  },
  {
    imageId: 'testimonial-2',
    name: 'Marcos V.',
    location: 'Rio de Janeiro/RJ',
    quote: 'Usamos nas atividades da nossa célula e foi um sucesso! Dinâmico, bem feito e muito edificante. O pessoal amou.',
  },
  {
    imageId: 'testimonial-3',
    name: 'Família Santos',
    location: 'Belo Horizonte/MG',
    quote: 'Material de altíssima qualidade. O design é lindo e as regras são simples. Uniu nossa família em volta da Palavra.',
  },
];

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">O que as Famílias Estão Dizendo</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
            A confiança e a alegria de quem já faz parte do nosso clube.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find(img => img.id === testimonial.imageId);
            return (
              <Card key={testimonial.name} className="p-6 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="rounded-full mr-4 object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic border-l-2 border-primary pl-4">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
