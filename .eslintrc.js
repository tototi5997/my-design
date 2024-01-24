module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  ignorePatterns: ['src/**/interface.ts'],
  rules: {
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
