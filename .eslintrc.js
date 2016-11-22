module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    experimentalObjectRestSpread: true
  },
  rules: {
    semi: [2, 'never'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/require-extension': 'off',
    'import/no-dynamic-require': 'off'
  }
}
