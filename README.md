# Stellar MobileRep (Blockchain-Ready Reputation Marketplace)

## Overview
MobileRep is a reputation-based job marketplace and community savings platform connecting skilled workers with opportunities—while building verifiable work history.

This version is being positioned as a **Stellar-grade product**: trust, verifiability, accountability, and auditability—ready for blockchain-backed credentials and immutable histories (without requiring users to fully understand the technology).

> Note: The UI currently runs with mocked data. The architecture is intended to be wired to Firebase/Firestore and, optionally, blockchain/ledger-backed attestations.

---

## What This Does
MobileRep solves three problems for informal workers and service providers:

1. **Job Marketplace**: Find work opportunities and connect with clients
2. **Skill Verification**: Build reputation through peer vouching and completed work
3. **Ajo Contributions**: Participate in rotating savings groups with trusted community members

The platform is designed for mobile-first users in Nigeria (and across Africa), particularly in the gig economy, skilled trades, and service sectors where formal employment records are uncommon.

---

## Stellar Trust Model (How Credibility Works)
### Vouching & Reputation
The vouching system builds credibility through **accountable endorsements**.

- **Skill Vouches**: Other users verify your claimed skills
- **Work Vouches**: Employers vouch for completed jobs
- **Community Vouches**: Character references from known contacts
- **Reputation Score**: Aggregated signals visible on your profile

Unlike typical review systems that only collect star ratings, vouches are designed to require the voucher to stake their own credibility—reducing fake endorsements and increasing accountability.

### Verifiable History (Blockchain-Ready)
The product is structured so that key events can later be anchored to an immutable ledger:
- vouch submissions
- job completion attestations
- circle contribution milestones
- dispute outcomes

This enables:
- audit trails
- tamper-evident records
- portable credentials across services

---

## Ajo Contributions (Esusu / Tontine / Stokvel)
Digital implementation of rotating savings groups.

**How it works**
1. Create or join a group (typically 5–20 members)
2. Set contribution amount and rotation schedule
3. Each cycle, one member receives the full pot
4. System tracks contributions and payouts
5. Members vouch for each other before joining

**Key features**
- Automated collection and distribution
- Transparent transaction history
- Default tracking (members who don't pay)
- Reputation integration
- SMS reminders (future/optional)

---

## How to Use
### For Workers
1. Sign up (phone number / email)
2. Complete your profile (skills, experience, location)
3. Request vouches from people who know your work
4. Wait for approval (e.g., minimum vouches required to unlock full features)

Finding work
- Browse opportunities
- Apply with a short message explaining fit
- When selected, complete the job and request vouch/verification

---

### For Employers
1. Create an account and verify identity
2. Post a job (description, budget, timeline)
3. Review applications (profiles + vouches)
4. Select a candidate and agree on terms
5. Mark job complete and release payment
6. Submit a work vouch

---

### For Ajo Groups
1. Navigate to Ajo/Circles
2. Set group name, contribution amount, and schedule
3. Define rotation order (random/manual)
4. Invite members
5. Group activates when minimum members join

Group participation
- Pay on time
- Receive pot when your turn comes
- Continue until rotation completes

---

## Stellar-grade Product Requirements (Roadmap)
- **Immutable credential anchors** for vouches/job completions
- **Fraud-resistant reputation signals**
- **Dispute resolution workflows** with auditable outcomes
- **Multi-region UI adaptation** (linguistic + cultural)
- **Offline-first** browsing and resumable actions

---

## Technical Architecture (Stellar-grade, Blockchain-ready)
### Frontend
- Next.js (App Router), React
- Tailwind UI components (Radix)
- Mobile-first responsive layout
- Region adaptation via context
- AI-assisted content generation (safe assist)

### Backend (Planned / Intended)
- Firebase Authentication
- Firestore for primary product data
- Cloud Functions for payment processing / integrations
- Cloud Storage for profile media
- Firebase Cloud Messaging for notifications

### Stellar / Blockchain Layer (Optional, Roadmap)
The product is designed so that **attestations** can be anchored to a verifiable ledger:
- vouch submissions → immutable credential receipt
- job completion attestations → job fact anchor
- circle contribution milestones → contribution receipts
- dispute outcomes → auditable resolution record

Implementation strategy:
- write product facts to Firestore
- generate an attestation payload (hash/metadata)
- submit to a ledger (e.g., Stellar or compatible network)
- store transaction/attestation IDs back in Firestore

This keeps the system fast and user-friendly while enabling long-term integrity.

### Payment Integration (Planned)
- Paystack and/or mobile money integrations
- Escrow system for job payments
- Automated Ajo collections
- Transaction receipts & history

### Communication
- In-app messaging
- SMS notifications via Twilio
- Email notifications
- Push notifications


---

## Security Considerations
- Phone verification and identity controls
- Voucher accountability model
- Fraud detection and rate limiting
- Reputation decay for inactivity
- Privacy-preserving display rules for contact information

---

## Known Limitations (Current)
- Demo UI uses mock data (not yet connected to real persistence)
- Ajo disputes are manual (future workflow)
- No offline mode yet
- Limited payment methods (expansion planned)
- Language support currently primarily English

---

## Mobile App
The web app is designed to be installable as a PWA.

Planned native app capabilities:
- better low-end performance
- offline functionality
- push notifications
- camera integration for profiles
- geolocation for nearby opportunities

---

## Contributing
Contributions are welcome—especially from those familiar with:
- Nigerian mobile money / payment rails
- reputation and vouching systems
- verifiable credentials
- PWA optimization
- localization (Yoruba/Igbo etc.)

---

## Deployment
Deployed at:
https://6000-firebase-studio-1759411252322.cluster-fbfjltn375c6wqxlhoehbz44sk.cloudworkstations.dev/

---

## Support
Common issues:

*"Can't verify phone number"*
- Use Nigerian format (+234...)
- Resend code
- Contact support if needed

*"Vouches not showing up"*
- Vouches may require a review period
- Ensure your account is active

---

## License
MIT License - see LICENSE file

---

## Disclaimer
MobileRep facilitates connections but does not guarantee outcomes.

Ajo groups are informal arrangements; the platform tracks contributions but is not a licensed financial institution. Participate only with trusted community members.

