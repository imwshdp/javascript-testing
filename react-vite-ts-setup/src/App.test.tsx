import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
	test('renders Vite + React heading', () => {
		render(<App />);
		const headingElement = screen.getByText(/Vite \+ React/i);
		expect(headingElement).toBeInTheDocument();
	});

	test('renders both logos', () => {
		render(<App />);
		const viteLogo = screen.getByAltText('Vite logo');
		const reactLogo = screen.getByAltText('React logo');
		expect(viteLogo).toBeInTheDocument();
		expect(reactLogo).toBeInTheDocument();
	});

	test('increments count on button click', () => {
		render(<App />);
		const button = screen.getByRole('button', { name: /count is 0/i });
		fireEvent.click(button);
		expect(button).toHaveTextContent('count is 1');
	});
});
