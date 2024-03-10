import { useEffect, useState } from 'react';

function App() {
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
		<main className='App'>
			<div>
				<h1>Hello, world!</h1>
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
				<h2>Example with async data fetching</h2>
				{data && <div style={{ color: 'red' }}>Data is received</div>}
			</div>
		</main>
	);
}

export default App;
