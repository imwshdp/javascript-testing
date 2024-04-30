const { describe, expect, test, beforeEach, beforeAll, afterEach, afterAll } = require('@jest/globals');
const square = require('./square');

describe('Square Function Tests :>>', () => {
	// Example of all lifecycle method
	// beforeEach(() => {});
	// beforeAll(() => {});
	// afterAll(() => {});
	afterEach(() => {
		jest.clearAllMocks();
	});

	test('Expect methods', () => {
		expect(square(2)).toBe(4);
		expect(square(2)).toBeLessThan(5);
		expect(square(2)).toBeGreaterThan(3);
		expect(square(2)).not.toBeUndefined();

		const spyMathPow = jest.spyOn(Math, 'pow');
		square(2);
		expect(spyMathPow).toBeCalledTimes(1);
	});

	test('Testing function with spyOn', () => {
		const spyMathPow = jest.spyOn(Math, 'pow');
		square(1);
		expect(spyMathPow).toBeCalledTimes(0);
	});
});
