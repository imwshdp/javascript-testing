import { Routes, Route, MemoryRouter } from 'react-router';

import { render } from '@testing-library/react';

import { routerConfig } from '../../router';

export function generateRoutesFromConfig({ routes, parentPath = '/', deep = 0 }) {
	return routes.map((route, index) => {
		const element = route.element;
		const path = route.path ?? parentPath;

		let nestedRoutes = route.children
			? generateRoutesFromConfig({
					routes: route.children,
					parentPath: path,
					deep: deep + 1
			  })
			: null;

		return (
			<Route key={`${deep}-${index}`} path={path} element={element}>
				{nestedRoutes}
			</Route>
		);
	});
}

export function renderWithRouter(component, initialRoute = '/') {
	return render(
		<MemoryRouter initialEntries={[initialRoute]} initialIndex={0}>
			<Routes>{generateRoutesFromConfig({ routes: routerConfig })}</Routes>
			{component}
		</MemoryRouter>
	);
}
