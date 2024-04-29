const { describe, test, expect, beforeEach } = require('@jest/globals');
const axios = require('axios');

const getData = require('./getData');
const mockGetAxiosUsers = require('../../__mocks__/axios');

describe('Async unit tests (axios) :>>', () => {
	beforeEach(() => {
		const response = {
			data: mockGetAxiosUsers
		};
		axios.get = jest.fn().mockResolvedValue(response);
	});

	test('Axios getting data', async () => {
		const data = await getData();

		expect(axios.get).toBeCalledTimes(1);
		expect(data).toEqual(['1', '2', '3']);

		expect(data).toMatchSnapshot();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
});
