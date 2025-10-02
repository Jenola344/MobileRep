'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const MAX_SCORE = 1000;
const COLORS = ['hsl(var(--primary))', 'hsl(var(--border))'];

export function ReputationScore({ score }: { score: number }) {
  const data = [
    { name: 'Score', value: score },
    { name: 'Remaining', value: MAX_SCORE - score },
  ];

  return (
    <div style={{ width: '100%', height: 160 }} className="relative">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
            paddingAngle={0}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold font-headline text-primary">{score}</span>
        <span className="text-sm text-muted-foreground">RepScore</span>
      </div>
    </div>
  );
}
