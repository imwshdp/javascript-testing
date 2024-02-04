const { describe, expect, test } = require('@jest/globals');
const mapArrayToString = require('./mapArrayToString');

describe('Тестирование функции mapArrayToString', () => {
	test('Массив чисел', () => {
		expect(mapArrayToString([1, 2, 3])).toEqual(['1', '2', '3']);
	});

	test('Массив примитивов', () => {
		expect(mapArrayToString([1, 2, 3, null, undefined, 'some string'])).toEqual(['1', '2', '3']);
	});

	test('Пустой массив', () => {
		expect(mapArrayToString([])).toEqual([]);
	});

	test('Отрицание', () => {
		expect(mapArrayToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
	});
});
