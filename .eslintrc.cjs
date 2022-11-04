module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	root: true,
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		tsconfigRootDir: __dirname,
		jsx: true,
		project: ['./tsconfig.json', './tsconfig.node.json']
	},
	plugins: ['react', '@typescript-eslint'],
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off'
	}
}
