# Frontend navigation + design redesign

## Planned steps
- [ ] Remove marketing navbar/CSS injection from `src/app/layout.tsx` and keep root-level concerns only
- [ ] Move theme tokens (gold/coral/bg/ink/hairline) from `layout.tsx` into `src/app/globals.css`
- [ ] Refactor `src/components/app-shell.tsx` + `src/components/header.tsx` to a unified, more pro-tech navigation (better spacing, active state, polished header)
- [ ] Add a shared page header component (title/description + optional chips) and apply across all views
- [ ] Standardize card “glass panel” styling usage in views for consistent look
- [ ] Run `npm run lint` and `npm run build` to verify

