import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-24">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                Redescubra a alegria de aprender a Palavra em família com jogos que unem corações e mentes.
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Chega de telas! Conecte sua família aos ensinamentos bíblicos de uma forma interativa e memorável que todos vão amar.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Quero meu acesso agora!</Button>
              <Button size="lg" variant="outline">Ver os jogos</Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Pagamento seguro • Acesso imediato • Garantia de 7 dias
            </p>
            <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary"/>
                    Download imediato, comece a jogar em minutos.
                </li>
                <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary"/>
                    Imprima quantas vezes quiser, diversão que não acaba.
                </li>
                <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary"/>
                    Conteúdo 100% fiel aos textos bíblicos.
                </li>
            </ul>
          </div>
          <div className="relative h-64 min-h-[300px] lg:h-auto">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover rounded-xl shadow-2xl"
                data-ai-hint={heroImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
