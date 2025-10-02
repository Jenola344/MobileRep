'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Handshake, Briefcase, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockUsers, mockAchievements, mockActivities } from '@/lib/data';
import { AchievementBadges } from '../dashboard/achievement-badges';
import { ReputationScore } from '../dashboard/reputation-score';
import { useRegion } from '@/contexts/region-context';

export function DashboardView() {
    const { region } = useRegion();
    const currentUser = mockUsers[0];

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="lg:col-span-1 flex flex-col items-center justify-center text-center p-6">
                <Avatar className="w-24 h-24 mb-4 border-4 border-primary">
                    <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} data-ai-hint="african person" />
                    <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold font-headline">{currentUser.name}</h2>
                <p className="text-muted-foreground">{currentUser.region}</p>
                <div className="mt-4">
                    <ReputationScore score={currentUser.repScore} />
                </div>
            </Card>

            <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                    <CardDescription>Badges earned from your activity on AfriRep.</CardDescription>
                </CardHeader>
                <CardContent>
                    <AchievementBadges achievements={mockAchievements} />
                </CardContent>
            </Card>
            
            <Card className="lg:col-span-3">
                 <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button size="lg" variant="outline"><UserPlus className="mr-2" /> Get Vouched</Button>
                    <Button size="lg"><Handshake className="mr-2" /> Vouch Someone</Button>
                    <Button size="lg" variant="secondary"><Briefcase className="mr-2" /> Find Work</Button>
                </CardContent>
            </Card>

            <Card className="lg:col-span-3">
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Updates from your network.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {mockActivities.map(activity => (
                             <div key={activity.id} className="flex items-center gap-4">
                                <Avatar>
                                    <AvatarImage src={activity.user.avatarUrl} alt={activity.user.name} />
                                    <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-grow">
                                    <p className="text-sm">
                                        <span className="font-semibold">{activity.user.name}</span> {activity.description}
                                    </p>
                                    <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
