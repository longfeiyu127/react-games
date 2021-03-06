module.exports = {
  "parser": "babel-eslint",
  "extends": [
    // "airbnb-base",
    "airbnb",
    "prettier"
  ],
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
    "jest": true
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [  //推荐使用jsx代替js
      "error",
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    // "react/prefer-stateless-function": 0,
    "no-plusplus": 0,
    "no-console": 0,
    "no-constant-condition": ["error", { "checkLoops": false }],
    "class-methods-use-this": 0,
    "no-restricted-syntax": 0,
    "react/forbid-prop-types": 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'no-nested-ternary': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/no-static-element-interactions': 0
  },
  "plugins": [
    "react",
    "prettier"
  ],
  "globals": {
    "document": true,
    "navigator": true,
    "window":true,
    "node":true
  },
  "settings": {
    "import/resolver": {
      "node": {
         "extensions": [".js",".jsx"]
      }
    }
  }
};