import type { RepAttestation } from './types';

export function createStellarAttestation(input: {
  action: string;
  subjectId?: string;
}): RepAttestation {
  // Demo receipt id: deterministic-ish but not cryptographic.
  // Replace with a real hash + signer + ledger submission later.
  const receiptId = `demo-rcpt-${Date.now()}-${Math.random().toString(16).slice(2)}`;

  return {
    ledgerType: 'stellar',
    receiptId,
    createdAt: new Date().toISOString(),
  };
}

