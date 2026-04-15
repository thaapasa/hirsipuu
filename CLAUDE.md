# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Hirsipuu is a Finnish-language hangman web game. The UI strings (prompts, logs) and the word list are Finnish; the game supports the Finnish alphabet including Å, Ä, Ö (see `src/game/Letters.ts`).

## Layout

The application lives in the `hirsipuu/` subdirectory (Create React App + TypeScript). All `yarn` commands must be run from there, not the repo root.

The top-level `assets/images/` contains the canonical SVG source pieces. `hirsipuu/public/images/` holds copies that the app actually loads at runtime — changes to the hangman artwork need to be reflected in both places.

## Commands

All commands run from `hirsipuu/`:

- `yarn start` — dev server at http://localhost:3000
- `yarn build` — production build
- `yarn test` — interactive Jest watch mode (CRA default)
- `yarn test -- --watchAll=false` — single non-watch run
- `yarn test -- <pathPattern>` — run a single test file

Lint/format: ESLint (CRA config + `prettier/prettier: error`) runs inline during `yarn start`/`yarn test`; there is no standalone lint script.

## Architecture

The game separates pure logic from presentation:

- `src/game/` — game state and data, framework-minimal. `HangmanGame.ts` exports the `useHangmanGame` hook which is the single source of truth: it holds `word`, `position` (wrong-guess counter), and `selected` letters, and derives `hiddenWord` and a `GameStatus` (`playing | victory | defeat`). `state` flips to `defeat` once `position >= HangmanImages.length` and to `victory` when no `_` remains in `hiddenWord`.
- `src/ui/` — React/styled-components rendering. `ui/HangmanGame.tsx` consumes the hook and composes `GameImage`, `WordView`, `LetterSelector`, `Tools`.

The hangman drawing is built incrementally: `game/HangmanImages.ts` lists 14 SVG part names in draw order, and `ui/HangmanImage.tsx` layers them absolutely-positioned, revealing one additional piece per wrong guess. Adding/removing pieces means editing both that list and the SVG files in `public/images/` (and `assets/images/`) — the count there also defines the max wrong guesses before defeat.

Image sizing in `ui/GameImage.tsx` hard-codes the 172×232 SVG aspect ratio and clamps height to 45% of the window; if the artwork dimensions change, those constants must be updated too.

Victory/defeat overlays (`VictoryImage`, `DefeatImage`) use Lottie animations loaded from `public/anim/` via the `LottieAnimation` component.
