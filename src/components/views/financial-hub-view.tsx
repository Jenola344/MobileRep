'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowDownLeft, ArrowUpRight, Banknote } from 'lucide-react';
import { mockTransactions } from '@/lib/data';
import { useRegion } from '@/contexts/region-context';
import { cn } from '@/lib/utils';

export function FinancialHubView() {
    const { region } = useRegion();

    const balances = [
        { currency: 'NGN', amount: 150000, symbol: '₦' },
        { currency: 'KES', amount: 25000, symbol: 'KSh' },
        { currency: 'ZAR', amount: 8000, symbol: 'R' },
    ];

    return (
        <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
                {balances.map(balance => (
                     <Card key={balance.currency}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{balance.currency} Balance</CardTitle>
                            <Banknote className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold font-headline">
                                {balance.symbol}{balance.amount.toLocaleString()}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Equivalent to {region.currency.symbol}{(balance.amount / 5).toLocaleString()}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Actions</CardTitle>
                    <div className="flex gap-4 pt-2">
                        <Button><ArrowUpRight className="mr-2 h-4 w-4" /> Send</Button>
                        <Button variant="outline"><ArrowDownLeft className="mr-2 h-4 w-4" /> Request</Button>
                    </div>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Payment History</CardTitle>
                    <CardDescription>
                        A record of your recent transactions on AfriRep.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockTransactions.map(tx => (
                                <TableRow key={tx.id}>
                                    <TableCell className="font-medium">{tx.date}</TableCell>
                                    <TableCell>{tx.description}</TableCell>
                                    <TableCell className={cn("text-right font-semibold", tx.amount > 0 ? "text-green-600" : "text-red-600")}>
                                        {tx.amount > 0 ? '+' : ''}
                                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: tx.currency }).format(tx.amount)}
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={
                                            tx.status === 'Completed' ? 'default' 
                                            : tx.status === 'Pending' ? 'secondary' 
                                            : 'destructive'
                                        }>
                                            {tx.status}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
