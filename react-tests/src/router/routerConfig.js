import App from '../App';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import UsersPage from '../pages/UsersPage';
import UserPage from '../pages/UserPage';
import ReduxPage from '../pages/ReduxPage';
import E2ePage from '../pages/E2ePage';
import UsersForTest from '../components/UsersForTest';

export const routerConfig = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <MainPage />
			},
			{
				path: 'about',
				element: <AboutPage />
			},
			{
				path: 'users',
				element: <UsersPage />
			},
			{
				path: 'users/:userId',
				element: <UserPage />
			},
			{
				path: 'redux',
				element: <ReduxPage />
			},
			{
				path: 'e2e',
				element: <E2ePage />
			},
			{
				path: 'users-test',
				element: <UsersForTest />
			},
			{
				path: '*',
				element: <ErrorPage />
			}
		]
	}
];
