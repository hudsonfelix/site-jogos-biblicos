import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ShieldCheck } from 'lucide-react';

const faqs = [
  {
    question: 'Qual o preço? Posso parcelar?',
    answer: 'O acesso completo custa apenas R$29,90 em um pagamento único. Aceitamos PIX, boleto e cartão de crédito. Não há mensalidades ou taxas escondidas.',
  },
  {
    question: 'Como vou receber o acesso?',
    answer: 'O acesso é 100% digital e imediato. Após a confirmação do pagamento, você receberá um e-mail com um link exclusivo para baixar todo o material em formato PDF, pronto para imprimir.',
  },
  {
    question: 'Posso usar na minha igreja ou escola?',
    answer: 'Sim! A licença do Pacote Completo permite o uso em pequenos grupos, células, classes de escola dominical e eventos não-comerciais. Para uso em larga escala, por favor, entre em contato conosco.',
  },
];

export function GuaranteeFaq() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <ShieldCheck className="h-12 w-12 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter font-headline">Sua Satisfação ou seu Dinheiro de Volta</h2>
            </div>
            <p className="text-muted-foreground">
              Risco zero! Você tem <strong>7 dias completos</strong> para explorar todo o material do Clube dos Jogos Bíblicos. Se por qualquer motivo você não achar que valeu a pena, basta nos enviar um e-mail e nós devolveremos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
            <div className="p-6 bg-card rounded-lg border">
                <p className="font-semibold">Sua compra é 100% segura e protegida.</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-headline">Perguntas Frequentes</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
