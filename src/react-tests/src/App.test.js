/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Renders learn react link', () => {
	test('Examples with Get methods', () => {
		render(<App />);

		const helloWorldElement = screen.getByText(/Hello, world!/i);
		expect(helloWorldElement).toBeInTheDocument();

		const buttonElement = screen.getByRole('button');
		expect(buttonElement).toBeInTheDocument();

		const inputElement = screen.getByPlaceholderText('input value');
		expect(inputElement).toBeInTheDocument();
		expect(inputElement).toMatchSnapshot();
	});

	test('Examples with Query methods', () => {
		render(<App />);

		const nullableHelloWorldElement = screen.queryByText(/Hello, world! 2/i);
		expect(nullableHelloWorldElement).toBeNull();
	});

	test('Examples with Find methods', async () => {
		render(<App />);

		screen.debug();

		const dataElement = await screen.findByText(/Data is received/i);
		expect(dataElement).toBeInTheDocument();
		expect(dataElement).toHaveStyle({
			color: 'red'
		});

		screen.debug();
	});

	test('Examples with React click event', () => {
		render(<App />);

		const toggleSwitcher = screen.getByTestId('toggle-switcher');

		expect(screen.queryByTestId('toggle-element')).toBeNull();

		fireEvent.click(toggleSwitcher);
		expect(screen.getByTestId('toggle-element')).toBeInTheDocument();

		fireEvent.click(toggleSwitcher);
		expect(screen.queryByTestId('toggle-element')).toBeNull();
	});
});
