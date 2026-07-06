'use client';

import { useMemo, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Opportunity } from '@/lib/types';

import { reputation } from '@/lib/services/vanilla-reputation';
import { useToast } from '@/hooks/use-toast';

export function MarketplaceApplyDialog({
  opportunity,
  trigger,
}: {
  opportunity: Opportunity;
  trigger: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const minScoreNote = useMemo(() => {
    return `Requires RepScore ${opportunity.repScoreRequired}+.`;
  }, [opportunity.repScoreRequired]);

  const onSubmit = async () => {
    const msg = message.trim();
    if (!msg) {
      toast({ title: 'Message required', description: 'Add a short message to apply.' });
      return;
    }

    setLoading(true);
    try {
      await reputation.submitApplication({ opportunityId: opportunity.id, message: msg });
      toast({ title: 'Application submitted', description: 'Your application is now recorded with a demo Stellar attestation.' });
      setOpen(false);
      setMessage('');
    } catch (e: any) {
      toast({ variant: 'destructive', title: 'Could not submit application', description: e?.message ?? 'Unknown error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[520px]">
        <DialogHeader>
          <DialogTitle>Apply: {opportunity.title}</DialogTitle>
          <DialogDescription>
            {opportunity.company} · {opportunity.location}. {minScoreNote}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="apply-message">Application message</Label>
            <Textarea
              id="apply-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Explain why you're a strong fit (2-3 lines)."
              rows={5}
            />
          </div>

          <div className="rounded-md border p-3 text-sm text-muted-foreground">
            <div className="font-medium text-foreground">Stellar attestation (demo)</div>
            Your application will be stored locally and marked with a demo ledger receipt ID.
          </div>
        </div>

        <DialogFooter>
          <Button onClick={onSubmit} disabled={loading}>
            {loading ? 'Submitting...' : 'Submit application'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
