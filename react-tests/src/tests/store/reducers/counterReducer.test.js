import counterReducer, { incremented, decremented } from '../../../store/reducers/counterReducer';

describe('Counter Reducer Test', () => {
	test('Incremented', () => {
		expect(
			counterReducer(
				{
					value: 0
				},
				incremented()
			)
		).toEqual({
			value: 1
		});
	});

	test('Decremented', () => {
		expect(
			counterReducer(
				{
					value: 1
				},
				decremented()
			)
		).toEqual({
			value: 0
		});
	});

	test('With empty state', () => {
		expect(counterReducer(undefined, decremented())).toEqual({
			value: -1
		});

		expect(counterReducer(undefined, incremented())).toEqual({
			value: 1
		});
	});
});
