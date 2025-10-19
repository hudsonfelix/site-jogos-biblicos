import { Check } from 'lucide-react';

const includedItems = [
  'Jogo da Memória Bíblico',
  'Super Trunfo da Fé',
  'Trilha Bíblica',
  'Caça ao Tesouro',
  'Painel de Dados',
  'Jogo das Palavras',
  'Verdadeiro ou Falso?',
  'Quem sou eu?',
  'Jogo dos 7 erros',
  'E muito mais!',
];

export function WhatsIncluded() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" style={{ backgroundColor: '#EFF7FF' }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            O que você vai receber no Clube dos Jogos Bíblicos
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            São mais de 30 jogos e atividades para usar no seu ministério e usar com seu filho para morar no coração dele de um jeito divertido e feliz em família.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {includedItems.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span className="text-lg text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
