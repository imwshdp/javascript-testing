const { describe, test, expect, beforeEach } = require('@jest/globals');
const axios = require('axios');

const getData = require('./getData');
const { getUsers } = require('../../__mocks__/getUsers');

describe('GetData Function Tests :>>', () => {
	beforeEach(() => {
		axios.get = jest.fn().mockResolvedValue(getUsers());
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('Axios getting data', async () => {
		const data = await getData();

		expect(axios.get).toBeCalledTimes(1);
		expect(data).toEqual(['1', '2', '3']);

		expect(data).toMatchSnapshot();
	});
});
