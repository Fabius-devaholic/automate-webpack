module.exports = {
  rules: {
    'indentation': [2, {
      'except': ['value'],
      'severity': 'warning'
    }],
    'block-no-empty': null,
    'color-no-invalid-hex': true,
    'comment-empty-line-before': [ 'always', {
      'ignore': ['stylelint-commands', 'after-comment']
    } ],
    'declaration-colon-space-after': 'always',
    'max-empty-lines': 2,
    'rule-empty-line-before': [ 'always', {
      'except': ['first-nested'],
      'ignore': ['after-comment']
    } ],
    'unit-whitelist': ['em', 'rem', '%', 's', 'px', 'fr', 'vh', 'vw']
  }
}
