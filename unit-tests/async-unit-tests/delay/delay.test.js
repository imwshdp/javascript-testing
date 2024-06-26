const { describe, test, expect } = require('@jest/globals');
const delay = require('./delay');

describe('Delay Function Tests :>>', () => {
	test('Sum by delay', async () => {
		const sum = await delay(() => 5 + 5, 1000);
		expect(sum).toBe(10);
	});
});
