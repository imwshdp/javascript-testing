/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable jest/no-mocks-import */
import { render, screen, waitFor, act } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import axios from 'axios';

import Users from '../Users';
import UserPage from '../../../pages/UserPage';
import mockGetUsersResponse from '../../../__mocks__/axios';

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
		render(
			<MemoryRouter initialEntries={['/users']}>
				<Routes>
					<Route path='/users' element={<Users />} />
					<Route path='/users/:userId' element={<UserPage />} />
				</Routes>
			</MemoryRouter>
		);

		const users = await screen.findAllByTestId('user-item');
		expect(users.length).toBe(3);

		act(() => userEvent.click(users[0]));

		expect(screen.getByTestId('user-page')).toBeInTheDocument();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
});
