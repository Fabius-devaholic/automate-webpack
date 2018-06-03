module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: [
    'standard',
    'airbnb-base',
    'eslint:recommended'
  ],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': 0,
    'no-new': 0,
    'no-console': 'off',
    'import/extensions': ['never', {
      'js': 'never'
    }]
  }
}
