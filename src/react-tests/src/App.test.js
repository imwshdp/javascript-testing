import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routerConfig from './router';

describe('React Router Tests', () => {
	test('Link Click Events Testing', () => {
		const router = createBrowserRouter([routerConfig]);

		render(<RouterProvider router={router} />);

		const mainLink = screen.getByTestId('main-link');
		const aboutLink = screen.getByTestId('about-link');

		setTimeout(() => {
			userEvent.click(aboutLink);
			expect(screen.getByTestId('about-page')).toBeInTheDocument();

			userEvent.click(mainLink);
			expect(screen.getByTestId('main-page')).toBeInTheDocument();
		});
	});
});
