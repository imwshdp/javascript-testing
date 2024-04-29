/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable jest/no-mocks-import */

import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import axios from 'axios';

import Users from '../Users';

import mockGetUsersResponse from '../../../__mocks__/axios';
import { renderWithRouter } from '../../../tests/helpers/renderWithRouter';

describe('React async tests :>>', () => {
	beforeEach(() => {
		const response = {
			data: mockGetUsersResponse
		};
		axios.get = jest.fn().mockResolvedValue(response);
	});

	test('Users fetching', async () => {
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

	test('User page navigation', async () => {
		render(renderWithRouter(null, '/users'));

		const users = await screen.findAllByTestId('user-item');
		expect(users.length).toBe(3);

		userEvent.click(users[0]);

		expect(screen.getByTestId('user-page')).toBeInTheDocument();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
});
