module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'no-empty-source': null,
    'block-no-empty': null,
    'no-descending-specificity': null,
    'at-rule-no-unknown': null,
    'property-no-unknown': null,
    'selector-pseudo-class-no-unknown': null,
  },
}
