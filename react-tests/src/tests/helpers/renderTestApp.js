import { Provider } from 'react-redux';
import { Routes, MemoryRouter } from 'react-router';

import { render } from '@testing-library/react';

import { createReduxStore } from '../../store';
import { routerConfig } from '../../router';
import { generateRoutesFromConfig } from './renderWithRouter';

export function renderTestApp({ component, options }) {
	const store = createReduxStore(options.initialState);

	return render(
		<Provider store={store}>
			<MemoryRouter initialEntries={[options.initialRoute ?? '/']} initialIndex={0}>
				<Routes>{generateRoutesFromConfig({ routes: routerConfig })}</Routes>
				{component}
			</MemoryRouter>
		</Provider>
	);
}
