import { createJiti } from 'jiti';

const jiti = createJiti(import.meta.url);
const { eslintNodeConfig } = await jiti.import('./src/index.ts');

/** @type {import("./src/index.js").ESLintAntfuConfig[]} */
export default eslintNodeConfig(import.meta.dirname).append({
    // A single package: its versions stay in package.json. The pnpm rules otherwise move them to a `catalog:` of
    // pnpm-workspace.yaml, which only holds settings here.
    files: ['package.json'],
    rules: { 'pnpm/json-enforce-catalog': 'off' }
});
