import { useState } from 'react';

function E2ePage() {
	const [value, setValue] = useState('');
	const [visible, setVisible] = useState(false);

	const toggleVisibility = () => value === 'hello' && setVisible(previousVisible => !previousVisible);

	const onChangeHandler = event => {
		setValue(event.target.value);
	};

	return (
		<section className='content'>
			<h1>E2E Tests Page</h1>

			<input
				type='text'
				id='search'
				onChange={onChangeHandler}
				value={value}
				placeholder='type "hello" here and click on button below'
			/>
			<button type='button' id='toggle' onClick={toggleVisibility}>
				Hello, world
			</button>

			{visible && <h2 id='hello'>HELLO WORLD TO E2E</h2>}
		</section>
	);
}

export default E2ePage;
