/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MainPage from '../MainPage';

import axios from 'axios';

describe('React tests :>>', () => {
	// mock axios for every <Users /> render inside <MainPage />
	beforeEach(() => {
		const response = {
			data: []
		};
		axios.get = jest.fn().mockResolvedValue(response);
	});

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

	test('Click event', () => {
		render(<MainPage />);

		const toggleSwitcher = screen.getByTestId('toggle-switcher');

		expect(screen.queryByTestId('toggle-element')).toBeNull();

		act(() => fireEvent.click(toggleSwitcher));
		expect(screen.getByTestId('toggle-element')).toBeInTheDocument();

		act(() => fireEvent.click(toggleSwitcher));
		expect(screen.queryByTestId('toggle-element')).toBeNull();
	});

	test('Input event', () => {
		render(<MainPage />);

		const inputElement = screen.getByPlaceholderText(/input value/i);
		expect(screen.queryByTestId('value-element')).toContainHTML('');

		// Example with fireEvent
		// act(() =>
		// 	fireEvent.input(inputElement, {
		// 		target: {
		// 			value: '123'
		// 		}
		// 	})
		// );

		// Example with userEvent
		act(() => userEvent.type(inputElement, '123'));

		expect(screen.queryByTestId('value-element')).toContainHTML('123');
	});

	// clear mock axios after every test
	afterEach(() => {
		jest.clearAllMocks();
	});
});
