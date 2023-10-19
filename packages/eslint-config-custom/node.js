module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    'no-console': 'warn',
    'require-jsdoc': 'off',
    'import/no-unresolved': 'off'
  }
}
