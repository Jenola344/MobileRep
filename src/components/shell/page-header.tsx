'use client';

import * as React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export type PageHeaderChip = {
  label: string;
  tone?: 'neutral' | 'primary' | 'warning' | 'success' | 'danger';
};

export function PageHeader({
  title,
  description,
  chips = [],
}: {
  title: string;
  description?: string;
  chips?: PageHeaderChip[];
}) {
  return (
    <Card className="bg-card/50 border-hairline-strong/40">
      <div className="p-5 sm:p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-headline tracking-tight">{title}</h1>
              {description ? (
                <p className="mt-2 text-sm sm:text-[15px] text-muted-foreground max-w-3xl">
                  {description}
                </p>
              ) : null}
            </div>
            {chips.length ? (
              <div className="hidden sm:flex flex-wrap gap-2 justify-end">
                {chips.map((chip) => (
                  <Badge
                    key={chip.label}
                    variant="outline"
                    className="border-hairline-strong/40 text-muted-foreground"
                  >
                    {chip.label}
                  </Badge>
                ))}
              </div>
            ) : null}
          </div>

          {chips.length ? (
            <div className="sm:hidden flex flex-wrap gap-2">
              {chips.map((chip) => (
                <Badge
                  key={chip.label}
                  variant="outline"
                  className="border-hairline-strong/40 text-muted-foreground"
                >
                  {chip.label}
                </Badge>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

