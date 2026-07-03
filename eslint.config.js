// Flat ESLint config: TS + Astro + islands (React hooks, a11y).
// Formatting is Prettier's job — no stylistic rules here.
import tseslint from 'typescript-eslint'
import astro from 'eslint-plugin-astro'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactHooks from 'eslint-plugin-react-hooks'

export default tseslint.config(
    {
        ignores: ['dist/', '.astro/', '.yarn/', 'test/baseline/', 'screenshots/'],
    },
    ...tseslint.configs.recommended,
    ...astro.configs.recommended,
    {
        files: ['**/*.tsx'],
        plugins: { 'jsx-a11y': jsxA11y, 'react-hooks': reactHooks },
        rules: {
            ...jsxA11y.flatConfigs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
        },
    },
    {
        rules: {
            // `_`-prefixed args are intentionally unused (express middleware etc.)
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        },
    },
    {
        // Astro generates this file with a triple-slash reference — leave it be.
        files: ['src/env.d.ts'],
        rules: { '@typescript-eslint/triple-slash-reference': 'off' },
    },
)
