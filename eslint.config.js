import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),

  /* =========================
     React + TypeScript Files
  ========================== */
  {
    files: ['src/**/*.{ts,tsx}'],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.app.json'],
        tsconfigRootDir: process.cwd(),
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint.plugin,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      /* ===== Base Safety ===== */
      ...js.configs.recommended.rules,

      /* ===== TypeScript Safety ===== */
      ...tseslint.configs.recommendedTypeChecked.rules,

      /* ===== React Safety ===== */
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      /* ===== Production Important Rules ===== */

      'react/jsx-key': 'warn',

      'react-hooks/exhaustive-deps': 'error',

      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      'react/react-in-jsx-scope': 'off',

      'react/jsx-no-target-blank': 'warn',

      '@typescript-eslint/consistent-type-imports': 'error',

      '@typescript-eslint/no-explicit-any': 'error',

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
]);
