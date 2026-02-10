'use client';

import { useState, useEffect } from 'react';
import { differenceInDays } from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users } from 'lucide-react';

export function LoveDaysCounter() {
  const [days, setDays] = useState({ hisDays: 0, herDays: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const hisStartDate = new Date('2024-03-17');
    const herStartDate = new Date('2025-02-11');
    const today = new Date();

    const hisDaysCount = differenceInDays(today, hisStartDate);
    const herDaysCount = differenceInDays(today, herStartDate);

    setDays({
      hisDays: hisDaysCount > 0 ? hisDaysCount : 0,
      herDays: herDaysCount > 0 ? herDaysCount : 0,
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6 flex flex-col items-center text-center gap-2">
          <Heart className="w-8 h-8 text-accent" />
          <p className="text-muted-foreground font-body">I started loving you on March 17, 2024</p>
          <div className="text-4xl font-headline font-bold text-primary">
            {isClient ? days.hisDays : '...'}
          </div>
          <p className="font-semibold text-foreground/80">Days of Loving You</p>
        </CardContent>
      </Card>
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6 flex flex-col items-center text-center gap-2">
          <Users className="w-8 h-8 text-accent" />
          <p className="text-muted-foreground font-body">We started our journey on Feb 11, 2025</p>
          <div className="text-4xl font-headline font-bold text-primary">
            {isClient ? days.herDays : '...'}
          </div>
          <p className="font-semibold text-foreground/80">Days of Being Us</p>
        </CardContent>
      </Card>
    </div>
  );
}
