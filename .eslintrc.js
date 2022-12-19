module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['@typescript-eslint', 'import', 'prettier'],

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],

  ignorePatterns: ['.eslintrc.js'],

  rules: {
    // prettier
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        bracketSameLine: true,
        singleQuote: true,
        trailingComma: 'all',
        tabWidth: 2,
        printWidth: 80,
        semi: false,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
  },
}
