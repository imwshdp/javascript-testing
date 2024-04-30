import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='nav'>
			<Link data-testid='main-link' to={'/'}>
				Main Page
			</Link>
			<Link data-testid='about-link' to={'/about'}>
				About Page
			</Link>
			<Link data-testid='users-link' to={'/users'}>
				User list
			</Link>

			<div className='separator' />

			<Link to={'/redux'}>Redux</Link>

			<div className='separator' />

			<Link to={'/e2e'}>E2E</Link>
			<Link to={'/users-test'}>Async E2E</Link>
		</div>
	);
};

export default Navbar;
