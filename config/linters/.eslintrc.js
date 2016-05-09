module.exports = {
  parser:  'babel-eslint',
  extends: 'airbnb',

  env: {
    browser: true,
    node:    true,
    mocha:   true,
    es6:     true
  },

  globals: {
    define:     true,
    describe:   true,
    expect:     true,
    it:         true,
    beforeEach: true,
    afterEach:  true
  },

  plugins: ['react', 'jsx-a11y'],

  parserOptions: {
    ecmaVersion:  6,
    sourceType:   'module',
    ecmaFeatures: {jsx: true}
  },

  rules: {
    'arrow-body-style':     [2, 'as-needed'],
    'brace-style':          [2, 'stroustrup', {allowSingleLine: true}],
    indent:                 [2, 2, {SwitchCase: 1}],
    'key-spacing':          [2, {align: 'value'}],
    'object-curly-spacing': ['error', 'never'],
    'prefer-template':      2,

    // Turn off AirBnB settings
    'comma-dangle':                0,
    'dot-notation':                0,
    'global-require':              0,
    'max-len':                     0,
    'no-console':                  1,
    'no-multi-spaces':             0,
    'no-extra-parens':             0,
    'space-before-function-paren': ['error', 'always'],

    'import/no-unresolved': 2,

    'jsx-a11y/href-no-hash':                 2,
    'jsx-a11y/label-has-for':                2,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props':     2,
    'jsx-a11y/aria-props':                   2,

    // support Immutable factories
    'new-cap': [2, {capIsNewExceptions: ['List', 'Map', 'OrderedSet', 'Range']}],

    // React rules
    'react/no-danger': 0,
    'react/sort-comp': [2,
      {
        order:  [
          'static-methods',
          'lifecycle',
          'everything-else',
          'rendering'
        ],
        groups: {
          rendering: ['/^render.+$/', 'render']
        }
      }
    ]
  },

  settings: {
    'import/resolver': {
      webpack: {
        config: './config/webpack/webpack.dev.babel.js'
      }
    }
  }
}
