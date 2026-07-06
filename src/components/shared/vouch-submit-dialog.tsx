'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { reputation } from '@/lib/services/vanilla-reputation';
import { useToast } from '@/hooks/use-toast';

export function VouchSubmitDialog({
  open,
  onOpenChange,
  draft,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  draft: {
    vouchForName: string;
    skillCategory: string;
    specificSkill: string;
    rating: number;
    reason?: string;
  };
}) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onConfirm = async () => {
    if (!draft.vouchForName.trim()) {
      toast({ title: 'Missing person', description: 'Enter who you’re vouching for.' });
      return;
    }
    if (draft.rating <= 0) {
      toast({ title: 'Rating required', description: 'Select a confidence rating.' });
      return;
    }

    setLoading(true);
    try {
      await reputation.submitVouch({
        vouchForName: draft.vouchForName,
        skillCategory: draft.skillCategory,
        specificSkill: draft.specificSkill,
        rating: draft.rating,
        reason: draft.reason,
      });

      toast({ title: 'Vouch submitted', description: 'Stored locally with a demo Stellar attestation.' });
      onOpenChange(false);
    } catch (e: any) {
      toast({ variant: 'destructive', title: 'Could not submit vouch', description: e?.message ?? 'Unknown error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[520px]">
        <DialogHeader>
          <DialogTitle>Confirm your vouch</DialogTitle>
          <DialogDescription>
            You’re submitting a {draft.rating}★ confidence vouch for <span className="font-medium text-foreground">{draft.vouchForName}</span>.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          <div className="grid gap-1 text-sm">
            <div className="text-muted-foreground">Category</div>
            <div className="font-medium">{draft.skillCategory}</div>
          </div>
          <div className="grid gap-1 text-sm">
            <div className="text-muted-foreground">Skill</div>
            <div className="font-medium">{draft.specificSkill}</div>
          </div>
          {draft.reason ? (
            <div className="grid gap-1 text-sm">
              <div className="text-muted-foreground">Reason</div>
              <div className="font-medium">{draft.reason}</div>
            </div>
          ) : null}

          <div className="rounded-md border p-3 text-sm text-muted-foreground">
            <div className="font-medium text-foreground">Stellar attestation (demo)</div>
            The submission is stored locally and tagged with a demo ledger receipt ID.
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={loading}>
            Cancel
          </Button>
          <Button onClick={onConfirm} disabled={loading}>
            {loading ? 'Submitting...' : 'Submit vouch'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

