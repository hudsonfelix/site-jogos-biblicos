import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';


const testimonials = [
  {
    imageId: 'testimonial-1',
    name: 'Ana P.',
    rating: 5,
    quote: "Meus filhos amaram! O mais novo de 4 anos já está aprendendo as histórias e o mais velho de 9 anos está super empolgado com as gincanas. Super recomendo!",
  },
  {
    imageId: 'testimonial-2',
    name: 'Marcos V.',
    rating: 5,
    quote: 'Material excelente! Bem elaborado, fácil de usar e o mais importante, conseguiu prender a atenção das crianças. É uma ferramenta incrível para o ministério infantil.',
  },
  {
    imageId: 'testimonial-3',
    name: 'Família Santos',
    rating: 5,
    quote: 'Comprei sem muita expectativa, mas me surpreendi. Os jogos são muito divertidos e educativos. As crianças estão aprendendo a Bíblia de uma forma que nunca imaginei.',
  },
];

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Famílias que já estão se divertindo com a Palavra de Deus!</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
            Veja o que quem já comprou está dizendo:
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => {
            return (
              <Card key={testimonial.name} className="p-6 shadow-lg rounded-xl">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-14 h-14 mr-4">
                      <AvatarFallback className="bg-blue-200 text-xl font-bold text-blue-700">{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">Conferir depoimentos</Button>
        </div>
      </div>
    </section>
  );
}
