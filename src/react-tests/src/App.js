import { useEffect, useState } from 'react';

function App() {
	const [data, setData] = useState(null);
	const [toggle, setToggle] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const onClick = () => setToggle(previousToggle => !previousToggle);

	useEffect(() => {
		setTimeout(() => {
			setData({});
		}, 100);
	}, []);

	return (
		<div className='App'>
			<h1>Hello, world!</h1>

			<h2>Example with toggle</h2>
			{toggle && <div data-testid='toggle-element'>Toggled!</div>}
			<button data-testid='toggle-switcher' onClick={onClick}>
				Click me!
			</button>

			<h2>Example with input</h2>
			<input
				type='text'
				placeholder='input value'
				value={inputValue}
				onChange={event => setInputValue(event.target.value)}
			/>

			<h2>Example with async data fetching</h2>
			{data && <div style={{ color: 'red' }}>Data is received</div>}
		</div>
	);
}

export default App;
