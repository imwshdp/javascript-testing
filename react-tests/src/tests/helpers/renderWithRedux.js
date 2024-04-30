import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import { createReduxStore } from '../../store';

export function renderWithRedux({ component, initialState }) {
	const store = createReduxStore(initialState);
	return render(<Provider store={store}>{component}</Provider>);
}
