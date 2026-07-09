# MobileRep “Contract” - Stellar attestation protocol

Stellar doesn’t support EVM-style smart contracts. In Stellar, “contracts” are implemented as:
- deterministic data schemas (what exactly is being attested),
- how to embed the attestation into a Stellar transaction (memo / metadata), and
- how to verify receipts.

This folder defines the **protocol contract** your app should follow when moving from the current demo receipts to real Stellar transaction receipts.

## How to integrate with this repo
Current code:
- `src/lib/services/attestation.ts` returns a `demo-rcpt-*` receipt.

Next step:
- replace that with a real Stellar submission.
- set `RepAttestation.receiptId` to a **Stellar transaction id** (tx hash), since you selected option `2`.

## Verification model (receiptId = tx id)
To verify an attestation:
1. recompute the canonical attestation payload hash,
2. fetch the Stellar transaction by tx id,
3. confirm the memo/embedded hash matches the recomputed payload hash.

## Required inputs for the real on-ledger implementation
When implementing the actual Stellar submission you will need:
- Stellar network: testnet or public
- an attester account (server keypair) or a wallet signing flow
- how you embed the payload hash (memo text, shortened memo, or data-backed embedding)

