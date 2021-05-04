module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        // allow jsx syntax in js files (for next.js project)
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }], //should add ".ts" if typescript project,
        "semi": ["error", "never"],
        'import/extensions': 0,
        'import/no-unresolved': 0,
        quotes: 0,
        indent: ['error', 2, { SwitchCase: 1, ignoreComments: true }],
        'no-async-promise-executor': 0,
        'no-unused-expressions': 0,
        'no-case-declarations': 0,
        'no-control-regex': 0,
        'no-new-func': 0,
        'no-prototype-builtins': 0,
        'no-useless-call': 0,
        'no-useless-catch': 0,
        'no-useless-rename': 0,
        'no-var': 'error',
        'no-explicit-any': 0,
        'react/prop-types': 'off',
        semi: [0, 'never'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-closing-tag-location': 0,
        'react/jsx-closing-bracket-location': 0,
        'react/jsx-handler-names': 'off',
        'react/jsx-fragments': 'off',
        'react/jsx-curly-spacing': 0,
        'react/no-unknown-property': 0,
        'jsx-closing-bracket-location': 0,
        "no-use-before-define": ["error", { functions: true, classes: true, variables: true }],
        'space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            named: 'always',
            asyncArrow: 'always'
          }
        ],
        '@typescript-eslint/restrict-template-expressions': [
            2,
            {
              allowNumber: true
            }
          ]
    }
}
