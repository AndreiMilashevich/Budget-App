/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-magic-numbers */
import { ValidatorMessageDirective } from './validator-message.directive';

import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
	selector: 'app-test',
	template: `
		<div>
			<p *appValidator="condition">validator works</p>
		</div>`,
})

class TestComponent {
	@Input() public condition!: boolean;
}

describe('validator directive', () => {
	let fixture: ComponentFixture<TestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ValidatorMessageDirective, TestComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();
	});

	it('directive render p when condition false', () => {
		fixture.componentInstance.condition = false;
		fixture.detectChanges();
		const els = fixture.nativeElement.querySelectorAll('p');
		expect(els.length).toBe(1);
	});

	it('directive render p when condition true', () => {
		fixture.componentInstance.condition = true;
		fixture.detectChanges();
		const els = fixture.nativeElement.querySelectorAll('p');
		expect(els.length).toBe(0);
	});
});
