import { timelineData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Calendar, Pin } from 'lucide-react';

export function Timeline() {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <h2 className="text-3xl md:text-4xl font-headline text-foreground">Our Story So Far</h2>
      <p className="max-w-2xl text-lg text-muted-foreground font-body mb-8">
        A few of the moments that built our world, one memory at a time.
      </p>
      <div className="relative w-full max-w-4xl">
        {/* The vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-accent/30 -translate-x-1/2"></div>

        {timelineData.map((item, index) => {
          const image = PlaceHolderImages.find((img) => img.id === item.imageId);
          const isOdd = index % 2 !== 0;

          return (
            <div
              key={item.id}
              className={`mb-8 flex justify-between items-center w-full ${isOdd ? 'flex-row-reverse' : ''}`}
            >
              <div className="w-5/12"></div>
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full text-primary-foreground shadow-md">
                <Pin className="w-5 h-5" />
              </div>
              <div className="w-5/12">
                <div
                  className={`bg-card p-4 rounded-lg shadow-lg animate-in fade-in duration-1000 ${
                    isOdd ? 'slide-in-from-right-10' : 'slide-in-from-left-10'
                  }`}
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
                >
                  {image && (
                    <div className="relative w-full aspect-[2/3] mb-4 rounded-md overflow-hidden group">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="
                          object-cover
                          transition-transform
                          duration-500
                          ease-out
                          group-hover:scale-110
                        "
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <p className="text-left font-body text-foreground/90">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
