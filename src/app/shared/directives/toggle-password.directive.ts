import { Directive, DoCheck, ElementRef, HostBinding } from '@angular/core';

@Directive({
	selector: '[appTogglePassword]',
	exportAs: 'togglePassword'
})
export class TogglePasswordDirective implements DoCheck {
	@HostBinding('type') public passwordType: string = 'password';
	private isPassword: boolean = true;

	constructor(private readonly el: ElementRef) {}

	public ngDoCheck(): void {
		this.passwordType = this.isPassword ? 'password' : 'text';
	}

	public togglePassword(): void {
		this.isPassword = !this.isPassword;
	}
}
