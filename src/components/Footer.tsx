import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="w-full bg-card border-t">
      <div className="container mx-auto py-12 px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-4">
          Pronto para transformar a forma como sua família interage com a Bíblia?
        </h2>
        <p className="max-w-3xl mx-auto text-muted-foreground mb-8">
          Junte-se a centenas de famílias e comece a criar memórias inesquecíveis hoje mesmo.
        </p>
        <Button size="lg">Quero começar agora!</Button>
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
