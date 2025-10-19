import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Pacote Simples',
    price: 'R$17',
    originalPrice: 'R$17',
    description: 'Acesso a 10 Jogos e Bônus',
    features: [
      'Acesso a 10 jogos',
    ],
    isPopular: false,
    buttonText: 'Garantir Acesso Básico',
    buttonVariant: 'secondary',
  },
  {
    name: 'Pacote Completo',
    price: 'R$29',
    originalPrice: 'R$29',
    description: 'Tudo o que você precisa para +Bônus',
    features: [
      'Licença para ministério',
      '200 Cards de Versículos',
      '150 Salmos para Refletir',
      'Kit Gincana Explosiva',
      'Acesso Vitálicio',
    ],
    isPopular: true,
    buttonText: 'Quero o Pacote Completo!',
    buttonVariant: 'default',
  },
];

export function Pricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" style={{ backgroundColor: '#EFF7FF' }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Escolha o pacote ideal para sua família</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto items-start">
          {tiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col rounded-2xl ${tier.isPopular ? 'border-primary border-2 shadow-2xl' : 'shadow-lg border'}`}>
              {tier.isPopular && (
                <div className="bg-primary text-primary-foreground text-sm font-semibold text-center py-1 rounded-t-lg -mt-px">
                  Mais Vendido
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold font-headline">{tier.name}</CardTitle>
                <div className='flex justify-center items-baseline gap-2'>
                    <p className="text-4xl font-extrabold">{tier.price}</p>
                    <p className="text-xl font-bold line-through text-muted-foreground">{tier.originalPrice}</p>
                </div>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={tier.buttonVariant as any} size="lg">
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
