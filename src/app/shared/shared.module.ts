import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { PercentPipe } from './pipes/percent.pipe';
import { TogglePasswordDirective } from './directives/toggle-password.directive';
import { ValidatorMessageDirective } from './directives/validator-message.directive';


@NgModule({
	declarations: [
		ValidatorMessageDirective,
		TogglePasswordDirective,
		PercentPipe,
		FormFieldComponent,
	],
	imports: [
		CommonModule,
		MatIconModule,
		FormsModule,
	],
	exports: [
		ValidatorMessageDirective,
		TogglePasswordDirective,
		PercentPipe,
		FormFieldComponent,
	]
})
export class SharedModule { }
