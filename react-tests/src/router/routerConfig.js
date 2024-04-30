import App from '../App';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import UsersPage from '../pages/UsersPage';
import UserPage from '../pages/UserPage';

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
				element: <UsersPage />,
				children: []
			},
			{
				path: 'users/:userId',
				element: <UserPage />
			},
			{
				path: '*',
				element: <ErrorPage />
			}
		]
	}
];
