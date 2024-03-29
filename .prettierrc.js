module.exports = {
  bracketSpacing: true,
  bracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  printWidth: 80,
  semi: false,
  arrowParens: 'avoid',
  endOfLine: 'auto',
  jsxBracketSameLine: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^features/(.*)$',
    '^entities/(.*)$',
    '^shared/(.*)$',
    '^[../]',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
