/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MainPage from './MainPage';

describe('React testing', () => {
	test('Examples with Get methods', () => {
		render(<MainPage />);

		const helloWorldElement = screen.getByText(/Hello, world!/i);
		expect(helloWorldElement).toBeInTheDocument();

		const buttonElement = screen.getByRole('button');
		expect(buttonElement).toBeInTheDocument();

		const inputElement = screen.getByPlaceholderText('input value');
		expect(inputElement).toBeInTheDocument();
		expect(inputElement).toMatchSnapshot();
	});

	test('Examples with Query methods', () => {
		render(<MainPage />);

		const nullableHelloWorldElement = screen.queryByText(/Hello, world! 2/i);
		expect(nullableHelloWorldElement).toBeNull();
	});

	test('Examples with Find methods', async () => {
		render(<MainPage />);

		screen.debug();

		const dataElement = await screen.findByText(/Data is received/i);
		expect(dataElement).toBeInTheDocument();
		expect(dataElement).toHaveStyle({
			color: 'red'
		});

		screen.debug();
	});

	test('Examples with React click event', () => {
		render(<MainPage />);

		const toggleSwitcher = screen.getByTestId('toggle-switcher');

		expect(screen.queryByTestId('toggle-element')).toBeNull();

		fireEvent.click(toggleSwitcher);
		expect(screen.getByTestId('toggle-element')).toBeInTheDocument();

		fireEvent.click(toggleSwitcher);
		expect(screen.queryByTestId('toggle-element')).toBeNull();
	});

	test('Examples with React input event', () => {
		render(<MainPage />);

		const inputElement = screen.getByPlaceholderText('input value');
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
