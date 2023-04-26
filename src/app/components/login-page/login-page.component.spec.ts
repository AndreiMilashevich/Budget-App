import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgxTranslateModule } from 'src/app/translate/translate.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslatePipe } from '@ngx-translate/core';

describe('LoginPageComponent', () => {
	let fixture: ComponentFixture<LoginPageComponent>;
	let component: LoginPageComponent;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				LoginPageComponent,
				TranslatePipe,
			],
			imports: [
				MatIconModule,
				MatCardModule,
				NgxTranslateModule,
				SharedModule,
			]
		}).compileComponents();

		fixture = TestBed.createComponent(LoginPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('renders without errors', () => {
		expect(component).toBeTruthy();
	});
});
