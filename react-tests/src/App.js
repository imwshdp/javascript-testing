import { Outlet, Link } from 'react-router-dom';

function App() {
	return (
		<main className='app'>
			<div className='nav'>
				<Link data-testid='main-link' to={'/'}>
					Main Page
				</Link>
				<Link data-testid='about-link' to={'/about'}>
					About Page
				</Link>
			</div>

			<Outlet />
		</main>
	);
}

export default App;