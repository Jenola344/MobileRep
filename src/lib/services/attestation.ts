import type { RepAttestation } from './types';

import type { AttestationPayload } from '@/../contracts/attestation_schema';

/**
 * Stellar attestation receipt creation.
 *
 * Contract selection: receiptId = Stellar transaction id (tx id).
 *
 * MVP (demo): we do NOT actually submit to Stellar yet.
 * We return a deterministic-ish placeholder tx id.
 *
 * Next step: replace this with real SHA-256 payloadHash + Horizon submission
 * and return the actual tx id.
 */
export function createStellarAttestation(input: {
  action: string;
  subjectId?: string;
}): RepAttestation {
  const receiptId = `demo-stellar-tx-${Date.now()}-${Math.random().toString(16).slice(2)}`;

  return {
    ledgerType: 'stellar',
    receiptId,
    createdAt: new Date().toISOString(),
  };
}


