import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Download, MonitorPlay, Puzzle } from 'lucide-react';
import { Features } from './Features';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                Transforme o tempo em família em <span className="text-primary">momentos de fé</span> e <span className="text-secondary">diversão!</span>
              </h1>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl">
                São mais de 30 jogos e atividades para usar no seu ministério e usar com seu filho para morar no coração dele de um jeito divertido e feliz em família.
              </p>
            </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-12">
        <Features />
        <div className="relative my-12 h-64 min-h-[300px] lg:h-auto lg:min-h-[400px]">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-contain"
              data-ai-hint={heroImage.imageHint}
            />
          )}
        </div>
        <div className="flex flex-col items-center gap-4">
            <Button size="lg" className="w-full max-w-md">Quero Comprar Agora</Button>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm text-muted-foreground mt-4">
                <div className="flex items-center gap-2">
                    <Download className="h-4 w-4"/>
                    <span>Baixe e imprima</span>
                </div>
                 <div className="flex items-center gap-2">
                    <MonitorPlay className="h-4 w-4"/>
                    <span>Assista onde quiser</span>
                </div>
                 <div className="flex items-center gap-2">
                    <Puzzle className="h-4 w-4"/>
                    <span>+30 novos jogos</span>
                </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">PAGUE APENAS UMA VEZ E TENHA ACESSO VITALÍCIO!</p>
        </div>
      </div>
    </section>
  );
}
