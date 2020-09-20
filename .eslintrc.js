module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 10,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    quotes: ['error', 'single'],
    'no-console': 'error',
    'no-unused-vars': 'warn',
    'no-duplicate-imports': 'error',
    'newline-after-var': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
