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
			<h1 data-testid='counter-title'>{value}</h1>
			<button data-testid='increment-button' type='button' onClick={onIncrement}>
				Increment
			</button>
			<button data-testid='decrement-button' type='button' onClick={onDecrement}>
				Decrement
			</button>
		</div>
	);
}

export default Counter;
