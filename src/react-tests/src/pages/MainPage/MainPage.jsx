import { useEffect, useState } from 'react';
import Users from '../../components/Users';

const MainPage = () => {
	const [data, setData] = useState(null);
	const [toggle, setToggle] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const onClick = () => setToggle(previousToggle => !previousToggle);

	useEffect(() => {
		const timer = setTimeout(() => {
			setData({});
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	return (
		<section className='content'>
			<h1 data-testid='main-page'>Main Page</h1>

			<div>
				<h2>Example with text</h2>
				<span>Hello, world!</span>
			</div>

			<div>
				<h2>Example with toggle</h2>

				{toggle && <div data-testid='toggle-element'>Toggled!</div>}
				<button data-testid='toggle-switcher' onClick={onClick}>
					Click me!
				</button>
			</div>

			<div>
				<h2>Example with input</h2>

				<input
					type='text'
					placeholder='input value'
					value={inputValue}
					onChange={event => setInputValue(event.target.value)}
				/>
				<div>
					<b data-testid='value-element'>{inputValue}</b>
				</div>
			</div>

			<div>
				<h2>Example with async actions</h2>

				{data && <div style={{ color: 'red' }}>Data is received</div>}
			</div>

			<div>
				<h2>Example with async data fetching</h2>

				<Users />
			</div>
		</section>
	);
};

export default MainPage;
