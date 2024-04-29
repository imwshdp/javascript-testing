const { describe, expect, test } = require('@jest/globals');
const validateValue = require('./validateValue');

describe('Unit tests (validateValue) :>>', () => {
	test('Correct value', () => {
		expect(validateValue(50)).toBe(true);
	});

	test('Beyond the lower limit', () => {
		expect(validateValue(-1)).toBe(false);
	});

	test('Beyond the upper limit', () => {
		expect(validateValue(101)).toBe(false);
	});

	test('Boundary value to the lower limit', () => {
		expect(validateValue(0)).toBe(true);
	});

	test('Boundary value to the upper limit', () => {
		expect(validateValue(100)).toBe(true);
	});
});
