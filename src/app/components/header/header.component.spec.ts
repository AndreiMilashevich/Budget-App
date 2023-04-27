import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxTranslateModule } from 'src/app/translate/translate.module';

describe('HeaderComponent', () => {
	let fixture: ComponentFixture<HeaderComponent>;
	let component: HeaderComponent;

	const fakeDropDownCongig = [
		{title: 'English',	code: 'en'},
		{title: 'Polish',	code: 'pl'},
	];

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeaderComponent],
			imports: [
				MatMenuModule,
				MatToolbarModule,
				NgxTranslateModule,
			],
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('renders without errors', () => {
		expect(component).toBeTruthy();
	});

	it('should return item code', () => {
		expect(component.trackByFn(0, fakeDropDownCongig[0])).toBe('en');
	});

	it('should return item code', () => {
		expect(component.trackByFn(0, fakeDropDownCongig[1])).toBe('pl');
	});

	it('should change language', () => {
		component.dropdownConfig = fakeDropDownCongig;
		fixture.detectChanges();
		component.clickHandler(1);
		expect(component.selectedLanguage).toBe('Polish');
	});
});
