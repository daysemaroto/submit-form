module.exports = {
  "env": {
    "commonjs": true,
    "es6": true,
    "node": true,
  },
  "extends": "airbnb-base",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "max-classes-per-file": ["error", 2],
    "no-underscore-dangle": 0,
    "no-useless-catch": 0,
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
    "no-use-before-define": ["error", { "variables": false }],
    "no-console": ["error", { allow: ["log"] }],
    "class-methods-use-this": ["error", { "exceptMethods": ["run", 'shouldRun'] }],
  }
};
