import { BookHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2" prefetch={false}>
          <BookHeart className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold tracking-tight text-foreground font-headline">
            Bíblia Divertida
          </span>
        </a>
        <nav className="hidden md:flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground">Início</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">O que vou receber</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Depoimentos</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Garantia</a>
        </nav>
        <Button>Quero Comprar Agora</Button>
      </div>
    </header>
  );
}
