import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TogglePasswordDirective } from './directives/toggle-password.directive';
import { ValidatorMessageDirective } from './directives/validator-message.directive';


@NgModule({
	declarations: [
		ValidatorMessageDirective,
		TogglePasswordDirective,
	],
	imports: [
		CommonModule
	],
	exports: [
		ValidatorMessageDirective,
		TogglePasswordDirective,
	]
})
export class SharedModule { }
