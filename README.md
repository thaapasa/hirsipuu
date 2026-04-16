# Hirsipuu

A Finnish-language hangman web game. Built with Vite, React, and TypeScript.

The word list is Finnish and the alphabet includes Å, Ä, and Ö. The hangman is drawn one piece at a time as the player runs out of guesses.

## Repository layout

- `hirsipuu/` — the Vite + React + TypeScript application. All `yarn` commands are run from here.
- `assets/images/` — canonical SVG sources for the hangman pieces. The runtime copies live in `hirsipuu/public/images/` and must be kept in sync.
- `site/` — production build output, checked in. Serve this directory as the web root to deploy.

## Getting started

```sh
cd hirsipuu
yarn install
yarn dev
```

The dev server runs at http://localhost:3000.

## Common commands

Run from `hirsipuu/`:

| Command         | Description                                               |
|-----------------|-----------------------------------------------------------|
| `yarn dev`      | Vite dev server with HMR                                  |
| `yarn build`    | Type-check and build into the repo-root `site/` directory |
| `yarn preview`  | Serve the production build locally                        |
| `yarn test`     | Vitest in watch mode                                      |
| `yarn test:run` | Vitest, single run                                        |
| `yarn lint`     | ESLint (flat config, type-aware)                          |
| `yarn format`   | Prettier across the project                               |

## Credits

Asset attributions are listed in [CREDITS.md](CREDITS.md).

## License

See [LICENSE.md](LICENSE.md).
