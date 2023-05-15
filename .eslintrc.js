module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 'off',
    'react/prop-types': 'off',
    'import/no-cycle': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/jsx-no-bind': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'consistent-return': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-alert': 'off',
    'global-require': 'off',
    'no-param-reassign': 0,
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    radix: 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};
