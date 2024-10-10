module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020, // or the version you are using
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/essential',
    '@vue/typescript/recommended',
  ],
  "rules": {
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
  }
};
