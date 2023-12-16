/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@stylistic'
  ],
  root: true,
  rules: {
    '@stylistic/indent': ['error', 2],
  }
};