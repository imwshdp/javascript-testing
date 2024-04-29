/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable jest/no-mocks-import */
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';

import Users from '../Users';
import mockGetUsersResponse from '../../../__mocks__/axios';

describe('React async tests :>>', () => {
	beforeEach(() => {
		const response = {
			data: mockGetUsersResponse
		};
		axios.get = jest.fn().mockResolvedValue(response);
	});

	test('Users fetching', async () => {
		render(<Users />);

		await waitFor(() => {
			const users = screen.getAllByTestId('user-item');
			expect(users.length).toBe(3);
		});

		// or use
		// const users = await screen.findAllByTestId('user-item');
		// expect(users.length).toBe(3);

		expect(axios.get).toBeCalledTimes(1);

		// screen.debug();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
});
