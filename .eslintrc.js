module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jest/recommended'
	],
	'settings': {
		'react': {
			'version': 'detect'
		}
	},
	'globals': {
		'localStorage': true,
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'react/prop-types': 0,
		'indent': [
			'error',
			'tab',
			{ 'SwitchCase': 1 }
		],
		'quotes': [2, 'single'],
		'semi': [
			'error',
			'always'
		],
		'comma-spacing': [
			'error',
			{ 'before': false, 'after': true }
		],
		'no-var': [
			'warn'
		],
		'no-console': [ 'warn' ],
		'no-unused-vars': [ 'error' ],
		'camelcase': ['error', { 'properties': 'never' }],
		'init-declarations': ['error', 'always'],
		'space-before-function-paren': ['error', 'never'],
		'keyword-spacing': ['error', { 'before': true, 'after': true }],
		'arrow-spacing': ['error', { 'before': true, 'after': true }],
		'react/jsx-tag-spacing': ['error', {
			'closingSlash': 'never',
			'beforeSelfClosing': 'always',
			'afterOpening': 'never',
			'beforeClosing': 'allow'
		}],
		'no-trailing-spaces': ['error'],
		'object-curly-spacing': ['error', 'always', { 'objectsInObjects': false }],
		'linebreak-style':'off',
		'react/destructuring-assignment': [ 2, 'always'],
		'eslint no-useless-escape': 'off',
		'no-unreachable': 'off'
	}
};