import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCounterValue } from '../../store/reducers/selectors/getCounterValue';

import { decremented, incremented } from '../../store/reducers/counterReducer';

function Counter() {
	const dispatch = useDispatch();
	const value = useSelector(getCounterValue);

	const onIncrement = () => dispatch(incremented());
	const onDecrement = () => dispatch(decremented());

	return (
		<div>
			<h1>Value = {value}</h1>
			<button type='button' onClick={onIncrement}>
				Increment
			</button>
			<button type='button' onClick={onDecrement}>
				Decrement
			</button>
		</div>
	);
}

export default Counter;
