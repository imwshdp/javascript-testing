const { describe, test, expect, beforeEach } = require('@jest/globals');

const getDataMock = require('./getDataMock');
const axios = require('axios');
const getData = require('./getData');

jest.mock('axios');

describe('Асинхронные тесты с axios', () => {
	let response;

	beforeEach(() => {
		response = {
			data: getDataMock
		};
	});

	test('Корректное значение', async () => {
		axios.get.mockReturnValue(response);
		const data = await getData();

		expect(axios.get).toBeCalledTimes(1);
		expect(data).toEqual(['1', '2', '3']);

		expect(data).toMatchSnapshot();
	});
});
