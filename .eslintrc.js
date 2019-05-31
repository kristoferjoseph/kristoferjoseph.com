module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'arrow-body-style': 'off',
    'handle-callback-err': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-console': 'off',
    'no-inner-declarations': 'off'
  }
}
