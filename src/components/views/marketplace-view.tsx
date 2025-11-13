'use client';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockOpportunities } from '@/lib/data';
import { useRegion } from '@/contexts/region-context';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Zap } from 'lucide-react';

export function MarketplaceView() {
    const { region, availableRegions } = useRegion();

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Opportunity Marketplace</CardTitle>
                    <CardDescription>
                        Access exclusive opportunities based on your reputation. Your RepScore is your key.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-4">
                        <p className="text-sm font-medium">Filter by region:</p>
                        <Select defaultValue={region.name}>
                            <SelectTrigger className="w-[200px]">
                                <SelectValue placeholder="Select region" />
                            </SelectTrigger>
                            <SelectContent>
                                {availableRegions.map(r => (
                                    <SelectItem key={r.name} value={r.name}>
                                        {r.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {mockOpportunities.map(opp => (
                    <Card key={opp.id} className="flex flex-col transition-all duration-300 hover:scale-[1.03] hover:shadow-xl bg-card/50">
                        <CardHeader className="p-0">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={opp.imageUrl}
                                    alt={opp.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-lg"
                                    data-ai-hint={opp.imageHint}
                                />
                            </div>
                            <div className="p-6">
                                <Badge variant="outline" className="mb-2">
                                    <Zap className="mr-1 h-3 w-3 text-yellow-500 fill-yellow-500" /> RepScore {opp.repScoreRequired}+
                                </Badge>
                                <CardTitle className="font-headline">{opp.title}</CardTitle>
                                <CardDescription>{opp.company} &middot; {opp.location}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-lg font-semibold text-primary">{opp.earnings}</p>
                            <p className="text-sm text-muted-foreground">Estimated earnings</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">One-Tap Apply</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
