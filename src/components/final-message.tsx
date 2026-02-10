import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export function FinalMessage() {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <h2 className="text-3xl md:text-4xl font-headline text-primary-foreground/90">
        My Unspoken Vow
      </h2>
      <Card className="w-full max-w-3xl bg-card/80 backdrop-blur-sm shadow-lg border-accent/20">
        <CardContent className="p-8 relative">
          <Quote className="absolute top-4 left-4 h-8 w-8 text-accent/50" />
          <div className="flex flex-col items-center gap-4 mt-8">
            <p className="text-lg md:text-xl font-body italic text-foreground/90">
              There are parts of me that only exist because of you. You are the
              calm in my chaos, the silence in my noise, and the love that made
              me whole. Before you, I was a story half-told. With you, I am home.
              I am not one without you.
            </p>
          </div>
          <Quote className="absolute bottom-4 right-4 h-8 w-8 text-accent/50 rotate-180" />
        </CardContent>
      </Card>
    </div>
  );
}
