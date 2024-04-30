/* eslint-disable testing-library/prefer-screen-queries */
import userEvent from '@testing-library/user-event';

import { renderWithRedux, renderTestApp } from '../../helpers';
import Counter from '../../../components/Counter';

describe('Counter Test :>>', () => {
	test('Incremented', async () => {
		const view = renderWithRedux({
			component: <Counter />,
			initialState: {
				counter: {
					value: 10
				}
			}
		});

		// or
		// const view = renderTestApp({
		// 	component: <Counter />,
		// 	options: {
		// 		initialState: {
		// 			counter: {
		// 				value: 10
		// 			}
		// 		}
		// 	}
		// });

		let counterTitle = view.getByTestId('counter-title');
		expect(counterTitle).toHaveTextContent('10');

		const incrementButton = view.getByTestId('increment-button');
		userEvent.click(incrementButton);

		counterTitle = view.getByTestId('counter-title');
		expect(counterTitle).toHaveTextContent('11');
	});
});
