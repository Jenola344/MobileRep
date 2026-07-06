'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { VouchDraft } from './types';
import { localReputationService } from './local-reputation-service';

export function useMyVouches() {
  return useQuery({
    queryKey: ['vouches', 'mine'],
    queryFn: () => localReputationService.listMyVouches(),
  });
}

export function useSubmitVouch() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (draft: VouchDraft) => localReputationService.submitVouch(draft),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['vouches', 'mine'] });
    },
  });
}

export function useMyApplications() {
  return useQuery({
    queryKey: ['applications', 'mine'],
    queryFn: () => localReputationService.listMyApplications(),
  });
}

export function useSubmitApplication() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: { opportunityId: string; message: string }) =>
      localReputationService.submitApplication(input),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['applications', 'mine'] });
    },
  });
}

