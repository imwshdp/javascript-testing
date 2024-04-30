import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
	return (
		<main className='app'>
			<Navbar />
			<Outlet />
		</main>
	);
}

export default App;
