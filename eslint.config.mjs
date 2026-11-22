import base from '@nodecraft/eslint-config/base';
import json from '@nodecraft/eslint-config/json';

// Base JS rules have no files filter, so keep them off JSON files.
const jsonIgnore = ['**/*.json'];

export default [
	...base.map((config) => {
		return { ...config, ignores: jsonIgnore };
	}),
	...json,
	{
		files: ['**/*.mjs'],
		languageOptions: {
			sourceType: 'module',
		},
	},
];
