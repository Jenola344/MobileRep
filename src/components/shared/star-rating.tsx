'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  count?: number;
  value: number;
  onChange: (value: number) => void;
  size?: number;
  className?: string;
}

export function StarRating({ count = 5, value, onChange, size = 24, className }: StarRatingProps) {
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

  const stars = Array(count).fill(0);

  const handleClick = (value: number) => {
    onChange(value);
  };

  const handleMouseOver = (newHoverValue: number) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {stars.map((_, index) => {
        const ratingValue = index + 1;
        return (
          <Star
            key={index}
            size={size}
            onClick={() => handleClick(ratingValue)}
            onMouseOver={() => handleMouseOver(ratingValue)}
            onMouseLeave={handleMouseLeave}
            className={cn(
              'cursor-pointer transition-colors',
              (hoverValue || value) >= ratingValue ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            )}
          />
        );
      })}
    </div>
  );
}
