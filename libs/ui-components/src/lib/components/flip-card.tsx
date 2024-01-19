import React from 'react';
import { Card } from './card';
import { cn } from '@nofun/tailwind-util-class-names';

type FlipCardProps = React.ComponentPropsWithoutRef<typeof Card> & {
  flipped: boolean;
  speed?: 'fast' | 'normal' | 'slow';
  onFlipEnd?: () => void;
};
const FlipCard = React.forwardRef<React.ElementRef<typeof Card>, FlipCardProps>(
  (
    {
      className,
      children,
      flipped = false,
      speed = 'normal',
      onFlipEnd,
      ...props
    },
    ref
  ) => (
    <Card
      ref={ref}
      className={cn('cursor-pointer group perspective border-0', className)}
      {...props}
    >
      <div
        className={cn(
          'relative preserve-3d w-full h-full transition-transform rotate-y-0',
          {
            'rotate-y-180': flipped,
            'duration-500': speed === 'fast',
            'duration-700': speed === 'normal',
            'duration-1000': speed === 'slow',
          }
        )}
        onTransitionEnd={onFlipEnd}
      >
        {children}
      </div>
    </Card>
  )
);
FlipCard.displayName = 'FlipCard';

const FlipCardFront = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'absolute backface-hidden w-full h-full',
      'rounded-lg border',
      className
    )}
    {...props}
  />
));
FlipCardFront.displayName = 'FlipCardFront';

const FlipCardBack = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'absolute rotate-y-180 backface-hidden w-full h-full bg-background overflow-hidden',
      'rounded-lg border',
      className
    )}
    {...props}
  />
));
FlipCardBack.displayName = 'FlipCardBack';

export { FlipCard, FlipCardFront, FlipCardBack };
