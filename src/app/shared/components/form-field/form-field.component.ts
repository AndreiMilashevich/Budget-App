import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
	selector: 'app-form-field',
	templateUrl: './form-field.component.html',
	styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {
	@Input() public label: string = '';
	@Input() public type: string = 'text';
	@Input() public isPasswordField: boolean = false;
	@Input() public isValidationPassed: boolean = true;
	@Input() public validationMessage: string = '';

	@ViewChild('input') private readonly input!: ElementRef;

	public value = '';

	public isHidden: boolean = true;

	public buttonClickHandler(): void {
		this.iconSwitcher();
		this.typeSwitcher();
		this.inputFocusSetter();
	}

	private iconSwitcher(): void {
		this.isHidden = !this.isHidden;
	}

	private typeSwitcher(): void {
		this.type = this.isHidden ? 'password' : 'text';
	}

	private inputFocusSetter(): void {
		this.input.nativeElement.focus();
	}
}
