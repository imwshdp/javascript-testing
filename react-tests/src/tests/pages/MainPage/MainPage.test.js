import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MainPage from '../../../pages/MainPage';

describe('React Basics Tests :>>', () => {
	test('Get method', () => {
		render(<MainPage />);

		const helloWorldElement = screen.getByText(/Hello, world!/i);
		expect(helloWorldElement).toBeInTheDocument();

		const buttonElement = screen.getByRole('button');
		expect(buttonElement).toBeInTheDocument();

		const inputElement = screen.getByPlaceholderText(/input value/i);
		expect(inputElement).toBeInTheDocument();

		expect(inputElement).toMatchSnapshot();
	});

	test('Query method', () => {
		render(<MainPage />);

		const nullableHelloWorldElement = screen.queryByText(/Hello, world! 2/i);
		expect(nullableHelloWorldElement).toBeNull();
	});

	test('Find method', async () => {
		render(<MainPage />);

		const dataElement = await screen.findByText(/Data is received/i);
		expect(dataElement).toBeInTheDocument();
		expect(dataElement).toHaveStyle({
			color: 'red'
		});
	});

	test('FireEvent', () => {
		render(<MainPage />);

		const toggleSwitcher = screen.getByTestId('toggle-switcher');

		expect(screen.queryByTestId('toggle-element')).toBeNull();

		fireEvent.click(toggleSwitcher);
		expect(screen.getByTestId('toggle-element')).toBeInTheDocument();

		fireEvent.click(toggleSwitcher);
		expect(screen.queryByTestId('toggle-element')).toBeNull();
	});

	test('UserEvent', () => {
		render(<MainPage />);

		const inputElement = screen.getByPlaceholderText(/input value/i);
		expect(screen.queryByTestId('value-element')).toContainHTML('');

		// Example with fireEvent
		// fireEvent.input(inputElement, {
		// 	target: {
		// 		value: '123'
		// 	}
		// });

		// Example with userEvent
		userEvent.type(inputElement, '123');

		expect(screen.queryByTestId('value-element')).toContainHTML('123');
	});
});
