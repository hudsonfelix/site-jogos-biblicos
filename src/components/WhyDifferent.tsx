import Image from "next/image";
import { Check } from 'lucide-react';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "./ui/button";


const points = [
    '200 Versículos para memorizar',
    '150 Salmos para meditar',
    'Licença para usar no ministério',
    '2 Bônus Secretos',
];

export function WhyDifferent() {
  const image = PlaceHolderImages.find(img => img.id === 'family-classics');

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                {image && (
                    <Image 
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={400}
                        className="rounded-xl shadow-lg"
                        data-ai-hint={image.imageHint}
                    />
                )}
            </div>
            <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Kit Gincana Explosiva</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                    Um kit completo para eventos e gincanas com tudo que você precisa para organizar uma Gincana Bíblica inesquecível.
                </p>
                <ul className="mt-6 space-y-4">
                    {points.map(point => (
                        <li key={point} className="flex items-center gap-3">
                            <Check className="h-6 w-6 text-green-500"/>
                            <span className="text-lg text-muted-foreground">{point}</span>
                        </li>
                    ))}
                </ul>
                <Button size="lg" className="mt-8">Quero todo o material!</Button>
            </div>
        </div>
      </div>
    </section>
  );
}
