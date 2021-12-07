module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'airbnb-base',
		'plugin:prettier/recommended'
		// 'plugin:jest/recommended'
	],
	parserOptions: {
		ecmaVersion: 12,
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		'import/no-unresolved': 'off',
		'import/extensions': 'off',
		'import/no-absolute-path': 'off',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁止使用console
		'no-new-object': 2, // 禁止使用new Object()
		'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
		'vue/no-multiple-template-root': 0
	},
	settings: {}
}
