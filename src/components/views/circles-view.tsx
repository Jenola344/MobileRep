'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { mockSavingsCircles, mockProposal } from '@/lib/data';
import { useRegion } from '@/contexts/region-context';
import { Users, Zap, Vote } from 'lucide-react';
import { Badge } from '../ui/badge';

export function CirclesView() {
    const { region } = useRegion();

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Discover Inner Circles</CardTitle>
                    <CardDescription>
                        Join reputation-based communities. In {region.name}, these are often called <span className="font-semibold text-primary">{region.terminology.savingsCircle}</span>.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {mockSavingsCircles.map(circle => (
                        <Card key={circle.id} className="transition-all duration-300 hover:scale-[1.03] hover:shadow-xl bg-card/50">
                            <CardHeader>
                                <CardTitle className="font-headline">{circle.name}</CardTitle>
                                <Badge variant="outline" className="w-fit">
                                    <Zap className="mr-1 h-3 w-3 text-yellow-500 fill-yellow-500" /> RepScore {circle.repScoreMin}+
                                </Badge>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Users className="h-4 w-4" />
                                    <span>{circle.members} members</span>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">
                                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: circle.currency, minimumFractionDigits: 0 }).format(circle.totalPot)}
                                    </p>
                                    <p className="text-xs text-muted-foreground">Total Pot</p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Request to Join</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Vote className="h-5 w-5" /> Active Proposal</CardTitle>
                    <CardDescription>Participate in transparent governance for the 'Lagos Tech Innovators' circle.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <h3 className="font-semibold">{mockProposal.title}</h3>
                    <p className="text-sm text-muted-foreground">{mockProposal.description}</p>
                    <div>
                        <div className="mb-2 flex justify-between text-sm font-medium">
                            <span>For: {mockProposal.votesFor}%</span>
                            <span>Against: {mockProposal.votesAgainst}%</span>
                        </div>
                        <Progress value={mockProposal.votesFor} className="h-3" />
                    </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                    <Button className="w-full" variant="secondary">Vote For</Button>
                    <Button variant="destructive" className="w-full">Vote Against</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
