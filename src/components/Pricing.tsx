import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Pacote Simples',
    price: 'R$19,90',
    description: 'Ideal para experimentar a diversão.',
    features: [
      'Acesso a 10 jogos selecionados',
      'Quizzes básicos',
    ],
    isPopular: false,
  },
  {
    name: 'Pacote Completo',
    price: 'R$29,90',
    description: 'A experiência completa para transformar sua família.',
    features: [
      'Acesso a TODOS os +30 jogos',
      'Todos os Quizzes e Desafios',
      'Kit Olimpíadas Bíblicas',
      '200 Cards de Versículos',
      '150 Salmos para Refletir',
      'Acesso vitalício e atualizações',
    ],
    isPopular: true,
  },
];

export function Pricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Escolha o Plano Perfeito para Sua Família</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
            Acesso imediato a um mundo de aprendizado e diversão. Pagamento único, alegria para sempre.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto items-start">
          {tiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col ${tier.isPopular ? 'border-primary shadow-2xl scale-105' : 'shadow-lg'}`}>
              {tier.isPopular && (
                <div className="bg-primary text-primary-foreground text-sm font-semibold text-center py-1 rounded-t-lg">
                  Mais Vendido
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold font-headline">{tier.name}</CardTitle>
                <p className="text-4xl font-extrabold">{tier.price}</p>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={tier.isPopular ? 'default' : 'outline'}>
                  {tier.isPopular ? 'Quero o Pacote Completo' : 'Começar com o Simples'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Garantia incondicional de 7 dias. Compre e acesse todo o material digitalmente para download imediato.
        </p>
      </div>
    </section>
  );
}
