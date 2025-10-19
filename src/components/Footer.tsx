import { Button } from '@/components/ui/button';
import { Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-background border-t">
      <div className="container mx-auto py-12 px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-4">
          Garantia de 7 dias ou seu dinheiro de volta 100% do valor.
        </h2>
        <p className="max-w-3xl mx-auto text-muted-foreground mb-8">
          Você pode pagar no pix, cartão ou boleto.
        </p>
        <Button size="lg">Quero Ensinar e Já Brincar!</Button>
        <div className="flex justify-center gap-6 mt-8">
            <Mail className="h-6 w-6 text-muted-foreground"/>
            <Twitter className="h-6 w-6 text-muted-foreground"/>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto py-6 px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bíblia Divertida. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-primary">Termos de Serviço</a>
            <a href="#" className="hover:text-primary">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
