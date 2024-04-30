import { getCounterValue } from '../../../../store/reducers/selectors/getCounterValue';

describe('GetCounterValue Selector Test :>>', () => {
	test('Work with empty state', () => {
		expect(getCounterValue({})).toBe(0);
	});

	test('Work with state', () => {
		expect(
			getCounterValue({
				counter: {
					value: 100
				}
			})
		).toBe(100);
	});
});
