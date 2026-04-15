# Hirsipuu

Finnish-language hangman game, built with Vite + React + TypeScript.

## Scripts

Run from the `hirsipuu/` directory:

- `yarn dev` — start the Vite dev server on http://localhost:3000
- `yarn build` — type-check and produce a production bundle in `dist/`
- `yarn preview` — serve the production bundle locally
- `yarn test` — run Vitest in watch mode
- `yarn test:run` — run Vitest once (for CI)
- `yarn lint` — run ESLint (flat config, type-aware)
- `yarn format` — run Prettier across the project

## Notes

Hangman image pieces live in `public/images/` and are loaded via relative URLs. The canonical SVG sources are kept at the repo root in `../assets/images/` — update both in lockstep when changing artwork.
