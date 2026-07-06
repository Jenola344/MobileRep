import type { Opportunity, SavingsCircle } from '@/lib/types';

export type RepAttestation = {
  ledgerType: 'stellar';
  // In this demo, we store an attestation receipt placeholder.
  // Later this becomes a hash + ledger transaction id.
  receiptId: string;
  createdAt: string;
};

export type VouchDraft = {
  vouchForName: string;
  skillCategory: string;
  specificSkill: string;
  rating: number;
  reason?: string;
  evidenceFile?: File | null;
};

export type VouchRecord = {
  id: string;
  fromUserId: string;
  to: {
    name: string;
  };
  skillCategory: string;
  specificSkill: string;
  rating: number;
  reason?: string;
  attestation?: RepAttestation;
  createdAt: string;
};

export type ApplicationRecord = {
  id: string;
  applicantUserId: string;
  opportunityId: Opportunity['id'];
  message: string;
  attestation?: RepAttestation;
  status: 'Submitted' | 'Shortlisted' | 'Rejected' | 'Accepted';
  createdAt: string;
};

export type CircleVoteRecord = {
  id: string;
  circleId: SavingsCircle['id'];
  voterUserId: string;
  proposalId: string;
  vote: 'For' | 'Against';
  createdAt: string;
  attestation?: RepAttestation;
};

