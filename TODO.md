# MobileRep — Stellar Product Transformation TODO

## Phase 0: Setup & verification
- [ ] Ensure dev server builds/runs locally
- [ ] Confirm TypeScript + lint pass (`npm run typecheck`, `npm run lint`)

## Phase 1: Data/service layer (mock-to-real adapter boundary)
- [ ] Add `src/lib/services` (or `src/lib/api`) with typed interfaces matching `src/lib/types.ts`
- [ ] Implement a local/in-memory + `localStorage` adapter for:
  - [ ] Vouches (create/list)
  - [ ] Opportunities (list/detail)
  - [ ] Applications (create)
  - [ ] Circle votes (later)
- [ ] Add React Query hooks for queries/mutations

## Phase 2: Wire UI mutations (Vouch + Marketplace first)
- [ ] Create local data/service layer hooks (React Query) for vouches + opportunities
- [ ] Update `VouchView` to submit vouch and show success/error/toast
- [ ] Update `MarketplaceView` to support application flow + stateful CTA
- [ ] Add empty/loading states to both views


## Phase 3: Product/UX polish
- [ ] Add gated actions based on phone verification readiness
- [ ] Add vouch/app evidence checklist UX improvements
- [ ] Add opportunity detail view (modal or route)

## Phase 4: AI integration (safe assist)
- [ ] Wire AI-assisted message composer for vouch/application
- [ ] Wire region customizer “apply changes” to constrained labels

## Phase 5: Quality (performance + accessibility)
- [ ] Skeletons to reduce layout shift
- [ ] Accessibility pass for forms and dialogs
- [ ] Mobile breakpoint UX verification

