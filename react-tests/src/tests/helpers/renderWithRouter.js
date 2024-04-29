import { Routes, Route, MemoryRouter } from 'react-router';

import { routerConfig } from '../../router/data';

function generateRoutesFromConfig(routes, deep = 0) {
	return routes.map((route, index) => {
		const element = route.element;
		let nestedRoutes = route.children ? generateRoutesFromConfig(route.children, deep + 1) : null;

		return (
			<Route key={`${deep}-${index}`} path={route.path} element={element}>
				{nestedRoutes}
			</Route>
		);
	});
}

export function renderWithRouter(component, initialRoute = '/') {
	return (
		<MemoryRouter initialEntries={[initialRoute]} initialIndex={0}>
			<Routes>{generateRoutesFromConfig(routerConfig)}</Routes>
			{component}
		</MemoryRouter>
	);
}
