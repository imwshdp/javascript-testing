/* eslint-disable jest/no-mocks-import */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import axios from 'axios';

import { getUsers } from '../../__mocks__/getUsers';
import { renderWithRouter } from '../../helpers';

describe('Navbar tests :>>', () => {
	test('Navigation to Main Page', () => {
		renderWithRouter(null, '/users');

		const mainLink = screen.getByTestId('main-link');
		userEvent.click(mainLink);

		const mainPage = screen.getByTestId('main-page');
		expect(mainPage).toBeInTheDocument();
	});

	test('Navigation to About Page', () => {
		renderWithRouter(null, '/');

		const aboutLink = screen.getByTestId('about-link');
		userEvent.click(aboutLink);

		const aboutPage = screen.getByTestId('about-page');
		expect(aboutPage).toBeInTheDocument();
	});

	test('Navigation to Users Page', async () => {
		axios.get = jest.fn().mockResolvedValue(getUsers());

		renderWithRouter(null, '/');

		const usersLink = screen.getByTestId('users-link');
		userEvent.click(usersLink);

		const usersPage = screen.getByTestId('users-page');
		expect(usersPage).toBeInTheDocument();

		jest.clearAllMocks();
	});
});
