const { describe, expect, test } = require('@jest/globals');
const mapArrayToString = require('./mapArrayToString');

describe('Unit tests (mapArrayToString) :>>', () => {
	test('Array with numbers', () => {
		expect(mapArrayToString([1, 2, 3])).toEqual(['1', '2', '3']);
	});

	test('Array with primitives', () => {
		expect(mapArrayToString([1, 2, 3, null, undefined, 'some string'])).toEqual(['1', '2', '3']);
	});

	test('Empty array', () => {
		expect(mapArrayToString([])).toEqual([]);
	});

	test('Not', () => {
		expect(mapArrayToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
	});
});
