/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { FormFieldComponent } from './form-field.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

describe('FormFieldComponent', () => {
	let component: FormFieldComponent;
	let fixture: ComponentFixture<FormFieldComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FormFieldComponent],
			imports: [
				FormsModule,
				MatIconModule,
			]
		}).compileComponents();

		fixture = TestBed.createComponent(FormFieldComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should change type from password to text', () => {
		component.isHidden = true;
		component.buttonClickHandler();
		expect(component.type).toEqual('text');
	});

	it('should change type from text to password', () => {
		component.isHidden = false;
		component.buttonClickHandler();
		expect(component.type).toEqual('password');
	});

	it('buttonClickHandler should be called by click', fakeAsync(() => {
		spyOn(component, 'buttonClickHandler');
		component.isPasswordField = true;
		fixture.detectChanges();
		const button = fixture.debugElement.query(By.css('button'));
		button.triggerEventHandler('click', null);

		tick();
		// fixture.detectChanges();
		expect(component.buttonClickHandler).toHaveBeenCalled();
	}));
});
