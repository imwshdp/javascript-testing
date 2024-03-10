import { render, screen } from '@testing-library/react';
import Users from './Users';

import axios from 'axios';

import response from './usersMock';

jest.mock('axios');

describe('Tests with async data loading', () => {
	test('Users fetching', async () => {
		axios.get.mockReturnValue(response);
		render(<Users />);

		jest.advanceTimersByTime(3000);

		setTimeout(async () => {
			const users = await screen.findAllByTestId('user-item');
			expect(users.length).toBe(3);

			expect(axios.get).toBeCalledTimes(1);
		});
	});
});
