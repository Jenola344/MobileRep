import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import type { Achievement } from '@/lib/types';
import { cn } from '@/lib/utils';

export function AchievementBadges({ achievements }: { achievements: Achievement[] }) {
  return (
    <TooltipProvider>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 text-center">
        {achievements.map((badge) => (
          <Tooltip key={badge.id}>
            <TooltipTrigger>
              <div className="flex flex-col items-center gap-2">
                <div className={cn('w-16 h-16 rounded-full bg-muted flex items-center justify-center', badge.color)}>
                  <badge.icon className="w-8 h-8 text-white" />
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-semibold">{badge.title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
