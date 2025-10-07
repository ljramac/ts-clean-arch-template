# ts-clean-arch-template

A minimal TypeScript project scaffold following Clean Architecture principles.

This template includes:

- Clean Architecture project structure (domain, application, infrastructure, interfaces)
- TypeScript
- ESLint for linting
- Husky for Git hooks
- lint-staged to run linters on staged files

Quick start

1. Install dependencies:

```bash
pnpm install
```

2. Run TypeScript build (if configured) or start your app as defined in `package.json`:

```bash
pnpm build
```

3. Husky and lint-staged will run automatically on commits to enforce linting and formatting.

Notes

- This repository is intended as a starter template. Adjust linting, formatting, and hook configurations to match your team's preferences.
- See `package.json`, `eslint.config.js` and the `src/` folder for the project layout and scripts.

License

MIT
