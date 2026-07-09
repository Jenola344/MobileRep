export type AttestationPayload =
  | {
      action: 'vouch.submit';
      subjectId?: string;
      vouchForName: string;
      skillCategory: string;
      specificSkill: string;
      rating: number;
      reason?: string;
    }
  | {
      action: 'job.apply';
      subjectId?: string;
      opportunityId: string;
      message: string;
    };

/**
 * Canonical JSON encoding so the same payload always hashes identically.
 * Important: treat undefined as missing keys (JSON.stringify does not include undefined).
 */
function canonicalize(value: unknown): unknown {
  if (value === null) return null;
  if (value === undefined) return undefined;

  if (Array.isArray(value)) return value.map(canonicalize);

  if (typeof value === 'object') {
    const obj = value as Record<string, unknown>;
    const keys = Object.keys(obj).sort();
    const out: Record<string, unknown> = {};
    for (const k of keys) {
      out[k] = canonicalize(obj[k]);
    }
    return out;
  }

  return value;
}

export function attestationPayloadHash(payload: AttestationPayload): string {
  // NOTE: This uses WebCrypto so it can run in browser too.
  // In Node/server you can swap to crypto.createHash('sha256').
  // This function is synchronous in signature; for WebCrypto you would use async.
  // For simplicity in this repo contract docs, treat this as the intended algorithm.
  // Implementation in app should compute SHA-256 hex digest.

  // Placeholder for documentation contract.
  // Replace with real SHA-256 hex digest code in your submission service.
  return 'REPLACE_WITH_SHA256_HEX_OF_CANONICAL_JSON';
}

