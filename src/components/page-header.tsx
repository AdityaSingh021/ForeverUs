import { Heart } from 'lucide-react';

export function PageHeader() {
  return (
    <header className="py-6 bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b border-black/5">
      <div className="container mx-auto flex justify-center items-center gap-4">
        <Heart className="text-accent h-6 w-6 md:h-8 md:w-8" />
        <h1 className="text-4xl md:text-5xl font-headline text-center text-primary-foreground/90">
          Forever Us
        </h1>
        <Heart className="text-accent h-6 w-6 md:h-8 md:w-8" />
      </div>
    </header>
  );
}
