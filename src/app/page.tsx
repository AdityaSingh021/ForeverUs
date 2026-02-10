import { DateTimer } from '@/components/date-timer';
import { FinalMessage } from '@/components/final-message';
import { LoveDaysCounter } from '@/components/love-days-counter';
import { MemoryGame } from '@/components/memory-game';
import { PageFooter } from '@/components/page-footer';
import { PageHeader } from '@/components/page-header';
import { Timeline } from '@/components/timeline';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-body text-foreground">
      <PageHeader />
      <main className="flex-1 container mx-auto py-8 md:py-12 px-4">
        <div className="flex flex-col gap-16 md:gap-24">
          <section
            id="hero"
            className="text-center flex flex-col items-center gap-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline tracking-tight text-primary-foreground/90">
              Our Journey Together
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground font-body">
              A celebration of our love, our memories, and the beautiful story
              we&apos;re writing, day by day.
            </p>
            <LoveDaysCounter />
            <DateTimer />
          </section>

          <section id="memory-game">
            <MemoryGame />
          </section>

          <section id="timeline">
            <Timeline />
          </section>

          <section id="final-message">
            <FinalMessage />
          </section>
        </div>
      </main>
      <PageFooter />
    </div>
  );
}
