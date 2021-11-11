import { ESLint } from 'eslint'
import * as dirname from '@njam-data/tools/dirname.js'

const projectRoot = dirname.join(import.meta.url, '..', '..')

export default async function lint ({ args, flags }) {
	const eslint = new ESLint({
		fix: flags.fix,
		extensions: ['.js', '.ts', '.cjs', '.mjs', '.svelte'],
		resolvePluginsRelativeTo: projectRoot,
		baseConfig: {
			env: {
				node: true,
				browser: true,
				es2021: true
			},
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module'
			},
			plugins: [
				'import',
				'node',
				'svelte3'
			],
			globals: {
				document: 'readonly',
				navigator: 'readonly',
				window: 'readonly'
			},
			overrides: [
				{
					files: ['*.svelte'],
					processor: 'svelte3/svelte3'
				}
			],
			rules: {
				'no-var': 'warn',
				'object-shorthand': ['warn', 'properties'],

				'accessor-pairs': ['error', { setWithoutGet: true, enforceForClassMembers: true }],
				'array-bracket-spacing': ['error', 'never'],
				'array-callback-return': ['error', {
					allowImplicit: false,
					checkForEach: false
				}],
				'arrow-spacing': ['error', { before: true, after: true }],
				'block-spacing': ['error', 'always'],
				'brace-style': ['error', '1tbs', { allowSingleLine: true }],
				camelcase: ['error', {
					allow: ['^UNSAFE_'],
					properties: 'never',
					ignoreGlobals: true
				}],
				'comma-dangle': ['error', {
					arrays: 'never',
					objects: 'never',
					imports: 'never',
					exports: 'never',
					functions: 'never'
				}],
				'comma-spacing': ['error', { before: false, after: true }],
				'comma-style': ['error', 'last'],
				'computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
				'constructor-super': 'error',
				curly: ['error', 'multi-line'],
				'default-case-last': 'error',
				'dot-location': ['error', 'property'],
				'dot-notation': ['error', { allowKeywords: true }],
				'eol-last': 'error',
				eqeqeq: ['error', 'always', { null: 'ignore' }],
				'func-call-spacing': ['error', 'never'],
				'generator-star-spacing': ['error', { before: true, after: true }],
				indent: [2, 'tab'],
				'key-spacing': ['error', { beforeColon: false, afterColon: true }],
				'keyword-spacing': ['error', { before: true, after: true }],
				'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
				'multiline-ternary': ['error', 'always-multiline'],
				'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
				'new-parens': 'error',
				'no-array-constructor': 'error',
				'no-async-promise-executor': 'error',
				'no-caller': 'error',
				'no-case-declarations': 'error',
				'no-class-assign': 'error',
				'no-compare-neg-zero': 'error',
				'no-cond-assign': 'error',
				'no-const-assign': 'error',
				'no-constant-condition': ['error', { checkLoops: false }],
				'no-control-regex': 'error',
				'no-debugger': 'error',
				'no-delete-var': 'error',
				'no-dupe-args': 'error',
				'no-dupe-class-members': 'error',
				'no-dupe-keys': 'error',
				'no-duplicate-case': 'error',
				'no-useless-backreference': 'error',
				'no-empty': ['error', { allowEmptyCatch: true }],
				'no-empty-character-class': 'error',
				'no-empty-pattern': 'error',
				'no-eval': 'error',
				'no-ex-assign': 'error',
				'no-extend-native': 'error',
				'no-extra-bind': 'error',
				'no-extra-boolean-cast': 'error',
				'no-extra-parens': ['error', 'functions'],
				'no-fallthrough': 'error',
				'no-floating-decimal': 'error',
				'no-func-assign': 'error',
				'no-global-assign': 'error',
				'no-implied-eval': 'error',
				'no-import-assign': 'error',
				'no-invalid-regexp': 'error',
				'no-irregular-whitespace': 'error',
				'no-iterator': 'error',
				'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
				'no-lone-blocks': 'error',
				'no-loss-of-precision': 'error',
				'no-misleading-character-class': 'error',
				'no-prototype-builtins': 'error',
				'no-useless-catch': 'error',
				'no-mixed-operators': ['error', {
					groups: [
						['==', '!=', '===', '!==', '>', '>=', '<', '<='],
						['&&', '||'],
						['in', 'instanceof']
					],
					allowSamePrecedence: true
				}],
				'no-mixed-spaces-and-tabs': 'error',
				'no-multi-spaces': 'error',
				'no-multi-str': 'error',
				'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 2, maxEOF: 0 }],
				'no-new': 'error',
				'no-new-func': 'error',
				'no-new-object': 'error',
				'no-new-symbol': 'error',
				'no-new-wrappers': 'error',
				'no-obj-calls': 'error',
				'no-octal': 'error',
				'no-octal-escape': 'error',
				'no-proto': 'error',
				'no-redeclare': ['error', { builtinGlobals: false }],
				'no-regex-spaces': 'error',
				'no-return-assign': ['error', 'except-parens'],
				'no-self-assign': ['error', { props: true }],
				'no-self-compare': 'error',
				'no-sequences': 'error',
				'no-shadow-restricted-names': 'error',
				'no-sparse-arrays': 'error',
				'no-tabs': 'off',
				'no-template-curly-in-string': 'error',
				'no-this-before-super': 'error',
				'no-throw-literal': 'error',
				'no-trailing-spaces': 'error',
				'no-undef': 'error',
				'no-undef-init': 'error',
				'no-unexpected-multiline': 'error',
				'no-unmodified-loop-condition': 'error',
				'no-unneeded-ternary': ['error', { defaultAssignment: false }],
				'no-unreachable': 'error',
				'no-unreachable-loop': 'error',
				'no-unsafe-finally': 'error',
				'no-unsafe-negation': 'error',
				'no-unused-expressions': ['error', {
					allowShortCircuit: true,
					allowTernary: true,
					allowTaggedTemplates: true
				}],
				'no-unused-vars': ['error', {
					args: 'none',
					caughtErrors: 'none',
					ignoreRestSiblings: true,
					vars: 'all'
				}],
				'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
				'no-useless-call': 'error',
				'no-useless-computed-key': 'error',
				'no-useless-constructor': 'error',
				'no-useless-escape': 'error',
				'no-useless-rename': 'error',
				'no-useless-return': 'error',
				'no-void': 'error',
				'no-whitespace-before-property': 'error',
				'no-with': 'error',
				'object-curly-newline': ['error', { multiline: true, consistent: true }],
				'object-curly-spacing': ['error', 'always'],
				'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
				'one-var': ['error', { initialized: 'never' }],
				'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before', '|>': 'before' } }],
				'padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
				'prefer-const': ['error', { destructuring: 'all' }],
				'prefer-promise-reject-errors': 'error',
				'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
				'quote-props': ['error', 'as-needed'],
				quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
				'rest-spread-spacing': ['error', 'never'],
				semi: ['error', 'never'],
				'semi-spacing': ['error', { before: false, after: true }],
				'space-before-blocks': ['error', 'always'],
				'space-before-function-paren': ['error', 'always'],
				'space-in-parens': ['error', 'never'],
				'space-infix-ops': 'error',
				'space-unary-ops': ['error', { words: true, nonwords: false }],
				'spaced-comment': ['error', 'always', {
					line: { markers: ['*package', '!', '/', ',', '='] },
					block: { balanced: true, markers: ['*package', '!', ',', ':', '::', 'flow-include'], exceptions: ['*'] }
				}],
				'symbol-description': 'error',
				'template-curly-spacing': ['error', 'never'],
				'template-tag-spacing': ['error', 'never'],
				'unicode-bom': ['error', 'never'],
				'use-isnan': ['error', {
					enforceForSwitchCase: true,
					enforceForIndexOf: true
				}],
				'valid-typeof': ['error', { requireStringLiterals: true }],
				'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
				'yield-star-spacing': ['error', 'both'],
				yoda: ['error', 'never'],

				'import/export': 'error',
				'import/first': 'off',
				'import/no-absolute-path': ['error', { esmodule: true, commonjs: true, amd: false }],
				'import/no-duplicates': 'off',
				'import/no-mutable-exports': 'off',
				'import/no-unresolved': 'off',
				'import/no-named-default': 'error',
				'import/no-webpack-loader-syntax': 'error',

				'node/handle-callback-err': ['error', '^(err|error)$'],
				'node/no-callback-literal': 'error',
				'node/no-deprecated-api': 'error',
				'node/no-exports-assign': 'error',
				'node/no-new-require': 'error',
				'node/no-path-concat': 'error',
				'node/process-exit-as-throw': 'error'
			}
		}
	})

	const results = await eslint.lintFiles(args[0] || ['.'])

	if (flags.fix) {
		await ESLint.outputFixes(results)
	}

	const formatter = await eslint.loadFormatter('stylish')
	const resultText = formatter.format(results)

	console.log(resultText)
}
