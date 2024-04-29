/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { routerConfig } from '../data';

describe('React Router Tests :>>', () => {
	test('Navigation updates on link click', () => {
		const router = createMemoryRouter(routerConfig, {
			initialEntries: ['/']
		});

		render(<RouterProvider router={router} />);

		// move to about
		const aboutLink = screen.getByTestId('about-link');
		act(() => userEvent.click(aboutLink));

		const aboutPage = screen.getByTestId('about-page');
		expect(aboutPage).toBeInTheDocument();

		// move to main
		const mainLink = screen.getByTestId('main-link');
		act(() => userEvent.click(mainLink));

		const mainPage = screen.getByTestId('main-page');
		expect(mainPage).toBeInTheDocument();
	});
	test('Landing on a error page', () => {
		const router = createMemoryRouter(routerConfig, {
			initialEntries: ['/go-to-error']
		});

		render(<RouterProvider router={router} />);

		expect(screen.getByTestId('error-page')).toBeInTheDocument();
	});
});
