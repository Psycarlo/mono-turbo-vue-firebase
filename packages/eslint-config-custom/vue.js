module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: ['simple-import-sort'],
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn'
  }
}
