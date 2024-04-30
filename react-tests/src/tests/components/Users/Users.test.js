/* eslint-disable jest/no-mocks-import */
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import axios from 'axios';

import Users from '../../../components/Users';
import { renderWithRouter } from '../../helpers';
import { getUsers } from '../../__mocks__/getUsers';

describe('Users Tests :>>', () => {
	beforeEach(() => {
		axios.get = jest.fn().mockResolvedValue(getUsers());
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('All Users Fetching', async () => {
		render(
			<MemoryRouter>
				<Users />
			</MemoryRouter>
		);

		await waitFor(() => {
			const users = screen.getAllByTestId('user-item');
			expect(users.length).toBe(3);
		});
		// or use
		// const users = await screen.findAllByTestId('user-item');
		// expect(users.length).toBe(3);

		expect(axios.get).toBeCalledTimes(1);
	});

	test('Navigation to User Page', async () => {
		renderWithRouter(null, '/users');

		const users = await screen.findAllByTestId('user-item');
		expect(users.length).toBe(3);

		userEvent.click(users[0]);

		expect(screen.getByTestId('user-page')).toBeInTheDocument();
	});
});
