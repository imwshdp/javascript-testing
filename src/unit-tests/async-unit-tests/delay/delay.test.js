const { describe, test, expect } = require('@jest/globals');
const delay = require('./delay');

describe('Асинхронные тесты', () => {
	test('Корректное значение', async () => {
		const sum = await delay(() => 5 + 5, 1000);
		expect(sum).toBe(10);
	});
});
