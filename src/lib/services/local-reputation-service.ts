'use client';

import { createLocalStorageStore } from '@/lib/db/local-store';
import type { ApplicationRecord, VouchRecord } from './types';
import { createStellarAttestation } from './attestation';
import type { VouchDraft } from './types';

// For demo purposes we assume a single current user.
const CURRENT_USER_ID = 'demo-user-1';

const vouchStore = createLocalStorageStore<VouchRecord>({
  key: 'mobileRep:vouches:v1',
  seed: [],
});

const applicationStore = createLocalStorageStore<ApplicationRecord>({
  key: 'mobileRep:applications:v1',
  seed: [],
});

export const localReputationService = {
  async listMyVouches(): Promise<VouchRecord[]> {
    return vouchStore.list();
  },

  async submitVouch(draft: VouchDraft): Promise<VouchRecord> {
    const now = new Date().toISOString();
    const record: VouchRecord = {
      id: `vouch_${Date.now()}_${Math.random().toString(16).slice(2)}`,
      fromUserId: CURRENT_USER_ID,
      to: { name: draft.vouchForName.trim() },
      skillCategory: draft.skillCategory,
      specificSkill: draft.specificSkill,
      rating: draft.rating,
      reason: draft.reason?.trim() || undefined,
      // File upload is not implemented; we attach nothing for now.
      attestation: createStellarAttestation({
        action: 'vouch.submit',
        subjectId: draft.vouchForName,
      }),
      createdAt: now,
    };

    vouchStore.upsert(record);
    return record;
  },

  async listMyApplications(): Promise<ApplicationRecord[]> {
    return applicationStore.list();
  },

  async submitApplication(input: {
    opportunityId: string;
    message: string;
  }): Promise<ApplicationRecord> {
    const now = new Date().toISOString();
    const record: ApplicationRecord = {
      id: `app_${Date.now()}_${Math.random().toString(16).slice(2)}`,
      applicantUserId: CURRENT_USER_ID,
      opportunityId: input.opportunityId,
      message: input.message.trim(),
      attestation: createStellarAttestation({
        action: 'job.apply',
        subjectId: input.opportunityId,
      }),
      status: 'Submitted',
      createdAt: now,
    };

    applicationStore.upsert(record);
    return record;
  },

  // helpers for future expansion
  async _clearDemoData() {
    vouchStore.clear();
    applicationStore.clear();
  },
};

