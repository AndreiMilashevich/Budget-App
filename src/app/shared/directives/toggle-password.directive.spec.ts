import { TogglePasswordDirective } from './toggle-password.directive';

describe('TogglePasswordDirective', () => {
	it('should create an instance', () => {
		const directive = new TogglePasswordDirective();
		expect(directive).toBeTruthy();
	});

	it('should toggle type', () => {
		const directive = new TogglePasswordDirective();
		directive.passwordType = 'password';
		directive.togglePassword();
		directive.ngDoCheck();
		expect(directive.passwordType).toBe('text');
	});
});
