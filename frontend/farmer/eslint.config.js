import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off', // Not needed with Vite
    'no-unused-vars': 'warn',
    'react/prop-types': 'off', // optional if not using PropTypes
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
});
