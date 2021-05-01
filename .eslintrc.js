module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    jest: true
  },
  extends: ['@react-native-community', 'prettier'],
  rules: {
    // 'import/no-unresolved': 'off',
    // 'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'comma-dangle': ['error', 'never'],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error']
  }
};
