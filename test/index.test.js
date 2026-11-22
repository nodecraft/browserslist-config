'use strict';
const assert = require('node:assert/strict');
const { describe, it } = require('node:test');

const browserslist = require('browserslist');

const exclude = require('../exclude.js');
const config = require('../index.js');

describe('browserslist config', () => {
	for (const env of ['production', 'development']) {
		it(`resolves the ${env} queries`, () => {
			assert.ok(browserslist(config[env]).length > 0);
		});
	}

	it('resolves the exclude queries', () => {
		assert.ok(browserslist(exclude).length > 0);
	});

	it('never targets IE in production', () => {
		const ie = browserslist(config.production).filter(browser => browser.startsWith('ie '));
		assert.deepEqual(ie, []);
	});
});
