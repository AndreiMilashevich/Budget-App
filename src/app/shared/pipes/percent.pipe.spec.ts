import { PercentPipe } from './percent.pipe';

describe('PercentPipe', () => {
	const pipe = new PercentPipe();

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('add % to value', () => {
		expect(pipe.transform('10')).toBe('10 %');
	});
});
