import { fileURLToPath } from 'url';
import path from 'path';
import tsParser from '@typescript-eslint/parser';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const baseConfig = {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
        parser: tsParser,
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            ecmaFeatures: { jsx: true },
            project: [path.join(__dirname, 'tsconfig.json')],
            tsconfigRootDir: __dirname,
        },
        globals: {
            ...globals.browser,
            ...globals.es2021,
        },
    },
    plugins: {
        import: eslintPluginImport,
        '@typescript-eslint': eslintPluginTypescript,
        react: eslintPluginReact,
        'react-hooks': eslintPluginReactHooks,
    },
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/no-unsafe-argument': 'warn',

        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // Orden de imports profesional.
        'import/order': [
            'error',
            {
                groups: [
                    ['builtin', 'external'],
                    ['internal', 'sibling', 'parent'],
                    'index',
                ],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'import/newline-after-import': ['error', { count: 1 }],

        // Espaciado entre bloques lógicos.
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            {
                blankLine: 'never',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var', 'for'],
            },
            {
                blankLine: 'always',
                prev: '*',
                next: ['return', 'if', 'for', 'try'],
            },
            { blankLine: 'always', prev: ['block', 'block-like'], next: '*' },
            { blankLine: 'always', prev: 'function', next: '*' },
            { blankLine: 'always', prev: '*', next: 'function' },
        ],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};

export default [baseConfig];
