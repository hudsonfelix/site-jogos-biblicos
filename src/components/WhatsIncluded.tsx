import { Package, BookHeart, Music, Trophy, CheckCircle } from 'lucide-react';

const includedItems = [
  {
    icon: <Package className="h-10 w-10 text-accent" />,
    title: '>30 Jogos Prontos para Imprimir',
    description: 'Variedade para nunca cair na rotina.',
    benefit: 'Mais tempo de qualidade juntos',
  },
  {
    icon: <BookHeart className="h-10 w-10 text-accent" />,
    title: '200 Versículos Reveladores',
    description: 'Cards para memorização guiada.',
    benefit: 'Fortalece a fé e a memória',
  },
  {
    icon: <Music className="h-10 w-10 text-accent" />,
    title: '150 Salmos para Refletir',
    description: 'Material de apoio para meditação em família.',
    benefit: 'Momentos de paz e conexão espiritual',
  },
  {
    icon: <Trophy className="h-10 w-10 text-accent" />,
    title: 'Olimpíadas Bíblicas',
    description: 'Um kit completo para eventos e gincanas.',
    benefit: 'Integração divertida em grupos e células',
  },
];

export function WhatsIncluded() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Um Tesouro de Recursos na Sua Casa
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            O Pacote Completo do Clube dos Jogos Bíblicos é mais que um conjunto de jogos, é um kit de ferramentas para a vida espiritual da sua família.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2">
          {includedItems.map((item) => (
            <div key={item.title} className="flex items-start gap-6">
              <div className="flex-shrink-0">{item.icon}</div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold font-headline">{item.title}</h3>
                <p className="mt-1 text-muted-foreground">{item.description}</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-primary font-semibold">
                  <CheckCircle className="h-4 w-4" />
                  <span>{item.benefit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
