'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const anniversaryDate = new Date('2025-02-11T00:00:00');

export function DateTimer() {
  const [isClient, setIsClient] = useState(false);
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isFuture, setIsFuture] = useState(true);

  useEffect(() => {
    setIsClient(true);
    const updateTimer = () => {
      const now = new Date();
      const difference = anniversaryDate.getTime() - now.getTime();

      if (difference > 0) {
        setIsFuture(true);
        setTime({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setIsFuture(false);
        const pastDifference = -difference;
        setTime({
          days: Math.floor(pastDifference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((pastDifference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((pastDifference / 1000 / 60) % 60),
          seconds: Math.floor((pastDifference / 1000) % 60),
        });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <span className="text-4xl md:text-5xl font-headline font-bold text-primary">
        {isClient ? value.toString().padStart(2, '0') : '00'}
      </span>
      <span className="text-xs text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <Card className="w-full max-w-2xl bg-card/80 backdrop-blur-sm shadow-lg border-accent/20">
      <CardContent className="p-6">
        <h3 className="text-center text-lg font-headline text-foreground/80 mb-4">
          {isClient && isFuture
            ? "Our forever begins in..."
            : "We've been us for..."}
        </h3>
        <div className="flex justify-around">
          <TimeUnit value={time.days} label="Days" />
          <TimeUnit value={time.hours} label="Hours" />
          <TimeUnit value={time.minutes} label="Minutes" />
          <TimeUnit value={time.seconds} label="Seconds" />
        </div>
      </CardContent>
    </Card>
  );
}
