'use client';

import { useState, useEffect } from 'react';
import { gameData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Gift, CheckCircle, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MemoryGame() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (showFeedback) {
      const timer = setTimeout(() => {
        setIsAnimating(true);
        setTimeout(() => {
          if (currentQuestionIndex < gameData.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setSelectedOption(null);
            setShowFeedback(false);
          } else {
            setGameFinished(true);
          }
          setIsAnimating(false);
        }, 500); // Animation duration
      }, 2500); // Time to show feedback
      return () => clearTimeout(timer);
    }
  }, [showFeedback, currentQuestionIndex]);

  const handleOptionClick = (optionIndex: number) => {
    if (showFeedback) return;
    setSelectedOption(optionIndex);
    setShowFeedback(true);
  };

  const currentQuestion = gameData[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center text-center gap-4">
      <h2 className="text-3xl md:text-4xl font-headline text-foreground">A Little Memory Game</h2>
      <Card className="w-full max-w-2xl bg-card/80 backdrop-blur-sm shadow-lg border-accent/20 transition-all duration-500"
            style={{ minHeight: '350px' }}>
        <div className={cn(
            'transition-opacity duration-500',
            isAnimating ? 'opacity-0' : 'opacity-100'
          )}>
          {!gameFinished ? (
            <>
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center justify-center gap-2">
                  <HelpCircle className="text-primary"/>
                  Question {currentQuestionIndex + 1}
                </CardTitle>
                <CardDescription className="font-body text-lg pt-4">
                  {currentQuestion.question}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                {!showFeedback ? (
                  currentQuestion.options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className="w-full text-base h-auto py-3 justify-start"
                      onClick={() => handleOptionClick(index)}
                    >
                      {option}
                    </Button>
                  ))
                ) : (
                  <div className="p-4 rounded-md bg-secondary text-secondary-foreground text-center animate-in fade-in duration-500">
                    <p className="font-body italic text-lg">
                      {currentQuestion.afterClickMessage}
                    </p>
                  </div>
                )}
              </CardContent>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-8 gap-4 animate-in fade-in duration-1000">
                <Gift className="w-16 h-16 text-primary" />
                <h3 className="text-2xl font-headline">There was never a right answer.</h3>
                <p className="text-lg text-muted-foreground font-body">
                I just wanted to remember with you.
                </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
