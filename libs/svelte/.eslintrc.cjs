/* jshint esversion: 9 */

/** @type {import('eslint').ESLint} */
const config = {
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	extends: ['../../../.eslintrc.cjs'],
	ignorePatterns: ['!**/*'],
	overrides: [
		{
			files: ['*.ts', '*.js', '*.svelte'],
			parserOptions: {
				project: ['libs/shared/svelte/tsconfig.*?.json'],
			},
			rules: {},
		},
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['svelte3', '@typescript-eslint'],
	settings: {
		'svelte3/typescript': true,
	},
};

module.exports = config;
