import App from '../App';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';

const routerConfig = {
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
			path: '*',
			element: <ErrorPage />
		}
	]
};

export default routerConfig;
