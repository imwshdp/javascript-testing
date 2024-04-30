import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { routerConfig } from '../../router';

describe('React Router Tests :>>', () => {
	test('Navigation On Link Click', () => {
		const router = createMemoryRouter(routerConfig, {
			initialEntries: ['/']
		});

		render(<RouterProvider router={router} />);

		// move to about
		const aboutLink = screen.getByTestId('about-link');
		userEvent.click(aboutLink);

		const aboutPage = screen.getByTestId('about-page');
		expect(aboutPage).toBeInTheDocument();

		// move to main
		const mainLink = screen.getByTestId('main-link');
		userEvent.click(mainLink);

		const mainPage = screen.getByTestId('main-page');
		expect(mainPage).toBeInTheDocument();
	});

	test('Landing on a Error Page', () => {
		const router = createMemoryRouter(routerConfig, {
			initialEntries: ['/go-to-error']
		});

		render(<RouterProvider router={router} />);

		expect(screen.getByTestId('error-page')).toBeInTheDocument();
	});
});
