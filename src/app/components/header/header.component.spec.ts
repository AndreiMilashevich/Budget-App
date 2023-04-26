import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxTranslateModule } from 'src/app/translate/translate.module';

describe('HeaderComponent', () => {
	let fixture: ComponentFixture<HeaderComponent>;
	let component: HeaderComponent;

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
});
