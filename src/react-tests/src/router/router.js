import App from '../App';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';

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
		}
	]
};

export default routerConfig;
