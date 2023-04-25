import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PercentPipe } from './pipes/percent.pipe';
import { TogglePasswordDirective } from './directives/toggle-password.directive';
import { ValidatorMessageDirective } from './directives/validator-message.directive';


@NgModule({
	declarations: [
		ValidatorMessageDirective,
		TogglePasswordDirective,
		PercentPipe,
	],
	imports: [
		CommonModule
	],
	exports: [
		ValidatorMessageDirective,
		TogglePasswordDirective,
		PercentPipe,
	]
})
export class SharedModule { }
