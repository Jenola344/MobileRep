import type { AttestationPayload } from './attestation_schema';
import { attestationPayloadHash } from './attestation_schema';

/**
 * Verification when `receiptId` is the Stellar transaction id.
 *
 * This function is a contract verifier stub.
 * Your submission service must provide a real implementation that fetches Horizon tx details.
 */
export type StellarTransactionLike = {
  memo?: string; // horizon transaction memo (string)
};

export async function verifyStellarAttestation(params: {
  receiptId: string; // Stellar tx id
  payload: AttestationPayload;
  fetchTransactionById: (txId: string) => Promise<StellarTransactionLike>;
}): Promise<boolean> {
  const expectedPayloadHash = await (async () => {
    // In this repo’s contract docs this is a placeholder. Replace with real SHA-256.
    return attestationPayloadHash(params.payload);
  })();

  const tx = await params.fetchTransactionById(params.receiptId);
  const memo = tx.memo ?? '';

  // Must match whatever embedding format you choose in stellar submission.
  // Here we only check prefix format.
  // Example: memo = `MobileRepAttest:<hashPrefix>`
  const prefix = expectedPayloadHash.slice(0, 16);
  return memo.includes(`MobileRepAttest:${prefix}`);
}

