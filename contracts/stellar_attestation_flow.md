# Stellar attestation flow (receiptId = Stellar transaction id)

This document defines the on-ledger embedding rules you must follow so clients can verify receipts.

## Contract decision
You selected: **receiptId = Stellar transaction id**.

Meaning:
- `RepAttestation.receiptId` MUST be set to the hash of the Stellar transaction that submitted the attestation.
- Verification requires fetching the transaction by tx id and checking that the embedded hash matches the attestation payload.

## Embedding rule (recommended for MVP)
1. Compute a deterministic `payloadHash` for the attested payload.
2. Submit a Stellar transaction from an `ATTESTER_ACCOUNT`.
3. Encode `payloadHash` into the transaction `memo`.

Memo constraints:
- Stellar memo text is limited in size.
- Use either:
  - full hash if possible, or
  - first 16–32 bytes as hex prefix and store the full hash off-chain (backend) keyed by tx id.

Recommended memo text format:
`MobileRepAttest:<payloadHashPrefix>`

## Transaction shape
- Use a normal payment-like transaction flow with memo.
- Optionally, include a small amount transfer (or use account sequence and no-op ops depending on your issuer rules).

## Verification algorithm
Given:
- `receiptId` (tx id)
- the user action (vouch/application/etc)

Steps:
1. Recompute `payloadHash` from the exact canonical payload schema.
2. Fetch transaction details from Horizon (Stellar node API).
3. Read memo from the transaction.
4. Check memo’s embedded prefix/hash matches the recomputed value.

If memo matches, attestation is verified.

## What to implement next in your repo
Replace `src/lib/services/attestation.ts` demo receipt with:
- canonical payload hashing
- Stellar submission
- returning tx id as `receiptId`

Your current local service (`src/lib/services/local-reputation-service.ts`) already calls `createStellarAttestation` for vouches/applications; that’s the correct integration seam.

